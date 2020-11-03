import string
import typing
from functools import lru_cache
from math import log10

Column = typing.Tuple[str, typing.Callable[..., bool]]


@lru_cache
def name_for_input(input: int) -> str:
    remainder, letter = divmod(input, 26)
    out = chr(ord("A") + letter)
    if remainder:
        out + name_for_input(remainder - 1)
    return out


BoolSequenceGenerator = typing.Generator[typing.Tuple[bool, ...], None, None]


def inputs(n_inputs: int) -> BoolSequenceGenerator:
    if n_inputs == 0:
        raise ValueError("Cannot generate inputs for n_inputs = 0")
    n_inputs -= 1
    if n_inputs:
        for remaining in inputs(n_inputs):
            yield remaining + (False,)
            yield remaining + (True,)
    else:
        yield (False,)
        yield (True,)


def reverse_karnaugh_map_header(n_bits: int) -> BoolSequenceGenerator:
    if n_bits == 0:
        raise ValueError("Cannot generate karnaugh_map_header for n_bits = 0")
    n_bits -= 1
    if n_bits:
        for remaining in karnaugh_map_header(n_bits):
            yield (True,) + remaining
        for remaining in reverse_karnaugh_map_header(n_bits):
            yield (False,) + remaining
    else:
        yield (True,)
        yield (False,)


def karnaugh_map_header(n_bits: int) -> BoolSequenceGenerator:
    if n_bits == 0:
        raise ValueError("Cannot generate karnaugh_map_header for n_bits = 0")
    n_bits -= 1
    if n_bits:
        for remaining in karnaugh_map_header(n_bits):
            yield (False,) + remaining
        for remaining in reverse_karnaugh_map_header(n_bits):
            yield (True,) + remaining
    else:
        yield (False,)
        yield (True,)


TruthTable = typing.Tuple[typing.List[str], typing.List[typing.List[bool]]]
KarnaughMap = typing.Tuple[
    str,
    str,
    int,
    int,
    typing.List[typing.List[bool]],
]


def karnaugh_map(f: typing.Callable[..., bool], n_inputs: int) -> KarnaughMap:
    x_header_bits = (n_inputs + 1) // 2
    x_header_name = " ".join(name_for_input(i) for i in range(x_header_bits))
    y_header_bits = n_inputs // 2
    y_header_name = " ".join(
        name_for_input(i) for i in range(x_header_bits, x_header_bits + y_header_bits)
    )
    out: KarnaughMap = (x_header_name, y_header_name, x_header_bits, y_header_bits, [])
    for y in karnaugh_map_header(y_header_bits):
        out[4].append([f(*x, *y) for x in karnaugh_map_header(x_header_bits)])
    return out


def truth_table(*columns: Column, n_inputs: int = 1) -> TruthTable:
    out: TruthTable = (
        [
            *[name_for_input(i) for i in range(n_inputs)],
            *[column[0] for column in columns],
        ],
        [],
    )
    for row in inputs(n_inputs):
        out[1].append([*row, *[column[1](*row) for column in columns]])
    return out


bit_chars = "☐☑"
markdown_bit_chars = "01"


def print_table(table: TruthTable) -> None:
    print(*table[0])
    for row in table[1]:
        print(
            *[bit_chars[val].center(len(header)) for header, val in zip(table[0], row)]
        )


def print_karnaugh_map(map: KarnaughMap) -> None:
    # print('<sub>'+map[1]+'</sub>＼<sup>'+map[0]+'</sup>')
    print(
        " " * (map[3] + 2),
        map[0].center((map[2] + 1) << map[2]),
    )
    print(
        " " * (map[3] + 2),
        " ".join(
            "".join(bit_chars[val] for val in bits)
            for bits in karnaugh_map_header(map[2])
        ),
    )
    for i, (bits, row) in enumerate(zip(karnaugh_map_header(map[3]), map[4])):
        print(
            (map[1][i:][:1] or " ")[0],
            "".join(bit_chars[val] for val in bits),
            " ".join(bit_chars[val].center(map[2]) for val in row),
        )


def markdown_karnaugh_map(map: KarnaughMap) -> str:
    out = (
        "<sub>"
        + map[1]
        + "</sub>＼<sup>"
        + map[0]
        + "</sup> | "
        # + " " * (map[3] + 3)
        # + map[0].center((map[2] + 1) << map[2])
        # + " " * (map[3] + 3)
        + " | ".join(
            "".join(markdown_bit_chars[val] for val in bits)
            for bits in karnaugh_map_header(map[2])
        )
        + "\n--- | "
        + " | ".join(":-:" for _ in range(2 ** map[2]))
    )
    for bits, row in zip(karnaugh_map_header(map[3]), map[4]):
        out += "\n" + (
            "".join(markdown_bit_chars[val] for val in bits)
            + " | "
            + " | ".join(markdown_bit_chars[val] for val in row)
        )
    return out


def markdown_table(table: TruthTable) -> str:
    header = "|".join(table[0])
    out = [header]
    out.append(":---:|" * len(table[0]))
    for row in table[1]:
        out.append("|".join(markdown_bit_chars[value] for value in row))
    return "\n".join(out)


def print_markdown_both(f: typing.Callable[..., bool], n_inputs: int) -> None:
    print(markdown_table((truth_table(("Q", f), n_inputs=n_inputs))))
    print(markdown_karnaugh_map(karnaugh_map(f, n_inputs)))


def print_both(f: typing.Callable[..., bool], n_inputs: int) -> None:
    print_table((truth_table(("Q", f), n_inputs=n_inputs)))
    print_karnaugh_map(karnaugh_map(f, n_inputs))


def parse_boolean_to_evalable_string(expr: str) -> str:
    """Does not work properly if not all inputs are specified! (but accepts
    any ascii letter for an input)
    """
    inputs = sorted({i for i in expr if i in string.ascii_letters})
    for index, i in enumerate(inputs):
        expr = expr.replace(i, f"i[{index}]")
    expr = expr.replace("∧", " and ")
    expr = expr.replace("∨", " or ")
    expr = expr.replace("¬", " not ")
    expr = expr.replace("⊻", " ^ ")
    return expr


def parse_boolean_expression(expr: str) -> typing.Callable[..., bool]:
    return lambda *i: eval(parse_boolean_to_evalable_string(expr))
