---
layout: default
title: colliert_sorts | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

def merge_sort(to_be_sorted: list) -> list:
    if not isinstance(to_be_sorted, list):
        to_be_sorted = list(to_be_sorted)
    to_be_sorted = to_be_sorted.copy()
    if len(to_be_sorted) == 1:
        return to_be_sorted
    divider = len(to_be_sorted) // 2
    left, right = merge_sort(to_be_sorted[:divider]), merge_sort(to_be_sorted[divider:])
    rv = []
    while left and right:
        if left[0] < right[0]:
            rv.append(left.pop(0))
        else:
            rv.append(right.pop(0))
    rv.extend(left)
    rv.extend(right)
    return rv


def bubble_sort(to_be_sorted: list) -> list:
    if not isinstance(to_be_sorted, list):
        to_be_sorted = list(to_be_sorted)
    to_be_sorted = to_be_sorted.copy()
    swapped = True
    sorted = 0
    while swapped:
        sorted += 1
        swapped = False
        for i in range(len(to_be_sorted) - sorted):
            if to_be_sorted[i] > to_be_sorted[i + 1]:
                swapped = True
                to_be_sorted[i], to_be_sorted[i + 1] = (
                    to_be_sorted[i + 1],
                    to_be_sorted[i],
                )
    return to_be_sorted


def insertion_sort(to_be_sorted: list) -> list:
    if not isinstance(to_be_sorted, list):
        to_be_sorted = list(to_be_sorted)
    if len(to_be_sorted) == 1:
        return to_be_sorted
    sorted = []
    for i in to_be_sorted:
        for index, elem in enumerate(sorted):
            if elem > i:
                sorted.insert(index, i)
                break
        else:
            sorted.append(i)
    return sorted


def linear_search(to_find: object, to_find_in: list) -> int or ValueError:
    index = 0
    for i in to_find_in:
        if i == to_find:
            return index
        index += 1
    raise ValueError("{} is not in list".format(to_find))


def binary_search(
    to_find: object, to_find_in: list, *, my_index=0
) -> int or ValueError:
    items = len(to_find_in)
    if items == 1:
        if to_find_in[0] != to_find:
            raise ValueError("{} is not in list or list is not sorted".format(to_find))
        return my_index
    search_point = items // 2
    search_val = to_find_in[search_point]
    if search_val == to_find:
        return my_index + search_point
    elif search_val < to_find:
        return binary_search(
            to_find, to_find_in[search_point:], my_index=my_index + search_point
        )
    else:
        return binary_search(to_find, to_find_in[:search_point], my_index=my_index)


if __name__ == "__main__":
    import random
    import time

    print("Tests")
    test_list = [i for i in range(100000)]
    [random.shuffle(test_list) for i in range(7)]

    print(
        "List is [{} .. {}] ({} elements)".format(
            ", ".join(str(i) for i in test_list[:2]),
            ", ".join(str(i) for i in test_list[-2:]),
            len(test_list),
        )
    )
    now = time.time()
    test_result = merge_sort(test_list)
    print(
        "Merge sort completed in {}ms: [{} .. {}] ({} elements)".format(
            round((time.time() - now) * 1000, 3),
            ", ".join(str(i) for i in test_result[:2]),
            ", ".join(str(i) for i in test_result[-2:]),
            len(test_list),
        )
    )
    now = time.time()
    test_result = bubble_sort(test_list)
    print(
        "Bubble sort completed in {}ms: [{} .. {}] ({} elements)".format(
            round((time.time() - now) * 1000, 3),
            ", ".join(str(i) for i in test_result[:2]),
            ", ".join(str(i) for i in test_result[-2:]),
            len(test_list),
        )
    )
    now = time.time()
    sorted = insertion_sort(test_list)
    print(
        "Insertion sort completed in {}ms: [{} .. {}] ({} elements)".format(
            round((time.time() - now) * 1000, 3),
            ", ".join(str(i) for i in sorted[:2]),
            ", ".join(str(i) for i in sorted[-2:]),
            len(test_list),
        )
    )

    search_term = random.choice(test_list)
    print("Search term is {}".format(search_term))

    now = time.time()
    test_result = linear_search(search_term, test_list)
    print(
        "Linear search completed on [{} .. {}] ({} elements) in {}ms: {}".format(
            ", ".join(str(i) for i in test_list[:2]),
            ", ".join(str(i) for i in test_list[-2:]),
            len(test_list),
            round((time.time() - now) * 1000, 3),
            test_result,
        )
    )
    now = time.time()
    test_result = binary_search(search_term, sorted)
    print(
        "Binary search completed on [{} .. {}] ({} elements) in {}ms: {}".format(
            ", ".join(str(i) for i in sorted[:2]),
            ", ".join(str(i) for i in sorted[-2:]),
            len(test_list),
            round((time.time() - now) * 1000, 3),
            test_result,
        )
    )
