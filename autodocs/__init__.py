from .index import run_index
from .preprocess import run_preprocess

VERSION = "2.2.3"
COMMENT = "parent folders in indexes *should* now display properly"

ID_STRING = f'{VERSION} "{COMMENT}"'


def run():
    run_preprocess(ID_STRING)
    run_index(ID_STRING)
