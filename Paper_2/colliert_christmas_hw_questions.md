---
layout: default
title: Colliert_christmas_hw_questions | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.2 "🦀 dumb indenting is gone 🦀" ⓒ Starwort, 2020
---

<style>
    ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    ol>li {
        counter-increment: list-ctr;
    }
    ol>li::before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul {
        list-style-type: lower-alpha;
    }
    ol ul ul {
        list-style-type: lower-roman;
    }
    ul {
        list-style-type: decimal;
    }
    ul ul {
        list-style-type: lower-alpha;
    }
    ul ul ul {
        list-style-type: lower-roman;
    }
</style>

# Chapter 61

← [Back to Paper 2](./index.html)

1. In python:

    ```py
    array[index_1], arrray[index_2] = array[index_2], array[index_1]
    ```

    In general:

    ```SPLIWACA
    SET tmp TO array[index_1]
    SET array[index_1] TO array[index_2]
    SET array[index_2] TO tmp
    ```

2.
    - ​
        - Ahmed
        - George Jane Ahmed Miranda Sophie Bernie Keith
          (final for this pass = Ahmed George Jane Miranda Sophie Bernie Keith)
    - ​
        - Bernie
        - Ahmed George Jane Miranda Bernie Sophie Keith
          (final for this pass = Ahmed Bernie George Jane Miranda Sophie Keith)

## Exercises

- ​
  - ​
    - Bubble sort works by swapping elements repeatedly until the list is in order
    - 3 5 8 12 15 17 18 1 23
    - 8
  - ​
    - Adds elements to a sorted partition at the beginning of the list until the partition extends to the entire list
    - 3 5 8 17 12 15 18 23 1
    - O(n²)

# Chapter 62

1. **b.** [54] and [36]

2. ```text
    5 3 9 4 2 6 1
    5 3 9|4 2 6 1
    5|3 9|4 2|6 1
    5|3|9|4|2|6|1
    5|3 9|2 4|1 6
    3 5 9|1 2 4 6
    1 2 3 4 5 6 9
    ```

## Exercises

- ​
  - I would consider:
    - The length of the list
    - The amount of memory available
    - The likelihood that many items must be moved
  - It is more efficient than a sort of time complexity O(n²) as its time complexity resolves to T(1024 log 1024); where the base is 2 then the time complexity is T(10240); compared to the T(1024²) (T(1048576)) of the other sort algorithm.
  It is 10.24 times as efficient
- ​
  - Subdivide the list into smaller lists (of length 1 or 0), recursively, then build up the lists by sorting pairs together
  - Pick a pivot, and move all smaller items to the left, preserving order, and move all larger items to the right, preserving order. Repeat with pivots within each section, repeating until the list is in order
