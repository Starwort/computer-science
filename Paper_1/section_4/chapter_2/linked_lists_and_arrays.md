---
layout: default
title: Linked Lists And Arrays | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.1 "fix a bunch of bugs" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 2
---

<style>
    ol ol {
        list-style-type: lower-alpha !important;
    }
    ol ol ol {
        list-style-type: lower-roman !important;
    }
</style>

# Linked Lists and Array Questions

01. &#x200b;
    01. An **array** is a static data structure which holds a collection of data of a single type.

    02. ```psc
        str[10] names

        for i of {0..9}
            names[i] = input('Enter a name: ')
            print((str i+1) + '. ' + names[i])
        next
        ```

02. ```psc
    array totals[10]
    for row of data
        for i of {0..10}:
            totals[i] += row[i]
        next
    next
    for total of totals
        print(total / 11)
    next
    ```

03. &#x200b;
    01. Identifier: `Board`  
        Dimensions: 2  
        Most appropriate data type: `char[][]`

    02. ```psc
        PROCEDURE ClearDisplay

            FOR Row = 1 TO 3

                FOR Column = 1 to 15

                    Board( Row, Column) = " "

                NEXT Column

            NEXT Row

        END PROCEDURE
        ```

04. &#x200b;
    01. &#x200b;
        01. | `nodeNo` | `orderNo` | `next` |
            | -------: | --------: | -----: |
            |        0 |       154 |      1 |
            |        1 |       157 |      2 |
            |        2 |       155 |      3 |
            |        3 |       156 |      4 |
            |        4 |       158 |      ø |
        02. | `nodeNo` | `orderNo` | `next` |
            | -------: | --------: | -----: |
            |        0 |       154 |      5 |
            |        1 |       157 |      2 |
            |        2 |       155 |      3 |
            |        3 |       156 |      4 |
            |        4 |       158 |      ø |
            |        5 |       159 |      1 |
    02. &#x200b;
        01. `nodeNo` is equivalent to the column index of the 2D array.
        02. | `finished` | `count` | `output` |
            | ---------- | ------: | -------: |
            |   `false`  |       - |        - |
            |   `false`  |       0 |        - |
            |   `false`  |       0 |      184 |
            |   `false`  |       1 |      184 |
            |   `false`  |       1 |      186 |
            |   `false`  |       2 |      186 |
            |   `false`  |       2 |      185 |
            |   `false`  |       3 |      185 |
            |   `true`   |       3 |      185 |
        03. `x` finds and prints the last order in the linked list.
        04. The new order can be added to the array, such that the linked list is in the correct order, as follows:
            - Locate the third item in the list (by traversing the first and second nodes)
            - Add the new order to the end of the list, with the link pointer set to the address of the third item (found previously)
            - Update the link pointer of the second item to point to the new item (the end of the array)
    03. It allows fast insertion of new elements to arbitrary points in the list, and allows freedom to extend the list infinitely without reallocating the entire list when its buffer is filled
05. &#x200b;
    01. A record is a static collection of data which can be of different types
    02. A 1D array is suitable for the application as it is used to hold information about the players in the game; the number of which is selected once (and so only one index is needed)
    03. Queue
