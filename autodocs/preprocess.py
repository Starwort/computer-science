from genericpath import exists
from os import mkdir
from os.path import dirname, isdir, relpath
from typing import List, cast

from tqdm import tqdm

from .utils import (
    BaseNode,
    Node,
    collect_nodes,
    folder_node,
    generate_page_meta,
)

with open(".gitignore") as file:
    ignore_files = [
        i.strip("/\n") for i in file.readlines() if not i.startswith("#")
    ]


def copy_folder(
    folder: List[Node], page_footer: str, leave: int = 0
) -> None:
    """Copy folder from _preprocess to the base directory, recursively

    :param folder: The nodes to copy
    :type folder: List[Node]
    :param page_footer: The page's footer
    :type page_footer: str
    :param leave: How many layers to leave the progress bar on screen
    :type leave: int
    """
    try:
        dir_name = folder_node(cast(Node, folder))[2]
        real_path = relpath(dir_name, "_preprocess")
        if not exists(real_path):
            mkdir(real_path)
        for node in tqdm(
            folder,
            desc=f"Preprocessing {real_path or 'repository'}",
            leave=bool(leave),
        ):
            if isinstance(node, list):
                copy_folder(node, page_footer, max(leave - 1, 0))
            else:
                real_fpath = relpath(node[2], "_preprocess")
                if node[2].endswith(".md"):
                    data = generate_page_meta(
                        title=f"{node[0]} | Computer Science",
                        footer=page_footer,
                    ).encode("UTF-8")
                else:
                    data = b""
                with open(node[2], "rb") as file:
                    data += file.read()
                with open(real_fpath, "wb") as file:
                    file.write(data)
    except IndexError:
        pass


def run_preprocess(version: str) -> None:
    """Preprocess the repository, with the page footer stating the version
    of this tool

    :param version: AutoDocs version string
    :type version: str
    """
    nodes = collect_nodes("_preprocess", ignore_files, 1)
    copy_folder(
        nodes,
        f"Preprocessed by AutoDocs.preprocess {version} ⓒ Starwort, 2020",
        1,
    )
