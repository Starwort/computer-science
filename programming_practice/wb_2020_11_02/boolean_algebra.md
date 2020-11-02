---
layout: default
title: Boolean Algebra | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.4 "fix broken link for 'C' filetype" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2020 11 02
---

# Boolean algebra

## Remarkable identities

Exercise: Complete the truth tables for:

01. E ∧ 0 = 0

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 0 |

02. E ∧ 1 = E

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 1 |

03. E ∧ E = E

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 1 |

04. E ∧ ¬E = 0

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 0 |

05. E ∨ 0 = E

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 1 |

06. E ∨ 1 = 1

| E | Q |
|:-:|:-:|
| 0 | 1 |
| 1 | 1 |

07. E ∨ E = E

| E | Q |
|:-:|:-:|
| 0 | 0 |
| 1 | 1 |

08. E ∨ ¬E = 1

| E | Q |
|:-:|:-:|
| 0 | 1 |
| 1 | 1 |

09. ¬¬E = E

| E | ¬E | ¬¬E |
|:-:|:--:|:---:|
| 0 | 1  |  0  |
| 1 | 0  |  1  |

## Commutation, association, and priority rules

In algebraic expressions, there is an order of precedence for the operations. BIDMAS is a mnemonic used to help remember this order - Brackets, Indices, Division/Multiplication, Addition/Subtraction. There is also an order of precedence for Boolean operations used in Boolean algebra - Brackets, Not, Xor, And, Or (not as catchy).

Exercise: Using just the commutativity and associativity laws, simplify the below expressions

01. A ∧ A → A
02. B ∨ B → B
03. (A ∨ B) ∧ (A ∨ B) → A ∨ B
04. A ∨ A -> A
05. (A ∧ B) ∨ (A ∧ B) → A ∧ B
06. X ∨ Y ∨ X → X ∨ Y
07. B ∨ 1 → 1
08. A ∨ B ∨ A ∨ C ∨ 1 → 1
09. A ∨ B ∧ 0 → A
10. A ∨ 0 → A

## Distribution

A ∧ (B ∨ C) = A ∧ B ∨ A ∧ C

Exercise: Expand the brackets in the expressions. Do not simplify the resulting expressions

01. C ∧ (D ∨ B) → C ∧ D ∨ C ∧ B
02. C ∧ D ∧ (B ∨ A ∧ E) → C ∧ D ∧ B ∨ C ∧ D ∧ A ∧ E
03. A ∧ (C ∨ B ∨ D) -> A ∧ C ∨ A ∧ B ∨ A ∧ D
04. D ∧ (F ∨ E ∧ (A ∨ B)) → D ∧ F ∨ D ∧ E ∧ A ∨ D ∧ E ∧ B

Exercise: Factorise the expressions

01. C ∧ D ∨ C ∧ A → C ∧ (D ∨ A)
02. C ∧ D ∧ B ∨ B ∧ A ∧ E → B ∧ (C ∧ D ∨ A ∧ E)
03. A ∧ C ∨ C ∧ E ∨ B ∧ C → C ∧ (A ∨ B ∨ E)
04. E ∧ F ∨ E ∧ ¬F → E ∧ (F ∨ ¬F) → E

## Absorption

- A ∨ (B ∧ A) = A  
- A ∧ (B ∨ A) = A

Exercise: Simplify the expressions below

01. C ∨ C ∧ D → C
02. D ∨ C ∧ D ∧ B → D
03. (C ∨ A) ∧ A → A
04. D ∧ 1 ∨ D ∧ F → D
05. E ∧ F ∨ (E ∧ F ∨ D) → E ∧ F ∨ D
06. A ∧ B ∧ (0 ∨ ¬A) ∨ 1 → 1
07. ¬D ∧ (¬E ∨ ¬D) → ¬D

## De Morgan's law

When using the *negation* of an expression, replace booleans and operators using this correspondence table:

| Original | Negation |
|:--------:|:--------:|
|    A     |    ¬A    |
|    ∧     |    ∨     |
|    ∨     |    ∧     |

Exercise: Use De Moran's laws, and any other rules that will help, to simplify the expressions below

01. ¬(¬A ∧ ¬B) → A ∨ B
02. ¬(¬B ∨ ¬C) ∧ A → A ∧ B ∧ C
03. ¬(¬A ∨ ¬B) → A ∧ B
04. ¬(¬A ∧ ¬E) ∨ (A ∧ F) → A ∨ E

## Final exercises

Simplify each Boolean expression using the basic rules, De Morgan's Laws

01. B ∨ (A ∧ ¬A) → B
02. A ∧ B ∨ A ∧ ¬B → A
03. ¬(1 ∧ B) → ¬B
04. ¬(¬A ∧ ¬B) ∨ A ∨ ¬B → 1
05. (¬A ∨ B) ∧ (A ∧ ¬B) → 0
06. ¬A ∨ ¬(B ∨ A) → ¬A
07. D ∨ F ∧ D ∨ F ∧ G → D ∨ F ∧ G
08. ¬B ∧ ¬(¬A ∨ ¬B) → 0
09. ¬(¬A ∧ B) ∨ A ∧ (A ∨ ¬B) → A ∨ ¬B
10. A ∧ B ∧ ¬C ∨ A ∧ ¬C → A ∧ ¬C
11. X ∧ (¬X ∨ Y) → X ∧ Y
12. D ∨ E ∧ C ∨ ¬B ∧ D ∨ E → D ∨ E
13. A ∧ A ∨ A ∧ 1 ∨ B ∧ ¬B → A
14. (A ∧ A ∨ B) ∨ 0 → A ∨ B
15. ¬(¬D ∧ ¬E) ∧ ¬(¬D ∨ ¬E) → D ∧ E
16. ¬(D ∧ ¬E) ∧ D ∨ ¬E → E ∧ D ∨ ¬E
17. (A ∨ A ∧ B) ∨ B → A ∨ B
18. ¬(A ∨ B ∨ ¬A) → 0
19. A ∨ ¬(B ∨ ¬A) → A
20. A ∧ B ∧ B ∧ C ∨ A ∧ 0 ∧ B ∨ A ∧ C ∧ B ∧ D → A ∧ B ∧ C
