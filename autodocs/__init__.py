from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.1.3"
COMMENT = "hotfix for kramdown bugs"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
