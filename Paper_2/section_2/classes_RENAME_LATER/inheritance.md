---
layout: default
title: Inheritance | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.1 "indent </details>" ⓒ Starwort, 2020
---

# Inheritance

← [Back to Classes](./index.html)

## Classes

- `School`
  - No base class
  - Attributes:
    - `teachers`: `list`
    - `students`: `list`
    - `name`: `str`
- `Person`
  - This is a base class
  - Attributes:
    - `name`: `str`
    - `age`: `int`
  - Derived classes:
    - `Teacher`
      - Attributes:
        - (inherited) `name`: `str`
        - (inherited) `age`: `int`
        - `form`: `str`
    - `Student`
      - Attributes:
        - (inherited) `name`: `str`
        - (inherited) `age`: `int`
        - `form`: `str`
        - `year`: `int`
