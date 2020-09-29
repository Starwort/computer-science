from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.4.3"
COMMENT = "fix backlink text for preprocessed MarkDown (hopefully)"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
