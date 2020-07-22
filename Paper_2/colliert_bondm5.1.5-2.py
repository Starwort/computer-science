---
layout: default
title: colliert_bondm5.1.5-2 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import argparse
from decimal import Decimal

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()


def fac(x):
    if x < 2:
        return 1
    return fac(x - 1) * x

print(sum(Decimal(2 * i + 2) / fac(Decimal(2 * i + 1)) for i in range(args.n)))
