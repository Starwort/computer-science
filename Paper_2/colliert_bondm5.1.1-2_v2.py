#!/opt/python-3.8.0/bin/python3
# -*- coding: utf-8 -*-
"""
Uses argparse to calculate the sum of the
numbers from 0 to n using the Gaussian method.
Prints the time that the calculation took.
"""
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
