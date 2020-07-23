from functools import lru_cache
from os.path import basename, dirname, isdir, join
from os import listdir
from typing import Tuple, List, Union, Dict, cast

from tqdm.auto import tqdm

from .filetypes import filetype_to_url, missing_file

BaseNode = Tuple[str, str, str]
Node = Union[BaseNode, List[BaseNode]]
BaseFolder = Dict[str, Node]
Folder = Dict[str, Union[BaseFolder, Node]]
transtable = str.maketrans("-_", "  ")


@lru_cache
def casify_word(word: str) -> str:
    """Put a single word in Title Case, preserving other capitalisation

    :param word: Word to casify
    :type word: str
    :return: Casified word
    :rtype: str
    """
    if not word:
        return ""
    return word[0].upper() + word[1:]


@lru_cache
def casify(source: str) -> str:
    """Put a string in Title Case, preserving other capitalisation

    :param source: String to casify
    :type source: str
    :return: Casified string
    :rtype: str
    """
    return " ".join(map(casify_word, source.translate(transtable).split(" ")))


@lru_cache
def get_name_and_extension(path: str) -> Tuple[str, str]:
    """Get the name (without file extension) and extension described by path

    :param path: Path of which to determine the name and extension
    :type path: str
    :return: Name (without file extension) and extension described by path
    :rtype: Tuple[str, str]
    """
    # strip hidden
    if path.startswith("."):
        path = path[1:].replace("LICENSE", "licence")
    path = path.replace("colliert ", "")  # remove tag
    *parts, extension = path.split(".")
    if parts:
        return ".".join(parts), extension
    return extension, ""


@lru_cache
def get_icon(file_extension: str) -> str:
    """Return the markdown icon for the given file_extension
    
    :param file_extension: File extension for which to retrieve the icon
    :type file_extension: str
    :return: Markdown for the icon for file_extension
    :rtype: str
    """
    if file_extension == "folder":
        return "![Folder]({})".format(filetype_to_url["folder"])
    return "![{} file]({})".format(
        file_extension.upper(),
        filetype_to_url.get(file_extension.lower(), missing_file),
    )


@lru_cache
def get_html_icon(file_extension: str) -> str:
    """Return the HTML icon for the given file_extension
    
    :param file_extension: File extension for which to retrieve the icon
    :type file_extension: str
    :return: HTML for the icon for file_extension
    :rtype: str
    """
    if file_extension == "folder":
        return "<img title='Folder' src={!r}>".format(filetype_to_url["folder"])
    return "<img title={!r} src={!r}>".format(
        file_extension.upper() + " file",
        filetype_to_url.get(file_extension.lower(), missing_file),
    )


def collect_folders(
    source_directory: str, ignored_folders: List[str], leave: int = 0
) -> Folder:
    """Collect all folders within source_directory recursively, returning a
    dict of folders

    :param source_directory: Source folder to scan
    :type source_directory: str
    :param ignored_folders: Folders to ignore while scanning
    :type ignored_folders: List[str]
    :return: A list of nodes representing the folder structure
    :rtype: Folder
    """
    files = tqdm(
        sorted_files(source_directory),
        desc=f"Scanning {source_directory}",
        leave=bool(leave),
    )
    if source_directory == ".":
        source_directory = ""
    folders: Dict[str, Folder] = {}
    for fname in files:
        full_fname = join(source_directory, fname)
        if full_fname in ignored_folders or fname in ignored_folders:
            continue
        if isdir(full_fname):
            folders[fname] = collect_folders(
                full_fname, ignored_folders, max(leave - 1, 0)
            )
    return cast(Folder, folders)


def collect_nodes(
    source_directory: str, ignored_files: List[str], leave: int = 0
) -> List[Node]:
    """Collect all files within source_directory recursively, returning a
    list of nodes

    :param source_directory: Source folder to scan
    :type source_directory: str
    :param ignored_files: Files and folders to ignore while scanning
    :type ignored_files: List[str]
    :return: A list of nodes representing the folder structure
    :rtype: List[Node]
    """
    files = tqdm(
        sorted_files(source_directory),
        desc=f"Scanning {source_directory}",
        leave=bool(leave),
    )
    if source_directory == ".":
        source_directory = ""
    nodes: List[Node] = []
    for fname in files:
        if fname == "index.md":
            continue
        full_fname = join(source_directory, fname)
        if full_fname in ignored_files or fname in ignored_files:
            continue
        name, ext = get_name_and_extension(fname)
        if ext == "" and name in ["clang-format", "gitignore", "licence"]:
            ext = name
        if isdir(full_fname):
            nodes.append(
                collect_nodes(
                    full_fname, ignored_files, max(leave - 1, 0)
                )  # type: ignore
            )
        else:
            nodes.append((name, ext, full_fname))
    return nodes


@lru_cache
def flatten_nodes(nodes: List[Node]) -> List[BaseNode]:
    """Flatten nodes

    :param nodes: The list of nodes to flatten
    :type nodes: List[Node]
    :return: The flattened list of nodes
    :rtype: List[BaseNode]
    """
    flat_nodes = []
    for node in nodes:
        if isinstance(node, list):
            flat_nodes.extend(flatten_nodes(cast(List[Node], node)))
        else:
            flat_nodes.append(node)
    return flat_nodes


@lru_cache
def sorted_files(source_dir: str) -> List[str]:
    """Return a list of files in source_dir, sorted folders-first, then by
    name

    :param source_dir: The folder to search for files
    :type source_dir: str
    :return: Output of listdir, sorted folders-first
    :rtype: List[str]
    """
    return sorted(
        listdir(source_dir),
        key=lambda fname: (not isdir(join(source_dir, fname)), fname),
    )


@lru_cache
def format_node(node: Node) -> str:
    """Format node as a link
    
    :param node: The node to format
    :type node: Node
    :return: The formatted node
    :rtype: str
    """
    return f"[{get_icon(node[1])} {node[0]}]({node[2]})"


@lru_cache
def html_format_node(node: Node) -> str:
    """Format node as HTML
    
    :param node: The node to format
    :type node: Node
    :return: The formatted node
    :rtype: str
    """
    return f"<a href={node[2]!r}>{get_html_icon(node[1])} {node[0]}</a>"


@lru_cache
def generate_page_meta(**kw: str) -> str:
    options = {"layout": "default"}
    options.update(kw)
    return "\n".join(
        ["---", *(f"{key}: {value}" for key, value in options.items()), "---\n\n",]
    )


def folder_node(node: Node) -> BaseNode:
    if isinstance(node, list):
        files = [i for i in node if not isinstance(i, list)]
        if files:
            path = dirname(files[0][2])
            return basename(path), "folder", path
        elif node:
            dirname_calls = 1
            while not files:
                dirname_calls += 1
                node = cast(List[BaseNode], sum(cast(List[Node], node), []))
                files = [i for i in node if not isinstance(i, list)]
            path = files[0][2]
            for i in range(dirname_calls):
                path = dirname(path)
            return basename(path), "folder", path
        return "[Empty folder]", "folder", "/computer-science/404.html"
    else:
        return node
