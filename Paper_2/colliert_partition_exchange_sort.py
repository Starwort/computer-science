---
layout: default
title: colliert_partition_exchange_sort | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

import typing

T = typing.TypeVar("T")


def partition(A: typing.List[T], low: int, high: int) -> int:
    pivot = A[high]
    i = low
    for j in range(low, high):
        if A[j] < pivot:
            A[i], A[j] = A[j], A[i]
            i += 1
    A[high], A[i] = A[i], A[high]
    return i


def quick_sort_range(A: typing.List[T], low: int, high: int):
    if low < high:
        p = partition(A, low, high)
        quick_sort_range(A, low, p - 1)
        quick_sort_range(A, p + 1, high)


def iquick_sort(A: typing.List[T]):
    quick_sort_range(A, 0, len(A))


def quick_sort(A: typing.List[T]) -> typing.List[T]:
    A = A.copy()
    iquick_sort(A)
    return A
