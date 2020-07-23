---
layout: default
title: Thinking Procedurally | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.6 "fix name of root directory" ⓒ Starwort, 2020
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
    /* ul ol {
        list-style-type: circle;
    } */
    ol ol {
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
# Chapter 49

← [Back to Chapter 3](./index.html)

1. &#x200b;
    1. It allows more potential code reuse, saving time during future development
2. Test times table → Input times table, (Display questions → Generate random number, Calculate answer, Output question, Input answer, Mark question, Output response), Output score

## Exercises

- &#x200b;
    - Programmers do not have to worry about other code overwriting the variables their code is using, as their variables are not exposed outside of the subroutine in question. It also makes functions pure (meaning that they do not depend on state other than their inputs), which makes the functions much easier to test and document.
    - &#x200b;
        1. Using meaningful variable and routine names makes code easier to understand and maintain as the code explains itself to the person reading it (many people say that well-written code does not need comments!)
        2. Using comments makes code easier to understand and maintain as the comments can explain the purpose of an algorithm and notes on why things are done a certain way, reducing the amount of confusion a person incurs when reading the code.
        3. Using documentation and docstrings makes a program easy to understand and maintain as each subroutine and module will have its interface and purpose clearly defined, so that only the relevant sections of code need to be inspected to locate and fix a bug.
- Show quiz → (Ask questions → (Load question → Pick random number, Load numbered question from file), Output question, Input answer, (Mark question → Compare answer with correct answer, Add 1 to score if correct), (Give feedback → Load feedback for question and correct answer, Output feedback)), Output score