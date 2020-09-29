---
layout: default
title: Inheritance | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.4 "fix broken link for 'C' filetype" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Classes RENAME LATER
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
