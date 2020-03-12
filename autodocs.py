import subprocess
from os import listdir, mkdir
from os.path import basename, exists, isdir
from shutil import copyfile, rmtree
from textwrap import indent
from typing import List

from tqdm import tqdm  # type: ignore

from filetype_urls import get_icon

transtable = str.maketrans("-_", "  ")
with open(".gitignore") as file:
    ignore_files = [i.strip("/\n") for i in file.readlines() if not i.startswith("#")]

AUTODOCS_VERSION = "1.2.0"


def directory_to_tree(directory: List[str]) -> str:
    """
    Take a directory as a list of filenames and return a unicode tree

    --- Github pages likes inserting whitespace. Switching to a markdown solution

    :param directory: List of files in the directory
    :type directory: List[str]
    :return: Unicode directory tree
    :rtype: str
    """
    # out = ""
    # if directory:
    #     for entry in directory[:-1]:
    #         if "\n" in entry:
    #             entry = indent(entry, "┃  ")[3:]
    #         out += "┣━ " + entry + "  \n"
    #     entry = directory[-1]
    #     if "\n" in entry:
    #         out += "┣━ " + indent(entry, "┃  ")[3:]
    #     else:
    #         out += "┗━ " + entry
    # return out or "┗━ [Empty]"
    out = ""
    if directory:
        for entry in directory:
            if "\n" in entry:
                entry = indent(entry, "  ")[2:]
            out += "- " + entry + "\n"
    return out[:-1] or "- [Empty]"


def path_to_name(path: str) -> str:
    """
    Return the name of the file described by `path`

    :param path: Path to convert
    :type path: str
    :return: Name described by `path`
    :rtype: str
    """
    return (
        " ".join(
            i.title()
            for i in (
                ".".join(path.lstrip(".").split(".")[:-1])
                or path.lstrip(".").replace("LICENSE", "licence")
            )
            .translate(transtable)
            .split()
            if i != "colliert"  # remove tag
        )
        or "Computer Science"
    )


def travel_dir(source_directory: str, use_tqdm=False) -> str:
    """
    Travel through `source_directory`, returning a markdown index

    Travel through `source_directory`, running pandoc on markdown files within it
    ~~and copying all the files into ./.pandoc/~~, and returning a markdown index of
    the folder (which is also placed into the folder)

    :param source_directory: Source folder to traverse. Must not be '/'
    :type source_directory: str
    :return: A markdown index of the folder
    :rtype: str
    """
    source_directory = source_directory.rstrip("/")
    unsorted_files = listdir(source_directory)
    files = sorted(
        unsorted_files,
        key=lambda file_name: [
            not isdir(source_directory + "/" + file_name),
            *map(ord, file_name),
        ],
    )
    if use_tqdm:
        files = tqdm(files)
    extension = basename(source_directory)
    index = []
    for file_name in files:
        if file_name.startswith("index"):
            continue
        full_file_name = source_directory + "/" + file_name
        if file_name in ignore_files:
            continue
        file_name_parts = file_name.split(".")
        if len(file_name_parts) == 1:
            # append an empty file extension if the filename is one part
            if file_name == "LICENSE":  # give the licence its own special icon
                file_name_parts.append("licence")
            else:
                file_name_parts.append("")
        if isdir(full_file_name):
            dir_index = travel_dir(full_file_name)
            index.append(
                dir_index.replace("](", "](" + file_name + "/").replace(
                    file_name + "/https:", "https:"
                )
            )
        elif file_name.endswith(".md"):
            index.append(
                "["
                + get_icon(file_name_parts[-1])
                + " "
                + path_to_name(file_name)
                + "]("
                + file_name[:-3]
                + ".html)"
            )
        elif file_name.endswith(".html"):
            index.append(
                "["
                + get_icon(file_name_parts[-1])
                + " "
                + path_to_name(file_name)
                + "]("
                + file_name
                + ")"
            )
        else:
            index.append(
                "["
                + get_icon(file_name_parts[-1])
                + " "
                + path_to_name(file_name)
                + "]("
                + file_name
                + ")"
            )
    tree = directory_to_tree(index)
    with open(source_directory + "/index.md", "wb") as file:
        file.write(b"<style>img{height:18px;margin-bottom:-3px}</style>\n")
        file.write(("# " + path_to_name(extension) + "\n\n").encode("UTF-8"))
        try:
            file.write(
                "← [Back to {}](..)\n\n".format(
                    path_to_name(source_directory.split("/")[-2])
                ).encode("UTF-8")
            )
        except IndexError:
            pass
        file.write(tree.encode("UTF-8"))
        file.write(
            f"\n\nGenerated by AutoDocs version {AUTODOCS_VERSION} © Starwort, 2020\n".encode(
                "UTF-8"
            )
        )
    return (
        f"[![Folder](https://starwort.github.io/computer-science/icon-splw.png) {path_to_name(extension)}](index.html)\n"
        + tree
    )


if __name__ == "__main__":
    travel_dir(".", True)
    subprocess.run("git add -u".split())
