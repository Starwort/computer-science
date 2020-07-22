#!/usr/bin/python3
import subprocess

import autodocs

if __name__ == "__main__":
    autodocs.run()
    subprocess.run("git add -u".split())
