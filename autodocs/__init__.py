from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.1.0"
COMMENT = "collapsible folders (probably)"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
