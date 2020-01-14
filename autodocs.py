import subprocess
from os.path import exists, isdir, basename
from os import listdir, mkdir
from textwrap import indent
from shutil import copyfile, rmtree
from typing import List
from tqdm import tqdm


def pandoc(source_file: str) -> None:
    """
    Run pandoc on `source_file`

    Run pandoc on `source_file` and wrap its output with basic style

    :param source_file: The filename of the source markdown file
    :type source_file: str
    """
    html = subprocess.run(
        ["pandoc", source_file.replace('"', '\\"')], capture_output=True, text=True,
    ).stdout
    full_html = f"""<!DOCTYPE html>
<html>

<head>
    <!-- make markdown look nicer -->
    <style>
        code {{
            background-color: rgba(27, 31, 35, .05);
            border-radius: 3px;
            font-size: 85%;
            margin: 0;
            padding: .2em .4em;
        }}

        pre code {{
            background-color: rgba(27, 31, 35, .05);
            border: 0;
            display: block;
            line-height: inherit;
            margin: 0;
            max-width: auto;
            overflow: scroll;
            padding: 0;
            word-wrap: normal;
        }}
    </style>
</head>
<body>{html}</body>
</html>
"""
    with open("./.pandoc/" + source_file[:-3] + ".html", "w") as file:
        file.write(full_html)


def directory_to_tree(directory: List[str]) -> str:
    """
    Take a directory as a list of filenames and return a unicode tree

    :param directory: List of files in the directory
    :type directory: List[str]
    :return: Unicode directory tree
    :rtype: str
    """
    out = ""
    if directory:
        for entry in directory[:-1]:
            if "\n" in entry:
                entry = indent(entry, "┃  ")[3:]
            out += "┣━ " + entry + "  \n"
        entry = directory[-1]
        if "\n" in entry:
            out += "┣━ " + indent(entry, "┃  ")[3:]
        else:
            out += "┗━ " + entry
    return out or "\b"


def path_to_name(path: str) -> str:
    """
    Return the name of the file described by `path`

    :param path: Path to convert
    :type path: str
    :return: Name described by `path`
    :rtype: str
    """
    return " ".join(
        i.title()
        for i in path.split(".")[0].split("_")
        if i != "colliert"  # remove tag
    )


def travel_dir(source_directory: str, use_tqdm=False) -> str:
    """
    Travel through `source_directory`, returning a markdown index

    Travel through `source_directory`, running pandoc on markdown files within it
    and copying all the files into ./.pandoc/, and returning a markdown index of the
    folder (which is also placed into the folder)

    :param source_directory: Source folder to traverse. Must not be '/'
    :type source_directory: str
    :return: A markdown index of the folder
    :rtype: str
    """
    source_directory = source_directory.rstrip("/")
    files = sorted(listdir(source_directory))
    if use_tqdm:
        files = tqdm(files)
    extension = basename(source_directory)
    index = []
    for file_name in files:
        if file_name.startswith("index"):
            continue
        full_file_name = source_directory + "/" + file_name
        if (
            file_name.startswith(".")
            or file_name.startswith("_")
            or file_name == "LICENSE"
        ):
            continue
        if isdir(full_file_name):
            if not exists("./.pandoc/" + full_file_name):
                mkdir("./.pandoc/" + full_file_name)
            dir_index = travel_dir(full_file_name)
            index.append(dir_index.replace("](", "](" + file_name + "/"))
        elif file_name.endswith(".md"):
            pandoc(full_file_name)
            index.append(
                "[" + path_to_name(file_name) + "](" + file_name[:-3] + ".html)"
            )
        elif file_name.endswith(".html"):
            copyfile(full_file_name, "./.pandoc/" + full_file_name)
            index.append("[" + path_to_name(file_name) + "](" + file_name + ")")
        else:
            copyfile(full_file_name, "./.pandoc/" + full_file_name)
            index.append(
                "["
                + path_to_name(file_name)
                + " ("
                + file_name.split(".")[-1].upper()
                + " file)]("
                + file_name
                + ")"
            )
    tree = directory_to_tree(index)
    with open(source_directory + "/index.md", "w") as file:
        file.write("# " + path_to_name(extension or "Computer Science") + "\n\n")
        file.write(tree)
    pandoc(source_directory + "/index.md")
    return f"[{path_to_name(extension)}](index.html)  \n" + tree


if __name__ == "__main__":
    try:
        rmtree("./.pandoc")
    except:
        pass
    try:
        mkdir("./.pandoc")
    except:
        pass
    travel_dir(".", True)
