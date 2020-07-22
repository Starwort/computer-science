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
