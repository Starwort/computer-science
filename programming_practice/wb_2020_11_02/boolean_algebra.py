import typing
from functools import lru_cache

Column = typing.Tuple[str, typing.Callable[..., bool]]


@lru_cache
def name_for_input(input: int) -> str:
    remainder, letter = divmod(input, 26)
    out = chr(ord("A") + letter)
    if remainder:
        out + name_for_input(remainder - 1)
    return out


def inputs(n_inputs: int) -> typing.Generator[typing.Tuple[bool, ...], None, None]:
    n_inputs -= 1
    if n_inputs:
        for remaining in inputs(n_inputs):
            yield remaining + (False,)
            yield remaining + (True,)
    else:
        yield (False,)
        yield (True,)


TruthTable = typing.Tuple[typing.List[str], typing.List[typing.List[bool]]]


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


def print_table(table: TruthTable) -> None:
    print(*table[0])
    for row in table[1]:
        print(*[(" \u2588"[val]) * len(header) for header, val in zip(table[0], row)])


def markdown_table(table: TruthTable) -> str:
    header = "|".join(table[0])
    out = [header]
    out.append(":---:|" * len(table[0]))
    for row in table[1]:
        out.append("|".join("01"[value] for value in row))
    return "\n".join(out)
