---
layout: default
title: colliert_data2-1 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

sales = [None for i in range(5)]
while True:
    index: int = input("enter a year from 0 to 4\n>>> ")  # type: ignore
    if not index.strip("- ").isnumeric():  # type: ignore
        print("that's not a number")
        continue
    index = int(index)
    if not (0 <= index < 5):
        print("that's not between 0 and 4")
        continue
    if sales[index] is None:
        data = input("enter a sales figure for this time period\n>>> ")
        sales[index] = data  # type: ignore
    else:
        print(sales[index])
