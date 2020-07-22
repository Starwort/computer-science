---
layout: default
title: colliert_bondm5.1.1-2 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import argparse
import time

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()

start = time.time()

row = args.n + 1
rows = args.n / 2

print(row * rows)

end = time.time()
print(f"Took {(end-start)*1000:.2f}ms.")
