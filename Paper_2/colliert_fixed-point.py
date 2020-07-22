---
layout: default
title: colliert_fixed-point | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import argparse
from decimal import Decimal

parser = argparse.ArgumentParser()
parser.add_argument("--bits", "-b", "-n", type=int, default=8)

args = parser.parse_args()

b10 = Decimal(input("Enter a number in Base Ten\n>>> "))
int_part, dec_part = divmod(b10, 1)  # type: ignore
print(
    bin(int(int_part))[2:][-args.bits :].zfill(args.bits)
    + "."
    + bin(int(dec_part * (2 ** args.bits)))[2:][-args.bits :].zfill(args.bits)
)
