"""
Converts files from parameters (can be dropped on file in file explorer)
to fix their line endings for the system on which the program is run
"""
import sys

files = sys.argv[1:]
if files:
    for i in files:
        with open(i) as file:
            data = file.read()
        with open(i, "w") as file:
            file.write(data)
        print(f"Converted {i}")
    print("Done!")
else:
    print("No files to convert!")
input()
