---
layout: default
title: colliert_data2-2 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

sales = [[None for i in range(4)] for i in range(5)]
# btw you messed up your diagram
while True:
    index: int = input("enter a year from 0 to 4\n>>> ")  # type: ignore
    if not index.strip("- ").isnumeric():  # type: ignore
        print("that's not a number")
        continue
    index = int(index)
    if not (0 <= index < 5):
        print("that's not between 0 and 4")
        continue
    quarter: int = input("enter a sales quarter [0 to 3]\n>>> ")  # type: ignore
    if not quarter.strip("- ").isnumeric():  # type: ignore
        print("that's not a number")
        continue
    quarter = int(quarter)
    if not (0 <= quarter < 4):
        print("that's not between 0 and 3")
        continue
    if sales[index][quarter] is None:
        data = input("enter a sales figure for this time period\n>>> ")
        sales[index][quarter] = data  # type: ignore
    else:
        print(sales[index][quarter])
