---
layout: default
title: colliert_multiply_divide_up_to_16 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import argparse

parser = argparse.ArgumentParser()
parser.add_argument("initial", type=int)
parser.add_argument("coefficient", type=int)
parser.add_argument("--all", "-A", action="store_true")
parser.add_argument("--no-cap", "-C", action="store_false", dest="restrict_to_8_bit")
args = parser.parse_args()

if args.all:
    get_places = lambda i: [True if i == "1" else False for i in reversed(bin(i))]
else:

    def get_places(i: int):
        return reversed(
            {
                0: [False, False, False, False, False],
                1: [False, False, False, False, True],
                2: [False, False, False, True, False],
                3: [False, False, False, True, True],
                4: [False, False, True, False, False],
                5: [False, False, True, False, True],
                6: [False, False, True, True, False],
                7: [False, False, True, True, True],
                8: [False, True, False, False, False],
                9: [False, True, False, False, True],
                10: [False, True, False, True, False],
                11: [False, True, False, True, True],
                12: [False, True, True, False, False],
                13: [False, True, True, False, True],
                14: [False, True, True, True, False],
                15: [False, True, True, True, True],
                16: [True, False, False, False, False],
            }[i]
        )


if args.restrict_to_8_bit:
    args.initial %= 256
    args.coefficient %= 256

result = 0
for mult, shift in enumerate(get_places(args.coefficient)):
    if shift:
        result += args.initial << mult
if args.restrict_to_8_bit:
    result %= 256
print(result)
