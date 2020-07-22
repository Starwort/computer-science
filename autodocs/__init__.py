from .index import run_index
from .preprocess import run_preprocess

VERSION = '2.0.0 "clean rewrite and preprocessing"'


def run():
    run_preprocess(VERSION)
    run_index(VERSION)
