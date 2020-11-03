---
layout: default
title: Karnaugh Maps | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.4 "fix broken link for 'C' filetype" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2020 11 02
---

<style>
    sub {
        margin-right: -0.5em;
        vertical-align: text-bottom;
        font-size: 0.75em;
    }
    sup {
        margin-left: -0.5em;
        font-size: 0.75em;
    }
</style>
# Karnaugh maps

## From Boolean expression to Karnaugh map

### 2 variables (1 + 1)

We can characterise an arbitrary expression by its truth table; A \<operation> B = Q. This truth table can be condensed into a 2x2 table, called a Karnaugh map.

| A | B | Q |
|---|---|---|
| 0 | 0 | a |
| 0 | 1 | b |
| 1 | 0 | c |
| 1 | 1 | d |

becomes the more compact

| <sub>B</sub>＼<sup>A</sup> | 0 | 1 |
|----------------------------|:-:|:-:|
| 0                          | a | c |
| 1                          | b | d |

Examples:

- And

| A | B | Q |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

| <sub>B</sub>＼<sup>A</sup> | 0 | 1 |
|----------------------------|:-:|:-:|
| 0                          | 0 | 0 |
| 1                          | 0 | 1 |

- Or

| A | B | Q |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| <sub>B</sub>＼<sup>A</sup> | 0 | 1 |
|----------------------------|:-:|:-:|
| 0                          | 0 | 1 |
| 1                          | 1 | 1 |

## From Karnaugh maps to Boolean expressions

- Find the biggest (possibly overlapping) rectangles with side lengths that are a power of 2 (1, 2, 4, 8, etc.)
- Associate an expression to each rectangle
  - List the variables used, and whether they are constant or change across the rectangle
  - Ignore any which change
  - The result is the and sum of the remaining variables
- The final expression is an or sum of the expressions of the rectanges

Q = ¬A ∧ ¬B ∨ A ∧ ¬B ∨ ¬A ∧ B

| A | B | Q |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

| <sub>B</sub>＼<sup>A</sup> | 0 | 1 |
|----------------------------|:-:|:-:|
| 0                          | 1 | 1 |
| 1                          | 1 | 0 |

Q = ¬A ∨ ¬B

Exercise: Draw the Karnaugh map of the expression Q = A ∧ ¬B ∨ A ∧ B and deduce a simplified expression

| A | B | Q |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| <sub>B</sub>＼<sup>A</sup> | 0 | 1 |
|----------------------------|:-:|:-:|
| 0                          | 0 | 1 |
| 1                          | 0 | 1 |

Q = A

## Larger Karnaugh maps (more variables)

### 3 variables (2 + 1)

| A | B | AB |
|---|---|----|
| 0 | 0 | 00 |
| 0 | 1 | 01 |
| 1 | 1 | 11 |
| 1 | 0 | 10 |

| A | B | AB |  | C | Q |
|---|---|----|--|---|---|
| 0 | 0 | 00 |  | 0 | a |
| 0 | 1 | 01 |  | 0 | b |
| 1 | 1 | 11 |  | 0 | c |
| 1 | 0 | 10 |  | 0 | d |
|   |   |    |  |   |   |
| 0 | 0 | 00 |  | 1 | e |
| 0 | 1 | 01 |  | 1 | f |
| 1 | 1 | 11 |  | 1 | g |
| 1 | 0 | 10 |  | 1 | h |

| <sub>C</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|------------------------------|:--:|:--:|:--:|:--:|
| 0                            | a  | b  | c  | d  |
| 1                            | e  | f  | g  | h  |

Example: Q = ¬A ∨ ¬B ∨ A ∧ B ∧ ¬C

| <sub>C</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|------------------------------|:--:|:--:|:--:|:--:|
| 0                            | 1  | 1  | 1  | 1  |
| 1                            | 1  | 1  | 0  | 1  |

Q = ¬(A ∧ B ∧ C)

Exercise: Draw the Karnaugh map of the expression Q = ¬A ∨ ¬B ∨ A ∧ B ∨ ¬C

| A | B | C | Q |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

| <sub>C</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|------------------------------|:--:|:--:|:--:|:--:|
| 0                            | 1  | 1  | 1  | 1  |
| 1                            | 1  | 1  | 1  | 1  |

Q = 1

## 4 variables (2 + 2)

Example: Q = A ∨ (A ∧ ¬B ∧ C ∧ D)

| A | B | AB |
|---|---|----|
| 0 | 0 | 00 |
| 0 | 1 | 01 |
| 1 | 1 | 11 |
| 1 | 0 | 10 |

and

| C | D | CD |
|---|---|----|
| 0 | 0 | 00 |
| 0 | 1 | 01 |
| 1 | 1 | 11 |
| 1 | 0 | 10 |

becomes

| <sub>C D</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|--------------------------------|:--:|:--:|:--:|:--:|
| 00                             | 0  | 0  | 1  | 1  |
| 01                             | 0  | 0  | 1  | 1  |
| 11                             | 0  | 0  | 1  | 1  |
| 10                             | 0  | 0  | 1  | 1  |

Exercise: Draw the Karnaugh map of Q and deduce a simplified expression

Q = X ∨ Y
X = (¬A ∧ ¬B ∧ C ∧ D) ∨ (¬A ∧ B ∧ C ∧ D) ∨ (A ∧ B ∧ C ∧ D) ∨ (A ∧ ¬B ∧ C ∧ D)
Y = (A ∧ B ∧ ¬C ∧ ¬D) ∨ (A ∧ B ∧ ¬C ∧ D) ∨ (A ∧ B ∧ C ∧ ¬D)

| <sub>C D</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|--------------------------------|:--:|:--:|:--:|:--:|
| 00                             | 0  | 0  | 1  | 0  |
| 01                             | 0  | 0  | 1  | 0  |
| 11                             | 1  | 1  | 1  | 1  |
| 10                             | 0  | 0  | 1  | 0  |

Q = A ∧ B ∨ C ∧ D

Exercise: What Boolean expression does each map represent?

| <sub>C D</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|--------------------------------|:--:|:--:|:--:|:--:|
| 00                             | 0  | 0  | 0  | 0  |
| 01                             | 0  | 0  | 0  | 0  |
| 11                             | 1  | 1  | 1  | 1  |
| 10                             | 0  | 0  | 0  | 0  |

Q = C ∧ D

| <sub>C D</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|--------------------------------|:--:|:--:|:--:|:--:|
| 00                             | 0  | 0  | 0  | 0  |
| 01                             | 1  | 0  | 0  | 1  |
| 11                             | 1  | 1  | 0  | 1  |
| 10                             | 1  | 1  | 0  | 0  |

Q = ¬B ∧ C ∨ ¬C ∧ D

| <sub>C D</sub>＼<sup>A B</sup> | 00 | 01 | 11 | 10 |
|--------------------------------|:--:|:--:|:--:|:--:|
| 00                             | 0  | 0  | 0  | 0  |
| 01                             | 1  | 1  | 1  | 1  |
| 11                             | 1  | 0  | 0  | 1  |
| 10                             | 1  | 0  | 0  | 1  |
