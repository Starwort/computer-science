---
layout: default
title: Logic Gates | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_4/chapter_3
back_text: Back to Chapter 3
---

# Logic Gates

Gate | Symbol | Operator
--- | --- | ---
Conjuction<br>AND | ![AND gate](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AND_ANSI_Labelled.svg/120px-AND_ANSI_Labelled.svg.png) | ∧
Disjunction<br>OR | ![OR gate](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/120px-OR_ANSI_Labelled.svg.png) | ∨
Negation<br>NOT | ![NOT gate](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png) | ¬
Exclusive Disjunction<br>XOR | ![XOR gate](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/120px-XOR_ANSI_Labelled.svg.png) | ⊻

Q = ¬A ∨ (B ∧ C)

Input A | Input B | Input C | D = ¬A | E = B ∧ C | Output Q = D ∨ E
:---: | :---: | :---: | :---: | :---: | :---:
0 | 0 | 0 | 1 | 0 | 1
1 | 0 | 0 | 0 | 0 | 0
0 | 1 | 0 | 1 | 0 | 1
1 | 1 | 0 | 0 | 0 | 0
0 | 0 | 1 | 1 | 0 | 1
1 | 0 | 1 | 0 | 0 | 0
0 | 1 | 1 | 1 | 1 | 1
1 | 1 | 1 | 0 | 1 | 1

## Logic Circuits

- Made up of a series of logic gates to create full systems
  - Could be thousands of gates
- The output from the first gate becomes the input for the second gate and so on

e.g. Simple alarm system

A or B = 1 means that the sensors have picked up an intruder
A or B = 0 means that the sensors have not picked up an intruder
C = 1 means the override button has been pressed to turn the alarm off
C = 0 means the alarm will continue to sound

Q = (A ∨ B) ∧ ¬C

  A |   B |   C |   Q
:-: | :-: | :-: | :-:
  0 |   0 |   0 |   0
  1 |   0 |   0 |   1
  0 |   1 |   0 |   1
  1 |   1 |   0 |   1
  0 |   0 |   1 |   0
  1 |   0 |   1 |   0
  0 |   1 |   1 |   0
  1 |   1 |   1 |   0

Q = (A ∧ B) ∧ (C ∨ D)

Q = (¬A ∨ (A ∧ B)) ∨ C

![Q = A ⊻ (B ∧ C), Q = A ⊻ (B ∧ B), Q = ¬(A ∨ B) ∧ ¬(A ∧ C), Q = (A ∨ B) ∧ (A ∨ C)](./gates.png)

Q = ¬((A∧B) ∨ ¬(A∧C))

 A | B | C | Q
:-:|:-:|:-:|:-:
 0 | 0 | 0 | 0
 1 | 0 | 0 | 0
 0 | 1 | 0 | 0
 1 | 1 | 0 | 0
 0 | 0 | 1 | 0
 1 | 0 | 1 | 1
 0 | 1 | 1 | 0
 1 | 1 | 1 | 0
