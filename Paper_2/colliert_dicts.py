---
layout: default
title: colliert_dicts | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

from typing import Dict, List, Tuple

with open("./student list.txt") as file:
    users: Dict[str, Tuple[int, str, List[str]]] = {}
    users_list: List[Tuple[str, List[str]]] = []
    # reading optimisation
    for line in file:
        # assignment optimisation
        key, values = line.strip().split(" ", 1)
        subjects = values.split(", ")
        users_list.append((key, subjects))
        # pop optimisation
        age_str, form, *subjects = subjects
        age = int(age_str)
        # update optimisation
        users[key] = (age, form, subjects)
