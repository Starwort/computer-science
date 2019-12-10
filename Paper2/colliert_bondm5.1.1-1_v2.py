"""
Uses argparse to calculate the sum of the
numbers from 0 to n using the naive method.
"""
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()
print(sum(range(args.n + 1)))
