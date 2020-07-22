import argparse

parser = argparse.ArgumentParser()
parser.add_argument("n", type=int)
args = parser.parse_args()
print(sum(range(args.n + 1)))
