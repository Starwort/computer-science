---
layout: default
title: Inheritance | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "fix indexes" ⓒ Starwort, 2020
has_title: false
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
