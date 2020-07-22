---
layout: default
title: shuffle_sort | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import random


def stupid_sort(a):
    """
    Why would you ever use this?

    Shuffles the list until it's in order

    :param a: list to sort
    :type a: list[comparable]
    """
    while True:
        last_item = a[0]
        for item in a:
            if item < last_item:
                break
            last_item = item
        else:
            return
        random.shuffle(a)
