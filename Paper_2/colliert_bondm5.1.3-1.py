---
layout: default
title: colliert_bondm5.1.3-1 | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

def quot_and_rem(x, y):
    assert x >= 0
    assert y > 0
    r = x
    q = 0
    while r >= y:
        r -= y
        q += 1
    return q, r


for x in range(10):
    for y in range(10):
        try:
            q, r = quot_and_rem(x, y)
        except AssertionError:
            pass
        else:
            assert x == y * q + r
            assert 0 <= r < y
