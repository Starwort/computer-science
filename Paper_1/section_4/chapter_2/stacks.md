---
layout: default
title: Stacks | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "fix indexes" ⓒ Starwort, 2020
has_title: false
---

<style>
    :not(ul) + ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    :not(ul) + ol > li {
        counter-increment: list-ctr;
    }
    :not(ul) + ol > li::before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul {
        list-style-type: lower-roman;
    }
    ol ol {
        list-style-type: lower-alpha;
    }
    ol ul ul {
        list-style-type: lower-roman;
    }
    ul ol {
        list-style-type: circle;
    }
    ul {
        list-style-type: decimal;
    }
    ul ul {
        list-style-type: lower-alpha;
    }
    ul ul ul {
        list-style-type: lower-roman;
    }
</style>

# Chapter 36

← [Back to Chapter 2](./index.html)

1. ```SPLIWACA
    FUNCTION peek -> STRING AS
        IF isEmpty DO
            OUTPUT Stack is empty
        ELSE DO
            RETURN s[top]
        END IF
    END FUNCTION
    ```

2. Stack operation | Stack contents | Return value
    :---: | :--- | ---:
     - | `['Blue', 'Red']` | -
    Pop | `['Blue']` | `'Red'`
    Pop | `[]` | `'Blue'`
    Push 'Yellow' | `['Yellow']` | `None`

# Exercises

- &#x200b;
  - Stack
  - Overflow, where the code attempts to add an item to an already-full stack, such that it overwrites other bits of memory (or itself)
  - Stacks can be used for holding return addresses during execution, which are popped off during return
  
  - ```SPLIWACA
      PROCEDURE reverse_queue <- Queue queue AS
          SET stack TO CREATE Stack
          WHILE ! (CALL queue.isEmpty) DO
              CALL stack.push WITH CALL queue.pop
          END WHILE
          WHILE ! (CALL stack.isEmpty) DO
              CALL queue.push WITH CALL stack.pop
          END WHILE
      END PROCEDURE
    ```
