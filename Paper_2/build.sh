filename="$(readlink -f "$1")"
cd "$(dirname "$1")"
csc $filename
mono "${filename%.*}.exe"
