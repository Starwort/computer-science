---
layout: default
title: Queues | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.1 "indent </details>" ⓒ Starwort, 2020
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
  ol ol > li::before {
    content:none;
  }
  ol ul {
    list-style-type: lower-alpha;
  }
  ol ul ul {
    list-style-type: lower-roman;
  }
  ul ol {
    list-style-type: circle;
  }
  ol ol {
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

# Chapter 34

← [Back to Chapter 2](./index.html)

1. Queue operation | Queue contents | Return value
    :--- | :--- | :---
    `q.is_empty()` | `[]` | `True`
    `q.enqueue('Blue')` | `['Blue']` | `None`
    `q.enqueue('Red')` | `['Blue', 'Red']` | `None`
    `q.enqueue('Gren')` | `['Blue', 'Red', 'Green']` | `None`
    `q.is_full()` | `['Blue', 'Red', 'Green']` | `False`
    `q.is_empty()` | `['Blue', 'Red', 'Green']` | `False`
    `q.dequeue()` | `['Red', 'Green']` | `Blue`
    `q.enqueue('Yellow')` | `['Red', 'Green', 'Yellow']` | `None`

    [√]

2. For implementation style 1:
    1. The queue now contains `['Bob', 'Adam', 'Jack']`. There are three names in the queue. There are 3 free spaces.
    2. The queue now contains `['Jason' (stale), 'Milly' (stale), 'Bob', 'Adam', 'Jack']`. There are five names in the queue, two of which are stale (dequeued items that have not yet been overwritten). There is one free space. [√]
3. &#x200b;
    - `[None, None, None, None, None, None]`  
    front: 0  
    rear: -1
    - `['Greg', 'Ben' (stale), 'Charlie' (stale), 'Davina', 'Enid', 'Fred']`  
    front: 3  
    rear: 0 [√]

4. A circular queue is an example of abstraction as it prevents the user from worrying about storing their queue in memory - the queue takes up a static size and can be treated as magic storage for the purposes of the user [√]
5. An item joins a priority queue at the front if (and only if) it is higher priority than all other items in the queue. It joins at the rear if (and only if) it is lower priority than all other items in the queue

## Exercises

- &#x200b;
  - A queue might be implemented as a circular queue to save on memory; circular queues use a static amount of memory for variable insertions and deletions.
  - A dynamic data structure is one which can change size during execution. It would be useful in implementing a queue as it allows queues to have a non-static size and would allow using a linear queue instead of a circular queue without the memory usage issues
  - &#x200b;
    - Queue | `front` | `rear`
        --- | --- | ---
        [] | 0 | -1
        [Job1] | 0 | 0
        [Job1, Job2] | 0 | 1
        [Job1, Job2, Job3] | 0 | 2
        [Job1, Job2, Job3, Job4] | 0 | 3
        [Job1, Job2, Job3, Job4, Job5] | 0 | 4
    - Queue | `front` | `rear`
        --- | --- | ---
        [Job6, Job2 (stale), Job3, Job4, Job5] | 2 | 0
- &#x200b;
  - Static  
    Array  
    The memory usage is known so exactly the right amount can be allocated
  - &#x200b;
    - `front`: 0  
        `next`: 0

    - ```py
        data = queue[front]
        front += 1
        return data
        ```

  - ```text
         |<--- structure --->|
       | | |0|1|2|3|4|5|6|7| |
           ^ front         ^ next
         add 8
       | | |0|1|2|3|4|5|6|7|8|
    next ^ ^ front
         add 9
       | |9|0|1|2|3|4|5|6|7|8|
      next ^ front
         add A
       | |9|a|1|2|3|4|5|6|7|8|
     front ^ ^ next
         problem! first element got overwritten!
    ```
