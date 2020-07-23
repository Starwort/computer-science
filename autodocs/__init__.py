from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.2.2"
COMMENT = "hotfix - documents *actually* actually work now"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
