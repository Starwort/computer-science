---
layout: default
title: colliert_bondm5.1.1-1_v2 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

"""
Uses argparse to calculate the sum of the
numbers from 0 to n using the naive method.
"""
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()
print(sum(range(args.n + 1)))
