from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.5.1"
COMMENT = "fix a bunch of bugs"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
