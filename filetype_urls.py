filetype_to_url = {
    "html": "https://img.icons8.com/windows/512/4a90e2/regular-document.png",
    "htm": "https://img.icons8.com/windows/512/4a90e2/regular-document.png",
    "md": "https://img.icons8.com/windows/512/4a90e2/regular-document.png",
    "c": "https://img.icons8.com/windows/512/4a90e2/c.png",
    "cs": "https://img.icons8.com/windows/512/4a90e2/cs.png",
    "json": "https://img.icons8.com/windows/512/4a90e2/placeholder-thumbnail-json-1.png",
    "css": "https://img.icons8.com/windows/512/4a90e2/css.png",
    "js": "https://img.icons8.com/windows/512/4a90e2/js.png",
    "py": "https://img.icons8.com/windows/512/4a90e2/py.png",
    "dll": "https://img.icons8.com/windows/512/4a90e2/dll.png",
    "csv": "https://img.icons8.com/windows/512/4a90e2/csv.png",
    "exe": "https://img.icons8.com/windows/512/4a90e2/exe.png",
    "jpeg": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "jpg": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "png": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "tif": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "tiff": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "jfif": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "exif": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "bmp": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "pcx": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "pbm": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "gif": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "ppm": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "pgm": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "webp": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "ico": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "svg": "https://img.icons8.com/windows/512/4a90e2/image-document.png",
    "txt": "https://img.icons8.com/windows/512/4a90e2/document.png",
    "splw": "https://starwort.github.io/computer-science/icon-splw.png",
    "lmc": "https://starwort.github.io/computer-science/icon-lmc.png",
    "ocrpsc": "https://img.icons8.com/windows/512/4a90e2/code-file.png",
    "psc": "https://img.icons8.com/windows/512/4a90e2/code-file.png",
    "": "https://img.icons8.com/windows/512/4a90e2/binary-file.png",
    "clang-format": "https://img.icons8.com/windows/512/4a90e2/file-configuration.png",
    "gitignore": "https://img.icons8.com/windows/512/4a90e2/file-configuration.png",
    "licence": "https://img.icons8.com/windows/512/4a90e2/policy-document.png",
    "yaml": "https://img.icons8.com/windows/512/4a90e2/code-file.png",
    "yml": "https://img.icons8.com/windows/512/4a90e2/code-file.png",
}


def get_icon(file_extension: str) -> str:
    return "![{} file]({})".format(
        file_extension.upper(),
        filetype_to_url.get(
            file_extension.lower(),
            "https://img.icons8.com/windows/512/4a90e2/important-file.png",
        ),
    )
