---
layout: default
title: build | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

filename="$(readlink -f "$1")"
cd "$(dirname "$1")"
csc $filename
mono "${filename%.*}.exe"
