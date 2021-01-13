---
layout: default
title: Algorithmic Complexity | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.0 "Switch to Material Icons" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2021 01 11
---

# Algorithms

*Tools for Analysis and Comparison* <!-- not a header -->

## Mathematical Concepts

### Understanding functions

- let f(x) = 2x + 7
- f(5) = 17
- f(x) where -2 <= x <= 2

  <iframe src="https://www.desmos.com/calculator/satoqff6dh" width="100%" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

### Understanding exponentials

- let f(x) = 2<sup>x</sup>
  - Then f(1) = 2
  - f(10) = 1024
  - f(100) = 1,267,650,600,228,229,401,496,703,205,376

### Understanding factorials

- There are 24 permutations of 4 objects
- There are 720 ways of arranging six students in a line

## Determining Algorithmic Complexity

### Definitions

1 ≪ logn ≪ n ≪ n<sup>2</sup> ≪ 2<sup>x</sup>

#### O(1) (Constant time)

- O(1) describes an algorithm that takes constant time (the same amount of time) to execute regardless of the size of the input data set. Suppose array a has n items. The statement length = len(a) wil take the same amount of time to execute however many items are held in the array.

#### O(logn) (Logarithmic time)

- The time taken to execute an algorithm of order O(logn) (logarithmic time) will grow very slowly as the size of the data set increases; binary search is a good example of an algorithm of time complexity O(log<sub>2</sub>(n)). Doubling the size of the data set has very little effect on the time the algorithm takes to complete.

#### O(n) (linear time)

- O(n) describes an algorithm whose performance will grow in linear time, in direct proportion to the size of the data set.For example, a linear search of an array of 1000 unsorted items will take 1000 times longer than searching an array of 1 item.

#### O(n<sup>2</sup>) (Polynomial time)

- O(n<sup>2</sup>) describes an algorithm whose performance is directly proportional to the square of the size of the data set.A program with two nested loops each performed n times will typically have an order of lime complexity O(n<sup>2</sup>). The running time of the algorithm grows in polynomial time.

#### O(2<sup>n</sup>) (Exponential time)

O(2<sup>n</sup>) describes an algorithm where the time taken to execute will double with every additional item added to the data set. The execution time grows in exponential time and quickly becomes very large; e.g. printing all binary numbers that can be represented in n bits

## Practice

Let f(n) = 5n<sup>4</sup>+2n+logn  
Then f(n) has complexity O(n<sup>4</sup>)

Determine O for functions with the following number of instructions:

- a(n) = 2n + 4n<sup>3</sup> + 57
  - O(n<sup>3</sup>)
- b(n) = 4n + 2n<sup>2</sup> + 1
  - O(n<sup>2</sup>)
- c(n) = 1000n + n<sup>2</sup>
  - O(n<sup>2</sup>)
- d(n) = 35
  - O(1)
- e(n) = 35 + logn
  - O(logn)
- f(n) = logn + n + 46
  - O(n)
- g(n) = nlogn + n + 46
  - O(nlogn)
- h(n) = 2<sup>n</sup> + 3n<sup>8</sup> + 19
  - O(2<sup>n</sup>)
- i(n) = 2<sup>n</sup> + logn + n<sup>2</sup>
  - O(2<sup>n</sup>)

What is the time complexity of the code below?

```c
int count_to(int N) {
    int count = 0;
    for (int i = N; i > 0; i /= 2) {
        for (int j = 0; j < i; j++) {
            count += 1;
        }
    }
    return count;
}
```

- O(nlogn)

Place the following algorithms in order of time complexity, with the most efficient algorithm first:

- A: O(n)
- B: O(2<sup>n</sup>)
- C: O(logn)
- D: O(n<sup>2</sup>)
- E: O(n!)
- F: O(nlogn)

CAFDBE

Explain why algorithms with time complexity O(n!) are generally considered not to be helpful in solving a problem. Under what circumstances would such an algorithm be considered?

- O(n!) algorithms have one of the fastest complexity growths of any kind of algorithm; when n = 20 the base complexity is already 3,715,891,200.

  Such algorithms are considered only when such growth is explicitly required by the operation; e.g. enumeration and display of all permutations of a set of values

## Complexity and Data Structures

- What is the complexity of adding/deleting an element of an array:
  - at the end? O(1)
  - in the middle? O(n)
- Same questions for a linked list:
  - O(1)
  - O(1)
- Complexity of adding an element to a Binary Search Tree?
  - O(logn) average complexity; O(n) worst-case complexity
- What about finding an element?
  - Array
    - Unsorted: O(n)
    - Sorted: O(logn)
  - Linked list:
    - O(n) as linked lists do not have direct access
  - BST:
    - O(logn) average complexity; O(n) worst-case complexity

## Search algorithms

*Linear and Binary* <!-- not a header -->

### Linear search

```c
int linear_search(int search_in[], int nelem, int looking_for) {
    for (int i = 0; i < nelem; i++) {
        if (search_in[i] == looking_for) {
            return i;
        }
    }
    return -1
}
```

- What is the complexity of the linear search algorithm:
  - in the best case? O(1)
  - in the worst case? O(n)
- Does the array need to be sorted? No

### Binary search

```c
int iterative_binary_search(int search_in[], int nelems, int looking_for) {
    int start = 0;
    int end = nelems;
    while (start != end) {
        int midpoint = (end - start) / 2 + start;
        if (search_in[midpoint] == looking_for) {
            return midpoint;
        }
        if (search_in[midpoint] < looking_for) {
            start = midpoint + 1;
        } else {
            end = midpoint;
        }
    }
    return -1;
}
```

What is the maximum number of items what would need to be examined to find a particular item in a binary search of one million items? 19 = floor(log<sub>2</sub>(1,000,000))

Does the list need to be sorted? Yes

The list of positive even numbers up to and including 1000 is stored in a variable x.

An attempt is made to find the number 607 in this list. Show the first three stages for:

- Binary search
  - 502 < 607
  - 752 > 607
  - 628 > 607
- Linear search
  - 2 ≠ 607
  - 4 ≠ 607
  - 6 ≠ 607
- Explain the difference between binary search and serial search
  - Binary search works by halving the number of potential positions at each step, based on whether the pivot is more or less than (or equal to) the search term. Linear search, however, compares each element in turn to the search term, sequentially along the list.
  - Linear search will work on any list, but binary search can only work on sorted lists.
- State one advantage and one disadvantage of a binary search compared with a linear search
  - Binary search can be *much* faster than linear search
  - ...but it requires the list to be sorted first

- A list in alphabetical order contains 150 names. What is the maximum number of names that would need to be accessed to determine if a particular name appears in the list?
  - 7
- What is the time complexity of binary search?
  - O(logn)

```c
int recursive_binary_search(int search_in[], int start, int end, int looking_for) {
    if (start == end) {
        return -1;
    }
    int midpoint = (end - start) / 2 + start;
    if (search_in[midpoint] == looking_for) {
        return midpoint;
    }
    if (search_in[midpoint] < looking_for) {
        start = midpoint + 1;
    } else {
        end = midpoint;
    }
    return binary_search(search_in, start, end, looking_for);
}
```

- What condition(s) will cause a value to be returned?
  - `start == end`; i.e. if there are no more values to look in
  - `search_in[midpoint] == looking_for` i.e. if the value has been found
  - all other cases defer to a (tail-)recursive call

```c
#include <stddef.h>
#include <stdbool.h>
typedef struct _node {
    int value;
    struct _node* left;
    struct _node* right;
} node;
bool recursive_bst_search(int looking_for, node* current_node) {
    if (current_node == NULL) {
        return false;
    }
    if (current_node->item == looking_for) {
        return true;
    }
    if (current_node->item > looking_for) {
        return recursive_bst_search(looking_for, current_node->left);
    } else {
        return recursive_bst_search(looking_for, current_node->right);
    }
}
```
