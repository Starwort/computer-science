---
layout: default
title: Trees | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.1 "fix a bunch of bugs" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 2
---

# Trees

## What is a tree?

- A tree is a specific kind of graph
- Nodes are connected only to **one parent** and **zero or more uniquely owned children**
- Thus there are no cycles because there are no connections between children or between branches

## Definitions

- Node: The nodes contain the tree data
- Edge: An edge connects two nodes. Every node except the root is connected by exactly one edge to its parent
- Root: This is the only node with no incoming edges
- Children: The set of nodes that have incoming edges from the same node
- Parent: A node is the parent of any node it connects to via an outgoing edge
- Subtree: The set of nodes and edges comprised of a parent and all its descendants. A subtree may also be a single leaf
- Leaf node: A node with no children.

```graph
              root
subtree  ,--'      `--.
/   parent     \     parent
|  /   |  \    |    /      \
\leaf leaf leaf/ child    leaf
```

## What is a binary tree?

- A binary tree is a specific kind of tree
- Each node has **at most two children**

## Implementation

- A binary tree can be implemented as a list of items containing:
  - Left pointer (pointer to the left child)
  - Data
  - Right pointer (pointer to the right child)
- If every node has **at most one** child (i.e. left/right pointer is null for all nodes), the structure is a (singly) linked list

## Traversing a binary tree

[![Image representing in-order traversal](https://lh4.googleusercontent.com/J1v7SrTprg7yXHJJSDv46inWbaVZ_DAPLsveEy6DUO_IWpz29LtdsWcoWhxg1B0_X7ahn1eBGOZS2GJyVKJh9PbT0KubOAVlTuFdmC3pcfq_m1BQRr6GJ0MZHZezj5kwuB9DLLrxHOA)](https://lh4.googleusercontent.com/J1v7SrTprg7yXHJJSDv46inWbaVZ_DAPLsveEy6DUO_IWpz29LtdsWcoWhxg1B0_X7ahn1eBGOZS2GJyVKJh9PbT0KubOAVlTuFdmC3pcfq_m1BQRr6GJ0MZHZezj5kwuB9DLLrxHOA)  
This represents in-order traversal, and the output is the sorted list; `4,5,8,12,14,17,18,22,25,30`

[![Image representing pre-order traversal](https://lh4.googleusercontent.com/zcHQrQXuWlrN2rtn550swmb6JslHMxBItsT6qx1zNbgn_ZsbiAOtMjMGS-4nHfJTgu_y5btWwWZrtliTZlW-LMrRRkqN4EVW0EJv33Rtuboe9SwiDnng-I7dR9v9Hto1Rfq-_JzxazQ)](https://lh4.googleusercontent.com/zcHQrQXuWlrN2rtn550swmb6JslHMxBItsT6qx1zNbgn_ZsbiAOtMjMGS-4nHfJTgu_y5btWwWZrtliTZlW-LMrRRkqN4EVW0EJv33Rtuboe9SwiDnng-I7dR9v9Hto1Rfq-_JzxazQ)  
This represents pre-order traversal, and the output is `17,8,4,5,12,14,22,19,30,25`

[![Image representing post-order traversal](https://lh5.googleusercontent.com/A1b7tnrkYjLPmClo6LFaelcMOnb9yc3XXi7CCqBLNAVQnFLc_erBXvVLs5TyU9cK57vBdpbmp7DR33C_BUf55BfgitayNP6pHy4LhzLJVwpEgtb5HEmYYRKp9JjKffhZMYpZDy6-UYo)](https://lh5.googleusercontent.com/A1b7tnrkYjLPmClo6LFaelcMOnb9yc3XXi7CCqBLNAVQnFLc_erBXvVLs5TyU9cK57vBdpbmp7DR33C_BUf55BfgitayNP6pHy4LhzLJVwpEgtb5HEmYYRKp9JjKffhZMYpZDy6-UYo)  
This represents post-order traversal, and the output is `5,4,14,12,8,19,25,30,22,17`

## Traversing a binary tree (algorithm)

```psc
PROCEDURE preorder_traverse(NODE p) DO
    PRINT p.data
    IF p.left IS NOT NULL DO
        preorder_traverse(p.left)
    END IF
    IF p.right IS NOT NULL DO
        preorder_traverse(p.right)
    END IF
END PROCEDURE
PROCEDURE inorder_traverse(NODE p) DO
    IF p.left IS NOT NULL DO
        inorder_traverse(p.left)
    END IF
    PRINT p.data
    IF p.right IS NOT NULL DO
        inorder_traverse(p.right)
    END IF
END PROCEDURE
PROCEDURE postorder_traverse(NODE p) DO
    IF p.left IS NOT NULL DO
        postorder_traverse(p.left)
    END IF
    IF p.right IS NOT NULL DO
        postorder_traverse(p.right)
    END IF
    PRINT p.data
END PROCEDURE
```

## Exercise

01. Show how the following data may be stored as a binary tree for subsequent processing in alphabetic order by drawing the tree. Assume that the first item is the root of the tree and the rest of the data items are inserted into the tree in the order given

    `magpie`, `robin`, `chaffinch`, `linnet`, `thrush`, `blackbird`, `fieldfare`, `skylark`, `pigeon`

    - ```graph
                   magpie
                 /        \
          chaffinch       robin
          /     \         /   \
      blackbird linnet pigeon thrush
                /             /
        fieldfare       skylark
      ```

02. Show how the data could be represented using three one-dimensional arrays

      <!-- why does this have to be marked as C++ it's perfectly valid C -->
    - ```c++
      char* data[9] = {"magpie", "robin", "chaffinch", "linnet", "thrush", "blackbird", "fieldfare", "skylark", "pigeon"};
      int left_ptrs[9] = {2, 8, 5, 6, 7, -1, -1, -1, -1};
      int right_ptrs[9] = {1, 4, 3, -1, -1, -1, -1, -1, -1};
      ```

03. List the order that the nodes would be visited in during:
    01. Pre-order traversal
        - `magpie`, `chaffinch`, `blackbird`, `linnet`, `fieldfare`, `robin`, `pigeon`, `thrush`, `skylark`
    02. In-order traversal
        - `blackbird`, `chaffinch`, `fieldfare`, `linnet`, `magpie`, `pigeon`, `robin`, `skylark`, `thrush`
    03. Post-order traversal
        - `blackbird`, `fieldfare`, `linnet`, `chaffinch`, `pigeon`, `skylark`, `thrush`, `robin`, `magpie`

In a BST, what kind of traversal will retrieve the contents in sorted order?

- In-order traversal

How do we find an object in a BST?

- Check at each node if the object equals the node's value. If it does then it has been found; if not, check if the object is less than the node's value and traverse the left path if it is (and the right path if it is not). If there is no path to travel in this step then the object is not in the tree
