import time, functools, sys, argparse

parser = argparse.ArgumentParser()
parser.add_argument("index", type=int)
args = parser.parse_args()
START_0 = 1
START_1 = 0


@functools.lru_cache()
def fibonacci(x: int) -> int:
    """
    Calculate recursively the xth number of the fibonacci sequence

    Takes U_0 to be `START_0` and U_1 to be `START_1`. Modify these to change
    the sequence. Uses recursion

    :param x: the index to find
    :type x: int
    :return: the number at that index
    :rtype: int
    """
    if x == 0:
        return START_0
    elif x == 1:
        return START_1
    else:
        return fibonacci(x - 2) + fibonacci(x - 1)


def fibiter(x: int) -> int:
    """
    Calculate iteratively the xth number of the fibonacci sequence

    Takes U_0 to be `START_0` and U_1 to be `START_1`. Modify these to change
    the sequence. Uses iteration

    :param x: the index to find
    :type x: int
    :return: the number at that index
    :rtype: int
    """
    prev_2, prev_1 = START_0, START_1
    for _ in range(x):
        prev_2, prev_1 = prev_1, prev_2 + prev_1
    return prev_2


rec_lim = sys.getrecursionlimit() - 50
start = time.time()
### implementation detail: direct calculation of fib(1000+) will crash python,
### so iterate in chunks of 950 - the lru cache will prevent RecursionErrors
for i in range(rec_lim, args.index, rec_lim):
    fibonacci(i)
print(fibonacci(args.index))
elapsed = time.time() - start
print(elapsed)
start = time.time()
print(fibiter(args.index))
elapsed = time.time() - start
print(elapsed)
