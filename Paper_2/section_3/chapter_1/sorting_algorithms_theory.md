---
layout: default
title: Sorting Algorithms Theory | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.2 "fix links to documents" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 1
---

# Sorting Algorithms

## Theory before hands-on session

## O(n<sup>2</sup>) algorithms

\- Simple but complex -

### Bubble sort algorithm

```py
def bubble_sort(to_sort: list) -> None:
    """Sort the list in-place"""
    num_items = len(to_sort)
    for i in range(num_items - 1):
        swap = False
        for j in range(num_items - i - 1):  # optimisation
            if to_sort[j] > to_sort[j + 1]:
                to_sort[j], to_sort[j + 1] = to_sort[j + 1], to_sort[j]
                swap = True
        if not swap:
            break
```

- How do you swap two items in an array?
  - In Python, one can use a combination of iterable unpacking and tuple packing; in other languages, a temporary variable must be used
- A bubble sort is performed on the list `[3, 5, 8, 17, 12, 15, 18, 23, 1]`
  01. Describe how a bubble sort works.
      - Bubble sort sorts a list by comparing each pair of elements, and swapping them if they are in the wrong order.
      - As long as a swap is made in any given pass, another pass is made.
      - When a pass results in no swaps, the list is in order and the algorithm terminates.
  02. What is the sequence of the list after the first pass is complete?
      - `[3, 5, 8, 12, 15, 17, 18, 1, 23]`
  03. How many passes through the list would be required to sort the items into ascending numerical order?
      - 8 (as `1` must move to the beginning of the list by one index per pass)
  04. What is the best/average/worst time complexity of the bubble sort?
      - Best case: O(n)
      - Average case: O(n<sup>2</sup>)
      - Worst case: O(n<sup>2</sup>)

### Insertion Sort

```py
def insertion_sort(to_sort: list) -> None:
    """Sort the list in-place"""
    n = len(to_sort)
    for i in range(1, n):
        cur = to_sort[i]
        pos = i
        while pos > 0 and to_sort[pos - 1] > cur:
            to_sort[pos] = to_sort[pos - 1]
            pos -= 1
        to_sort[pos] = cur
```

- The following list of names is to be sorted into alphabetical order using an insertion sort: `George`, `Jane`, `Miranda`, `Ahmed`, `Sophie`, `Bernie`, `Keith`

01. Describe how an insertion sort works.
    - An insertion sort works by separating the list into sorted and unsorted segments, and moving items from the unsorted segment into the sorted segment in their correct place.
    - The sorted segment initially contains one item; the first item in the list.
    - Each element in turn in the unsorted segment (all other items) get swapped into place in the sorted segment of the list such that after each pass the sorted segment is always sorted.
02. What is the first name to be moved? What will the list look like after this name is moved?
    - The first name to be moved is `Ahmed`, in the third pass; the list will contain [`Ahmed`, `George`, `Jane`, `Miranda`], [`Sophie`, `Bernie`, `Keith`] after this pass
03. What is the second name to be moved? What will the list look like after this name is moved?
    - The second name to be moved is `Bernie`, in the fifth pass; the list will contain [`Ahmed`, `Bernie`, `George`, `Jane`, `Miranda`, `Sophie`], [`Keith`] after this pass
04. What is the sequence of the list after the first pass is completed?
    - [`George`, `Jane`], [`Miranda`, `Ahmed`, `Sophie`, `Bernie`, `Keith`]
05. What is the best/average/worst time complexity of the insertion sort?
    - Best case: O(n)
    - Average case: O(n<sup>2</sup>)
    - Worst case: O(n<sup>2</sup>)

## Very inefficient algorithms

- [Gnome Sort](https://en.wikipedia.org/wiki/Gnome_sort)
- [Bogosort](https://en.wikipedia.org/wiki/Bogosort)
- [Panic Sort](https://xkcd.com/1185)

[![Ineffective Sorts](https://imgs.xkcd.com/comics/ineffective_sorts.png)](https://xkcd.com/1185)

> StackSort connects to StackOverflow, searches for 'sort a list', and downloads and runs code snippets until the list is sorted

[![Algorithms](https://imgs.xkcd.com/comics/algorithms.png)](https://xkcd.com/1667)

> There was a schism in 2007, when a sect advocating OpenOffice created a fork of Sunday.xlsx and maintained it independently for several months. The efforts to reconcile the conflicting schedules led to the reinvention, within the cells of the spreadsheet, of modern version control.

Algorithm | Best-case Time Complexity | Average-case Time Complexity | Worst-case Time Complexity | Space Complexity
---|---|---|---|---
Bubble Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n) total, O(1) auxiliary
Insertion Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n) total, O(1) auxiliary
Merge Sort | O(nlogn) | O(nlogn) | O(nlogn) | O(n) total, O(logn) auxiliary (my in-place algorithm) / O(n(logn)<sup>2</sup>) total, O((logn)<sup>2</sup>) auxiliary (naive merge sort)
Quick Sort | O(nlogn) | O(nlogn) | O(n<sup>2</sup>) | O(n) total, O(1) auxiliary

## O(nlogn) algorithms

\- Less simple but less complex -

### Merge Sort

```py
def inplace_merge_sort(to_sort: list, start: int = 0, end: int = -1) -> None:
    """Sort the list in-place"""
    if end == -1:
        end = len(to_sort)
    if start == end - 1:
        # 1 element; sublist is sorted
        return
    mid = (end - start) // 2 + start
    # sort the two sublists before combining
    inplace_merge_sort(to_sort, start, mid)
    inplace_merge_sort(to_sort, mid, end)
    # combine
    pos = start
    # I can't remember the really nice way of doing in-place merge sort;
    # so I'm doing the best I can
    # space complexity increases to O(n) / O(n) total / auxiliary
    # using a reversed list here allows the merge sort to remain O(nlogn)
    # as the pop operation is O(1) compared to pop(0) [O(n)]
    left_copy = to_sort[start:mid]
    left_copy.reverse()
    left_optimise = True
    while left_copy and (mid < end):
        if left_copy[-1] < to_sort[mid]:
            elem = left_copy.pop()
            # if no elements from the right section have been used, don't copy
            # the element over itself
            if not left_optimise:
                to_sort[start] = elem
            start += 1
        else:
            left_optimise = False  # can't optimise the left list anymore
            to_sort[start] = to_sort[mid]
            start += 1
            mid += 1
    # either left_copy is empty and the right side is placed correctly
    # (and the body of this loop will never run), or all the elements from
    # the right side have been used and now the left side must be placed there
    left_copy.reverse()
    for elem in left_copy:
        to_sort[start] = elem
        start += 1


def merge_sort(to_sort: list) -> list:
    """Sort and return the list (does not modify the original list)"""
    items = len(to_sort)
    if items == 1:
        # don't return the same list in case it's the user's list
        # technically O(n) but n = 1 so it's O(1)
        return to_sort.copy()
    mid = items // 2
    # reversal = one-time cost of O(n) + n-time cost of O(1)
    left = merge_sort(to_sort[:mid])
    left.reverse()
    right = merge_sort(to_sort[mid:])
    right.reverse()
    out = []
    while left and right:
        if left[-1] < right[-1]:
            out.append(left.pop())
        else:
            out.append(right.pop())
    # either left or right is empty at this point
    # the other contains the last elements of the list
    # empty both lists; one loop won't run at all
    while left:
        out.append(left.pop())
    while right:
        out.append(right.pop())
    return out
```

![Merge Sort Visualisation](https://lh5.googleusercontent.com/MVWDrahGQhSO0o53aY0gkOKEqAcHfqWAMbtVYsS7bQLfLEM-dPyJDGFsArZ-G54FMuwbJslj_6qPld7qsxNvDHKOeneP0yR7Dnm0ciw94AECEAlXj8JE7sLVhNqFbTNg0yejulaQc_0)

01. Explain the key steps in the merge sort algorithm
    - If the list contains one element, return it
    - Split the list into two halves
    - Merge sort them (recursively)
    - Merge the two lists by comparing the smallest element of each list and adding it to the output list
02. The following list of numbers is to be sorted using a merge sort:

    `[54, 36, 66, 78, 64, 19, 42, 44, 51, 89, 72, 62, 22, 67, 81, 79]`

    Which answer below shows the first two lists to be merged?

    01. ~~`[44]` and `[51]`~~
    02. *`[54]` and `[36]`*
    03. ~~`[54, 36]` and `[66, 78]`~~
    04. ~~`[19, 36, 42, 44, 54, 64, 66, 78]` and `[22, 51,62, 67, 72, 79, 81, 89]`~~

03. What is the best/average/worst time complexity of merge sort?
    - All cases: O(nlogn)
04. What about the space complexity?
    - Best implementation: O(n) total, O(1) auxiliary
    - My implementation: O(n) total, O(n) auxiliary
    - Naive implementation: O(n(logn)<sup>2</sup>) total, O((logn)<sup>2</sup>) auxiliary

### Quick Sort

01. Explain the key steps in the quick sort algorithm
    - Pick a pivot
    - Move all values less than the pivot to before the pivot
    - Move all values greater than the pivot to after the pivot
    - Sort each partition recursively
02. What is the best/average/worst time complexity of quick sort?
    - Best case: O(nlogn)
    - Average case: O(nlogn)
    - Worst case: O(n<sup>2</sup>)
03. What about the space complexity?
    - O(n) total, O(1) auxiliary
