---
layout: default
title: Thinking Ahead | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "hopefully fix indexes" ⓒ Starwort, 2020
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
# Chapter 48

← [Back to Chapter 2](./index.html)

1.  ```psc
    str[] items = ['hello world', 'out of cheese; redo from start', 'you sunk my battleship']

    search_term = input('enter search term: ')

    if (SearchList(items, search_term)) then do
        output('found item')
    else do
        output('could not find item')
    end if
    ```
2. The input is a single float `n`. If the language supports complex numbers, the input is unrestricted; if not, the input must be non-negative. The output is a complex number in languages that support them, and it is a float in languages that do not.

## Exercises

- Specifying the inputs of a subroutine in the documentation of the containing library is useful for the importing programs as it allows the programmer to know the signature of the function and ensure the arguments are in the correct order. Specifying the outputs of a subroutine in documentation is useful for the importing programs as it informs the programmer of the circumstances where the imported function is useful to the program. Specifying the preconditions for the inputs of a subroutine is useful for the importing programs as it allows the programmer to avoid sending invalid parameters to the function.
- &#x200b;
    1. Functions (in Python)
    2. Modules (in Python)
- Caching is loading data into a specific area of memory that will be used often to avoid recomputing it. It can be used in a computer system to speed up loading frequently loaded webpages, or to speed up a function that is called often (as long as it's a pure function)
