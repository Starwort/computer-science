---
layout: default
title: colliert_bondm5.1.5-1 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import argparse
from decimal import Decimal

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()
π = Decimal(3)
coeff = 1
for i in range(args.n):
    base_den = 2 * (i + 1)
    den = Decimal(base_den * (base_den + 1) * (base_den + 2))
    # print(base_den, den, i)
    frac = 4 / den
    π += coeff * frac
    coeff *= -1
print(π)
