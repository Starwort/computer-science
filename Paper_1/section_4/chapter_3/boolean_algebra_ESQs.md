---
layout: default
title: Boolean Algebra ESQs | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_4/chapter_3
back_text: Back to Chapter 3
---

# 1.4.3 Boolean Algebra

## Exam-Style Questions (37 marks)

1. Complete the truth table for XOR

   |   A   |   B   |   Q   |
   | :---: | :---: | :---: |
   |   0   |   0   |   0   |
   |   0   |   1   |   1   |
   |   1   |   0   |   1   |
   |   1   |   1   |   0   |
2. The truth table of a NAND gate is shown below.

   |   A   |   B   |   Q   |
   | :---: | :---: | :---: |
   |   0   |   0   |   1   |
   |   0   |   1   |   1   |
   |   1   |   0   |   1   |
   |   1   |   1   |   0   |

   Construct a sequence of gates equivalent to a NAND gate, but built only of AND, OR, and NOT gates.

   ¬(A ∧ B)

   ```
          ┌──────╮
   A ─────┤      │  │╲
          │      ├──┤ ├◯───── Q
   B ─────┤      │  │╱
          └──────╯
   ```

3. Create a truth table to represent the following Boolean expression: Q = ¬(A ∧ B) ∨ C

   |   A   |   B   |   C   |   Q   |
   | :---: | :---: | :---: | :---: |
   |   0   |   0   |   0   |   1   |
   |   0   |   0   |   1   |   1   |
   |   0   |   1   |   0   |   1   |
   |   0   |   1   |   1   |   1   |
   |   1   |   0   |   0   |   1   |
   |   1   |   0   |   1   |   1   |
   |   1   |   1   |   0   |   0   |
   |   1   |   1   |   1   |   1   |

4. A cinema offers discounted tickets, but only under one of the following conditions:
   - Customer is under 18 and has a student card
   - Customer is over 60 and has ID which proves this

   Let:
   - A be 'Customer is under 18'
   - B be 'Customer has a student card'
   - C be 'Customer is over 60'
   - D be 'Customer has ID'
   - Q be 'Discount ticket issued'

   Complete the Boolean expression:

   Q = **(A ∧ B) ∨ (C ∧ D)**
5. Burger House is a fast food restaurant which wants to encourage healthy eating amongst its younger diners.

   Shown below is the Burger House children's menu.

   > ## Children's Menu
   >
   > ### Burgers
   >
   > Cheeseburger  
   > Grilled Chicken burger *(Healthy Option)*
   >
   > ***
   >
   > ### Side Dishes
   >
   > French Fries  
   > Salad *(Healthy Option)*  
   > Carrot Sticks *(Healthy Option)*
   >
   > ***
   >
   > ### Desserts
   >
   > Chocolate Brownie  
   > Fruit Salad *(Healthy Option)*

   Children receive a free toy when they select a meal (i.e. one burger, one side dish and one dessert) made up of only healthy options.

   - Let *g* be a Boolean value for if a child has chosen a *grilled chicken burger*.
   - Let *s* be a Boolean value for if a child has chosen *salad*.
   - Let *c* be a Boolean value for if a child has chosen *carrot sticks*.
   - Let *f* be a Boolean value for if a child has chosen *fruit salad*.
   - Let *t* be a Boolean value for whether a child receives a toy.

   1. Write an expression using Boolean algebra to determine whether a child receives a toy when they select a meal.

      *t* = *g* ∧ (*s* ∨ *c*) ∧ *f*
   2. Burger House wants to add this logic into its till system. Complete the code below, assuming that `g`, `s`, `c`, `f`, and `t` are Boolean variables with the same meaning as in part (a).

      ```
      t = false
      if g and (s or c) and f then
          t = true
      endif
      ```

6. An electronics engineer needs a circuit with the following logic:

   (A ∧ B) ∨ (¬A ∧ B) ∨ (¬C ∧ ¬D)

   Complete and use the Karnaugh map below to simplify the expression above.

   | &#x200b; ╲AB<br>CD╲ &#x200b; |  00   |  01   |  11   |  10   |
   | :--------------------------- | :---: | :---: | :---: | :---: |
   | 00                           |   1   |   1   |   1   |   1   |
   | 01                           |   0   |   1   |   1   |   0   |
   | 11                           |   0   |   1   |   1   |   0   |
   | 10                           |   0   |   1   |   1   |   0   |

   Simplified expression: B ∨ ¬(C ∨ D)
7.
   | &#x200b; ╲AB<br>CD╲ &#x200b; |  00   |  01   |  11   |  10   |
   | :--------------------------- | :---: | :---: | :---: | :---: |
   | 00                           |   1   |   1   |   0   |   1   |
   | 01                           |   0   |   0   |   0   |   0   |
   | 11                           |   0   |   0   |   1   |   0   |
   | 10                           |   1   |   1   |   1   |   0   |

   State the Boolean expression represented by the Karnaugh map above, in its smallest form

   (¬A ∧ ¬D) ∨ (¬B ∧ ¬C ∧ ¬D) ∨ (A ∧ B ∧ C)
