from os.path import basename, join
from textwrap import indent
from typing import List, cast

from tqdm import tqdm  # type: ignore

from .utils import (
    Folder,
    Node,
    casify,
    collect_folders,
    collect_nodes,
    folder_node,
    format_node,
    generate_page_meta,
    html_format_node,
)


with open(".gitignore") as file:
    ignore_files = [i.strip("/\n") for i in file.readlines() if not i.startswith("#")]

ignore_files.append("_preprocess")
ignore_files.append(".git")
ignore_files.append("__pycache__")


def nodes_to_tree(nodes: List[Node], need_indent: bool = False) -> str:
    """Take a directory as a list of nodes and return a markdown tree

    :param nodes: List of nodes in directory
    :type nodes: List[Node]
    :param need_indent: Whether this node's tree needs indenting
    :type need_indent: bool
    :return: Markdown directory tree
    :rtype: str
    """
    out = ""
    for node in nodes:
        if isinstance(node, list):
            out += (
                "- <details open><summary>"
                + html_format_node(folder_node(node))
                + "\n\n"
            )
            out += nodes_to_tree(cast(List[Node], node), need_indent=True) + "\n"
        else:
            out += "- " + format_node(node) + "\n"
    return indent(out or "- [Empty]", "  " * need_indent)


def extless_name_to_display(extless_name: str) -> str:
    """Return the display string of the file described by extless_name

    :param extless_name: Name to convert
    :type extless_name: str
    :return: Display string described by extless_name
    :rtype: str
    """
    if extless_name == ".":
        extless_name = ""
    return casify(extless_name or "Computer Science")


def index(folder: str, footer: str, from_folder: str = "") -> None:
    """Index folder

    :param folder: The folder to index
    :type folder: str
    :param footer: The footer for this page
    :type footer: str
    :param from_folder: The folder immediately above this one
    :type from_folder: Optional[str]
    """
    name = extless_name_to_display(basename(folder))
    with open(join(folder, "index.md"), "wb") as file:
        file.write(
            generate_page_meta(
                layout="index_template",
                footer=footer,
                title=f"Index of {name} | Computer Science",
            ).encode("UTF-8")
        )
        file.write(f"# {name}\n\n".encode("UTF-8"))
        if from_folder:
            file.write(
                "← [Back to {}](..)\n\n".format(
                    extless_name_to_display(basename(from_folder))
                ).encode("UTF-8")
            )
        file.write(nodes_to_tree(collect_nodes(folder, ignore_files)).encode("UTF-8"))


def rindex(folders: Folder, footer: str, previous: str = "", leave: int = 0) -> None:
    """Index the repository recursively, with the given footer
    of this tool

    :param previous: Folders up to this point
    :type previous: str
    :param folders: Folders to index
    :type folders: Folder
    :param footer: Page footer
    :type footer: str
    """
    for folder in tqdm(
        folders, desc=f"Indexing {previous or 'repository'}", leave=bool(leave),
    ):
        full_path = join(previous, folder)
        index(full_path, footer, folder)
        rindex(
            cast(Folder, folders[folder]), footer, full_path, max(leave - 1, 0),
        )


def run_index(version: str) -> None:
    """Index the repository, with the index footer stating the version
    of this tool

    :param version: AutoDocs version string
    :type version: str
    """
    page_footer = f"Generated by AutoDocs.index version {version} ⓒ Starwort, 2020"
    folder_hierarchy = collect_folders(".", ignore_files, 1)
    rindex(folder_hierarchy, page_footer, "", 1)
    index(".", page_footer)
