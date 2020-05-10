from fractions import Fraction
import typing
import textwrap
import platform
import colorama as colour

with open("render_template", encoding="UTF-8") as file:
    TEMPLATE = file.read()

if platform.system() == "Windows":
    INVERT = colour.Back.WHITE + colour.Fore.BLACK
    RESTORE = colour.Back.RESET + colour.Fore.RESET
else:
    INVERT = "\u001b[7m"
    RESTORE = "\u001b[27m"

unicode_block_tops = {
    Fraction(0, 8): " ",
    Fraction(1, 8): "▁",
    Fraction(2, 8): "▂",
    Fraction(3, 8): "▃",
    Fraction(4, 8): "▄",
    Fraction(5, 8): "▅",
    Fraction(6, 8): "▆",
    Fraction(7, 8): "▇",
    Fraction(8, 8): "█",
}
unicode_block_bottoms = {
    1 - k: INVERT + v + RESTORE for k, v in unicode_block_tops.items()
}

SCROLLBAR_HEIGHT = 16
DISPLAY_HEIGHT = 20

SCROLL_UP = "▲"
SCROLL_DOWN = "▼"


def render_button_select(selected_button: str, template: str) -> str:
    """Render the specified button as selected and return the updated template"""
    return template.replace(selected_button, INVERT + selected_button + RESTORE)


def render_entry(entered_value: int, selected: bool, template: str) -> str:
    """Render the entry and return the updated template"""
    return template.replace(
        "EEE", "{:>3}".format(abs(entered_value)) + (RESTORE if selected else "")
    ).replace(
        "E%", (INVERT if selected else "") + ("- " if entered_value < 0 else "  ")
    )


def render_output(output: str, template: str) -> str:
    """Render the output and return the updated template"""
    processed_output = output.splitlines()
    wrapped_lines = [
        j
        for i in processed_output
        for j in textwrap.wrap(i, width=25, replace_whitespace=False)
    ]

    while len(wrapped_lines) < 6:
        wrapped_lines.append("")

    prepend = False
    while len(wrapped_lines) > 6:
        prepend = True
        wrapped_lines.pop(0)
    if prepend:
        wrapped_lines[0] = "<truncated>".center(25)

    return template.replace("XXXXXXXXXXXXXXXXXXXXXXXXX", "{:<25}").format(
        *wrapped_lines
    )


def render_memory(current: int, memory: typing.List[int], template: str) -> str:
    """Render the memory viewer and return the updated template"""
    template = template.replace(
        "%{:0>2}%".format(current), INVERT + "%{:0>2}%".format(current) + RESTORE
    ).replace(" {:0>2} ".format(current), INVERT + " {:0>2} ".format(current) + RESTORE)
    for i in range(100):
        template = template.replace("%{:0>2}%".format(i), "{:0= 4}".format(memory[i]))
    return template


def render_registers(accumulator: int, pc: int, template: str) -> str:
    """Render the system registers and return the updated template"""
    return (
        template.replace("AAA", "{: >3}".format(abs(accumulator)))
        .replace("%A%", " - " if accumulator < 0 else "   ")
        .replace("%PC", "{: >3}".format(pc))
    )


def render_code(
    code: typing.List[str],
    position: int,
    current_line: int,
    up_selected: bool,
    down_selected: bool,
    template: str,
) -> str:
    """Render the code viewer and return the updated template"""
    code = code.copy()
    lines = range(position, position + DISPLAY_HEIGHT)
    total_lines = len(code)
    code.extend([" " * 24] * DISPLAY_HEIGHT)

    line_nrs = ["{:>2}".format(i) if code[i].strip() else "  " for i in lines]
    if position != 0:
        code[position] = "        ...             "
        line_nrs[0] = ".."
        if current_line == position:
            current_line = 0
    if position + DISPLAY_HEIGHT < total_lines:
        code[position + DISPLAY_HEIGHT - 1] = "        ...             "
        line_nrs[-1] = ".."
        if current_line == position + DISPLAY_HEIGHT - 1:
            current_line = position + DISPLAY_HEIGHT

    template = (
        template.replace("B", "{}")
        .format(*generate_scrollbar(total_lines, position))
        .replace("LLLLLLLLLLLLLLLLLLLLLLLL", "{}")
        .format(
            *(
                code[line] if line != current_line else (INVERT + code[line] + RESTORE)
                for line in lines
            )
        )
        .replace("NN", "{}")
        .format(
            *(
                nr if line != current_line else (INVERT + nr + RESTORE)
                for nr, line in zip(line_nrs, lines)
            )
        )
        .replace("^", (INVERT + SCROLL_UP + RESTORE) if up_selected else SCROLL_UP)
        .replace(
            "v", (INVERT + SCROLL_DOWN + RESTORE) if down_selected else SCROLL_DOWN
        )
    )
    return template


def generate_scrollbar(input_length: int, position: int) -> typing.List[str]:
    blocks = [" " for i in range(SCROLLBAR_HEIGHT)]
    scrollbeam_height = min(
        Fraction(round(DISPLAY_HEIGHT * SCROLLBAR_HEIGHT * 8 / input_length), 8),
        SCROLLBAR_HEIGHT,
    )

    scrollbar_start = Fraction(round(position * SCROLLBAR_HEIGHT * 8 / input_length), 8)
    scrollbar_end = scrollbar_start + scrollbeam_height

    if scrollbar_end > SCROLLBAR_HEIGHT:
        scrollbar_end = SCROLLBAR_HEIGHT
        scrollbar_start = SCROLLBAR_HEIGHT - scrollbeam_height

    scrollbar_start_row, scrollbar_start_ratio = divmod(scrollbar_start, 1)
    scrollbar_end_row, scrollbar_end_ratio = divmod(scrollbar_end, 1)
    if scrollbar_end_ratio == 0:
        scrollbar_end_ratio = 1
        scrollbar_end_row -= 1

    scrollbar_start_ratio = 1 - scrollbar_start_ratio

    blocks[scrollbar_start_row] = unicode_block_tops[scrollbar_start_ratio]
    blocks[scrollbar_end_row] = unicode_block_bottoms[scrollbar_end_ratio]

    for i in range(scrollbar_start_row + 1, scrollbar_end_row):
        blocks[i] = unicode_block_tops[1]

    return blocks


if __name__ == "__main__":
    from interpreter import LMC

    with open("advanced_tasks.lmc") as file:
        code = LMC.format_program(file.readlines())
    computer = LMC(0.05)
    computer.load_program(code)
    while not computer.halted:
        computer.step()
    print(
        render_button_select(
            "Step",
            render_entry(
                0,
                True,
                render_output(
                    computer.output,
                    render_registers(
                        computer.accumulator,
                        computer.ip,
                        render_memory(
                            computer.ip,
                            computer.memory,
                            render_code(code, 0, computer.ip, False, True, TEMPLATE),
                        ),
                    ),
                ),
            ),
        )
    )
