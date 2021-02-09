---
layout: default
title: Inheritance | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_2/section_2/classes_RENAME_LATER
back_text: Back to Classes RENAME LATER
---

# Inheritance

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
