from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.0.6"
COMMENT = "fix name of root directory"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
