from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.5.3"
COMMENT = "add tag to make &lt;base&gt; work"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
