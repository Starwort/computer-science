from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.1.3"
COMMENT = "fix colour of missing files"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
