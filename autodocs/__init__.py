from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.1.4"
COMMENT = "update colour again"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
