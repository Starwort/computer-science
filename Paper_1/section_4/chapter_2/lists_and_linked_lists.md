---
layout: default
title: Lists And Linked Lists | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.2.3 "parent folders in indexes *should* now display properly" ⓒ Starwort, 2020
---

<style>
    :not(ul) + ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    :not(ul) + ol > li {
        counter-increment: list-ctr;
    }
    :not(ul) + ol > li::before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul {
        list-style-type: lower-roman;
    }
    ol ol {
        list-style-type: lower-alpha;
    }
    ol ul ul {
        list-style-type: lower-roman;
    }
    ul ol {
        list-style-type: circle;
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

# Chapter 35

← [Back to Chapter 2](./index.html)

1. Use an array.
2. &#x200b;
    - `['James', 'Paul', 'Sophie', 'Holly', 'Nathan', 'Tom']`
    - `['James', 'Paul', 'Sophie', 'Nathan', 'Tom']`
    - `['James', 'Melissa', 'Paul', 'Sophie', 'Nathan', 'Tom']`
3. Have items that are aware of the indexes of the next and previous items, and update the indexes of the next and previous item (linked list)
4. Adjust the algorithm used to determine the correct place to insert the item to look at item priorities
5. Because it prevents using indexing with the model used
6. index |   name   | pointer
    ---: | :------- | ------:
    0    | Browning |       3
    1    | Turner   |    null
    2    | Johnson  |       1
    3    | Cray     |       2
    4    | Allen    |       0
    5    |          |    null

    `start`: 4  
    `nextfree`: 5

    First, write the value into the element of the array specified by `nextfree`. Then, read `start` to determine the item to link to - set `pointer[nextfree]` to `start`. Next, modify `nextfree` to point to the first free space in the array (generally one more than its previous value).
7. &#x200b;
    - `3`
    - `'Mortimer'`
    - `4`
    - `'Cray'`
8. --- omitted as no requirement to complete questions and I don't want to do this diagram ---

9. ```SPLIWACA
   SET items TO 0
   SET ptr TO start
   WHILE ptr DO
       INC items
       SET ptr TO Names[ptr].pointer
   END WHILE
   OUTPUT There are $items items in Names
   ```

## Exercises

- &#x200b;
  - ListLength | NewItem | p | q | List[1] | List[2] | List[3] | List[4] | List[5]
      :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
      4 | 25 | - | - | 18 | 21 | 42 | 53 | -
      4 | 25 | 1 | - | 18 | 21 | 42 | 53 | -
      4 | 25 | 2 | - | 18 | 21 | 42 | 53 | -
      4 | 25 | 3 | - | 18 | 21 | 42 | 53 | -
      4 | 25 | 3 | 4 | 18 | 21 | 42 | 53 | -
      4 | 25 | 3 | 4 | 18 | 21 | 42 | 53 | 53
      4 | 25 | 3 | 3 | 18 | 21 | 42 | 53 | 53
      4 | 25 | 3 | 3 | 18 | 21 | 42 | 42 | 53
      4 | 25 | 3 | 3 | 18 | 21 | 25 | 42 | 53
      5 | 25 | 3 | 3 | 18 | 21 | 25 | 42 | 53
  - To insert an item such that the list is sorted
  - A static data structure has a finite size that does not change after its declaration (or in compiled languages, after compile time) whereas a dynamic data structure has variable size - that can be changed at any time
- &#x200b;
  - Index |          Name | Pointer
      --: | :------------ | ------:
      `0` |     `'Robin'` |     `1`
      `1` |   `'Sparrow'` |  `None`
      `2` | `'Blackbird'` |     `0`

    Start index: `2`  
    Next free: `3`
  - Index |          Name | Pointer
    ----: | :------------ | ------:
      `0` |     `'Robin'` |     `1`
      `1` |   `'Sparrow'` |  `None`
      `2` | `'Blackbird'` |     `3`
      `3` | `'Chaffinch'` |     `4`
      `4` | `'Goldfinch'` |     `0`

    Start index: `2`  
    Next free: `5`

  - ```py
    linked_list = [
      ['Robin', 1],
      ['Sparrow', None],
      ['Blackbird', 3],
      ['Chaffinch', 4],
      ['Goldfinch', 0],
    ]
    start = 2
    next_free = 5
    ```

  - ```SPLIWACA
    SET index TO start
    WHILE ! (index ≡ NULL) DO
        SET bird TO linked_list[index][0]
        OUTPUT $bird
        SET index TO linked_list[index][1]
    END WHILE
    ```
