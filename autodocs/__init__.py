from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.5.2"
COMMENT = "fix links to documents"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
