#!/bin/python3
import typing
import random
import re
import time
from fractions import Fraction
import typing
import textwrap

try:
    import click
except ImportError:
    from pip._internal import main as pip

    pip("install click -U --user".split())
    import click

try:
    import colorama as colour
except ImportError:
    from pip._internal import main as pip

    pip("install colorama -U --user".split())
    import colorama as colour

try:
    import tty, termios, sys

    # successful, so unix
    orig = termios.tcgetattr(sys.stdin)

    def setup():
        tty.setraw(sys.stdin)

    def getch():
        return sys.stdin.read(1)

    def cleanup():
        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, orig)

    ON_WINDOWS = False
except ImportError:
    # unsuccessful, so probably windows
    try:
        import msvcrt

        # successful, so windows
        def setup():
            pass

        getch = lambda: msvcrt.getch().decode()

        def cleanup():
            pass

        ON_WINDOWS = True
    except ImportError:
        # wtf is wrong with your operating system?!
        print("Could not determine the getch method for your system")
        exit(1)

TEMPLATE = """
┌────┬──────────────────────────┬─┐ ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐ ┌───────────────────────────────┐
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │^│ │  00  │  01  │  02  │  03  │  04  │  05  │  06  │  07  │  08  │  09  │ │                               │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL ├─┤ │ %00% │ %01% │ %02% │ %03% │ %04% │ %05% │ %06% │ %07% │ %08% │ %09% │ │  Accumulator  Program Counter │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  10  │  11  │  12  │  13  │  14  │  15  │  16  │  17  │  18  │  19  │ │ ┌───────────┐┌───────────────┐│
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %10% │ %11% │ %12% │ %13% │ %14% │ %15% │ %16% │ %17% │ %18% │ %19% │ │ │%A%    AAA ││            PC ││
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  20  │  21  │  22  │  23  │  24  │  25  │  26  │  27  │  28  │  29  │ │ └───────────┘└───────────────┘│
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %20% │ %21% │ %22% │ %23% │ %24% │ %25% │ %26% │ %27% │ %28% │ %29% │ │  Output                       │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  30  │  31  │  32  │  33  │  34  │  35  │  36  │  37  │  38  │  39  │ │ ┌───────────────────────────┐ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %30% │ %31% │ %32% │ %33% │ %34% │ %35% │ %36% │ %37% │ %38% │ %39% │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  40  │  41  │  42  │  43  │  44  │  45  │  46  │  47  │  48  │  49  │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %40% │ %41% │ %42% │ %43% │ %44% │ %45% │ %46% │ %47% │ %48% │ %49% │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  50  │  51  │  52  │  53  │  54  │  55  │  56  │  57  │  58  │  59  │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %50% │ %51% │ %52% │ %53% │ %54% │ %55% │ %56% │ %57% │ %58% │ %59% │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  60  │  61  │  62  │  63  │  64  │  65  │  66  │  67  │  68  │  69  │ │ │ XXXXXXXXXXXXXXXXXXXXXXXXX │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %60% │ %61% │ %62% │ %63% │ %64% │ %65% │ %66% │ %67% │ %68% │ %69% │ │ └───────────────────────────┘ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  70  │  71  │  72  │  73  │  74  │  75  │  76  │  77  │  78  │  79  │ │  ┌──────┐ ┌──────┐ ┌───────┐  │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %70% │ %71% │ %72% │ %73% │ %74% │ %75% │ %76% │ %77% │ %78% │ %79% │ │  │ Step │ │ Play │ │ Reset │  │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │  80  │  81  │  82  │  83  │  84  │  85  │  86  │  87  │  88  │  89  │ │  └──────┘ └──────┘ └───────┘  │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │B│ │ %80% │ %81% │ %82% │ %83% │ %84% │ %85% │ %86% │ %87% │ %88% │ %89% │ │       ┌─────────────────────┐ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL ├─┤ │  90  │  91  │  92  │  93  │  94  │  95  │  96  │  97  │  98  │  99  │ │ Entry │ E%              EEE │ │
│ NN │ LLLLLLLLLLLLLLLLLLLLLLLL │v│ │ %90% │ %91% │ %92% │ %93% │ %94% │ %95% │ %96% │ %97% │ %98% │ %99% │ │       └─────────────────────┘ │
└────┴──────────────────────────┴─┘ └──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘ └───────────────────────────────┘
""".strip()


if ON_WINDOWS:
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
    wrapped_lines = textwrap.wrap(output, width=25)

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
        .replace("PC", "{: >2}".format(pc))
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


colour.init()

ParsedOpCode = typing.Tuple[int, int]
Memory = typing.List[int]

normalise_pattern = re.compile(r"(\s+|//.*)")


"""
HLT 000
ADD 1xx
SUB 2xx
STA 3xx
UNU 4xx
LDA 5xx
BRA 6xx
BRZ 7xx
BRP 8xx
INP 901
OUT 902
OTC 903
"""

mnemonics = {
    "HLT": 0,
    "ADD": 100,
    "SUB": 200,
    "STA": 300,
    "UNU": 400,
    "LDA": 500,
    "BRA": 600,
    "BRZ": 700,
    "BRP": 800,
    "INP": 901,
    "OUT": 902,
    "OTC": 903,
    "DAT": 0,
}
narg_mnemonics = {"HLT", "INP", "OUT", "OTC"}

layout = {
    "up": {"down": "down", "right": "Step", "tab": "down"},
    "down": {"up": "up", "right": "Step", "tab": "Step"},
    "Step": {"up": "up", "left": "up", "right": "Play", "down": "down", "tab": "Play"},
    "Play": {
        "up": "up",
        "left": "Step",
        "right": "Reset",
        "down": "down",
        "tab": "Reset",
    },
    "Reset": {"up": "up", "left": "Play", "down": "down", "tab": "up"},
}


class LMC:
    program: typing.List[str]

    def __init__(self, delay: float = 0.25):
        self.memory = [0 for i in range(100)]
        self.accumulator = 0
        self.ip = 0
        self.halted = False
        self.program = []
        self.output = ""
        self.selected = "up"
        self.waiting_input = False
        self.scrollpos = 0
        self.last_entry = 0
        self.delay = delay
        setup()
        print(colour.ansi.clear_screen())

    def __del__(self):
        cleanup()

    @staticmethod
    def parse_instruction(opcode: int) -> ParsedOpCode:
        return divmod(opcode, 100)

    def step(self):
        try:
            instruction = self.memory[self.ip]
            self.ip += 1
            opcode, operand = self.parse_instruction(instruction)
            [
                self.hlt,
                self.add,
                self.sub,
                self.sta,
                self.unu,
                self.lda,
                self.bra,
                self.brz,
                self.brp,
                self.io,
            ][opcode](operand)
        except IndexError:
            self.halted = True

    def menu(self):
        while True:
            self.render()
            in_char = getch()
            if ord(in_char) == 27:
                if ON_WINDOWS:
                    # on windows, esc is immediate quit
                    break
                next_char = getch()
                if next_char == "[":
                    # look for unix arrow sequences
                    dir = getch()
                    options = layout[self.selected]
                    if dir == "D":
                        if "left" in options:
                            self.selected = options["left"]
                        else:
                            print(chr(7), end="")
                    if dir == "C":
                        if "right" in options:
                            self.selected = options["right"]
                        else:
                            print(chr(7), end="")
                    if dir == "B":
                        if "down" in options:
                            self.selected = options["down"]
                        else:
                            if self.selected == "down":
                                self.scrollpos += 1
                                self.scrollpos = min(
                                    self.scrollpos, len(self.get_current_program())
                                )
                            else:
                                print(chr(7), end="")
                    if dir == "A":
                        if "up" in options:
                            self.selected = options["up"]
                        else:
                            if self.selected == "up":
                                self.scrollpos -= 1
                                self.scrollpos = max(self.scrollpos, 0)
                            else:
                                print(chr(7), end="")
                if next_char.lower() == "q":
                    break
            if ord(in_char) == 224:
                # look for windows arrow sequences
                next_char = getch()
                options = layout[self.selected]
                if dir == "K":
                    if "left" in options:
                        self.selected = options["left"]
                    else:
                        print(chr(7), end="")
                if dir == "M":
                    if "right" in options:
                        self.selected = options["right"]
                    else:
                        print(chr(7), end="")
                if dir == "P":
                    if "down" in options:
                        self.selected = options["down"]
                    else:
                        if self.selected == "down":
                            self.scrollpos += 1
                            self.scrollpos = min(
                                self.scrollpos, len(self.get_current_program())
                            )
                        else:
                            print(chr(7), end="")
                if dir == "H":
                    if "up" in options:
                        self.selected = options["up"]
                    else:
                        if self.selected == "up":
                            self.scrollpos -= 1
                            self.scrollpos = max(self.scrollpos, 0)
                        else:
                            print(chr(7), end="")

            if in_char == "\t":
                self.selected = layout[self.selected]["tab"]
            if in_char in " \n\r":
                if self.selected == "up":
                    self.scrollpos -= 1
                    self.scrollpos = max(0, self.scrollpos)
                if self.selected == "down":
                    self.scrollpos += 1
                    self.scrollpos = min(
                        len(self.get_current_program()), self.scrollpos
                    )
                if self.selected == "Step":
                    self.step()
                if self.selected == "Play":
                    self.play()
                if self.selected == "Reset":
                    self.reset()

    def play(self):
        try:
            while not self.halted:
                self.step()
                if self.scrollpos < self.ip - DISPLAY_HEIGHT * 3 / 4:
                    self.scrollpos = self.ip - DISPLAY_HEIGHT * 3 // 4
                if self.scrollpos > self.ip - DISPLAY_HEIGHT / 4:
                    self.scrollpos = max(0, self.ip - DISPLAY_HEIGHT // 4)
                self.render()
                time.sleep(self.delay)
        except KeyboardInterrupt:
            self.render()
            exit()

    def render(self):
        print(RESTORE, colour.Cursor.POS(), end="")
        screen = TEMPLATE
        if self.waiting_input:
            sel = "Entry"
        else:
            sel = self.selected
        if sel in ("Step", "Play", "Reset"):
            screen = render_button_select(sel, screen)
        screen = render_code(
            self.get_current_program(),
            self.scrollpos,
            self.ip - 1,
            sel == "up",
            sel == "down",
            screen,
        )
        screen = render_entry(self.last_entry, sel == "Entry", screen)
        screen = render_memory(self.ip - 1, self.memory, screen)
        screen = render_output(self.output, screen)
        screen = render_registers(self.accumulator, self.ip, screen)
        print(screen.replace("\n", "\r\n"), end="\r\n")

    def hlt(self, mailbox: int):
        """Halt 0xx"""
        self.halted = True

    def add(self, mailbox: int):
        """Add 1xx"""
        self.accumulator += self.memory[mailbox]
        if self.accumulator > 999:
            self.accumulator -= 1999
        elif self.accumulator < -999:
            self.accumulator += 1999

    def sub(self, mailbox: int):
        """Subtract 2xx"""
        self.accumulator -= self.memory[mailbox]
        if self.accumulator > 999:
            self.accumulator -= 1999
        elif self.accumulator < -999:
            self.accumulator += 1999

    def sta(self, mailbox: int):
        """Store accumulator 3xx"""
        self.memory[mailbox] = self.accumulator

    def unu(self, mailbox: int):
        """Undefined behaviour 4xx"""
        # randomise cell and acc contents
        self.memory[mailbox] = random.randint(-999, 999)
        self.accumulator = random.randint(-999, 999)

    def lda(self, mailbox: int):
        """Load value to accumulator 5xx"""
        self.accumulator = self.memory[mailbox]

    def bra(self, mailbox: int):
        """Branch always 6xx"""
        self.ip = mailbox

    def brz(self, mailbox: int):
        """Branch when zero 7xx"""
        if self.accumulator == 0:
            self.ip = mailbox

    def brp(self, mailbox: int):
        """Branch when non-negative 8xx"""
        if self.accumulator >= 0:
            self.ip = mailbox

    def io(self, mailbox: int):
        """Input/output 9xx"""
        if mailbox == 1:
            self.last_entry = 0
            self.waiting_input = True
            make_neg = False
            while True:
                self.render()
                char = getch()
                if char == "-":
                    self.last_entry = -abs(self.last_entry)
                    if self.last_entry == 0:
                        make_neg = True
                if char == "+":
                    self.last_entry = abs(self.last_entry)
                    make_neg = False
                if char in "1234567890":
                    if self.last_entry < 100:
                        self.last_entry *= 10
                        if self.last_entry >= 0:
                            self.last_entry += int(char)
                        else:
                            self.last_entry -= int(char)
                        if make_neg and self.last_entry != 0:
                            self.last_entry = -abs(self.last_entry)
                            make_neg = False
                    else:
                        print(chr(7))
                if char == "\x7f":
                    self.last_entry //= 10
                if char in "\r\n":
                    break
            self.accumulator = self.last_entry
            self.waiting_input = False
            # val = None
            # while val is None:
            #     try:
            #         val = int(input("IN> "))
            #         if val > 999:
            #             print("Value too big")
            #             val = None
            #         elif val < -999:
            #             print("Value too small")
            #             val = None
            #     except ValueError:
            #         print("Not a number")
            # self.accumulator = val
        elif mailbox == 2:
            self.output += "{} ".format(self.accumulator)
        elif mailbox == 3:
            self.output += chr(self.accumulator % 65536)

    @staticmethod
    def normalise_program(
        lines: typing.List[str],
    ) -> typing.Tuple[typing.List[typing.Tuple[str, str, str]], typing.Dict[str, int]]:
        identifiers = {}

        stripped_lines = []
        for line in lines:
            line = normalise_pattern.sub(" ", line).strip()
            if line:
                stripped_lines.append(line)

        parsed_lines = []
        for i, line in enumerate(stripped_lines):
            components = line.split()
            if len(components) == 3:
                ident, mnemonic, mailbox = components
                mnemonic = mnemonic.upper()
                identifiers[ident] = i
            elif len(components) == 2:
                if components[0] in mnemonics or (
                    components[0].upper() in mnemonics
                    and components[1] not in mnemonics
                ):
                    mnemonic, mailbox = components
                    mnemonic = mnemonic.upper()
                    if mnemonic in narg_mnemonics:
                        raise SyntaxError(
                            f"Mnemonic {mnemonic} cannot take "
                            f"a mailbox; given {mailbox}"
                        )
                    ident = ""
                else:
                    ident, mnemonic = components
                    mnemonic = mnemonic.upper()
                    if mnemonic not in narg_mnemonics:
                        raise SyntaxError(
                            f"Mnemonic {mnemonic} requires a mailbox; given none"
                        )
                    mailbox = ""
                    identifiers[ident] = i
            elif len(components) == 1:
                mnemonic = components[0].upper()
                if mnemonic not in mnemonics:
                    raise SyntaxError(f"{mnemonic}: not a mnemonic")
                if mnemonic not in narg_mnemonics:
                    raise SyntaxError(
                        f"Mnemonic {mnemonic} requires a mailbox; given none"
                    )
                ident = ""
                mailbox = ""
            else:
                raise SyntaxError(
                    f"{len(components)} components on this line ({stripped_lines[i]})"
                )
            parsed_lines.append((ident, mnemonic, mailbox))

        return parsed_lines, identifiers

    @staticmethod
    def format_program(lines: typing.List[str]) -> typing.List[str]:
        return LMC.format_parsed_program(LMC.normalise_program(lines)[0])

    @staticmethod
    def format_parsed_program(
        parsed_lines: typing.List[typing.Tuple[str, ...]]
    ) -> typing.List[str]:
        return ["".join("%-8s" % col for col in line) for line in parsed_lines]

    def get_current_program(self) -> typing.List[str]:
        lines = []
        for i, mailbox in enumerate(self.memory):
            opcode, operand = self.parse_instruction(mailbox)
            if opcode == 9:
                if operand == 1:
                    lines.append((f"Box{i:0>2}", "INP", ""))
                    continue
                if operand == 2:
                    lines.append((f"Box{i:0>2}", "OUT", ""))
                    continue
                if operand == 3:
                    lines.append((f"Box{i:0>2}", "OTC", ""))
                    continue
                lines.append((f"Box{i:0>2}", "DAT", mailbox))
                continue
            if opcode == 0:
                if operand == 0:
                    lines.append((f"Box{i:0>2}", "HLT", ""))
                else:
                    lines.append((f"Box{i:0>2}", "DAT", mailbox))
                continue
            lines.append((f"Box{i:0>2}", list(mnemonics.keys())[opcode], str(operand)))

        while lines[-1][1] == "HLT" and lines[-2][1] == "HLT":
            lines.pop()

        return self.format_parsed_program(lines)

    def reset(self):
        self.memory = [0 for i in range(100)]
        self.accumulator = 0
        self.halted = False
        self.ip = 0
        self.load_program(self.program)

    def load_program(self, lines: typing.List[str]):
        """Load a program into memory"""
        parsed_lines, identifiers = self.normalise_program(lines)
        self.program = self.format_parsed_program(parsed_lines)

        normalised_lines = []
        for _, mnemonic, mailbox in parsed_lines:
            if mailbox == "":
                normalised_lines.append((mnemonic, 0))
                continue  # is a narg mnemonic
            if mailbox.isdigit() or mailbox[0] == "-" and mailbox[1:].isdigit():
                normalised_lines.append((mnemonic, int(mailbox)))
                continue  # is a direct address
            if mailbox not in identifiers:
                raise NameError(f"{mailbox} not defined")
            normalised_lines.append((mnemonic, identifiers[mailbox]))

        for i, (mnemonic, mailbox_no) in enumerate(normalised_lines):
            opcode = mnemonics[mnemonic] + mailbox_no
            self.memory[i] = opcode


@click.command()
@click.argument("lmc-file", type=click.File("r"))
@click.option(
    "-s",
    "--sleep",
    "-d",
    "--delay",
    "-w",
    "--wait",
    type=float,
    default=0.25,
    help="Time waited between cycles during automatic playback",
)
@click.option(
    "--show-menu/--run-file",
    "-S/-R",
    default=False,
    help="Whether to use the interactive player or the automatic player",
)
@click.help_option("-h", "--help")
def main(lmc_file, sleep, show_menu):
    """Launch the LMC player. In interactive (menu) mode, press <ESC>
    if on Windows, or <ESC>Q if on Unix, to quit."""
    computer = LMC(sleep)
    computer.load_program(lmc_file.readlines())
    if show_menu:
        computer.menu()
    else:
        computer.play()


if __name__ == "__main__":
    main()  # pylint: disable=no-value-for-parameter
