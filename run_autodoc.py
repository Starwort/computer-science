#!/home/starwort/.pyenv/versions/3.9.0/bin/python
import subprocess

import autodocs

if __name__ == "__main__":
    autodocs.run()
    subprocess.run("git add -A".split())
