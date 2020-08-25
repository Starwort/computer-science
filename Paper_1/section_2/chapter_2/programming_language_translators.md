---
layout: default
title: Programming Language Translators | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.2.3 "parent folders in indexes *should* now display properly" ⓒ Starwort, 2020
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
    ul ol, ol ol {
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

# Chapter 10

← [Back to Chapter 2](./index.html)

1. To prevent unauthorised copying or modifications

## Exercises

- &#x200b;
  1. An example of a low-level language is **x86 assembly**. Low-level languages run much closer to the hardware than high-level languages, meaning that one line is (usually) one operation to be performed by the computer. This means that, compared to a high-level language, you have much finer control over the CPU and RAM. **x86 assembly** is translated by an **assembler**.
    It is likely to be the right choice in any **low-memory environment**, or for **simple embedded systems**.
  2. An example of a high-level language is **Python**. High level languages can perform many instructions in a single line, resulting in programs often being much shorter; for example, memory management is often performed automatically. This means that, compared to a low-level language, programs are much shorter, and easier to write. **Python** is translated by an **interpreter** (or, for some implementations, a **compiler**).
    It is likely to be the right choice when solving a **complex problem** (for example, problems from [Advent of Code](https://adventofcode.com/)), or when **speed and filesize are concerns**
- &#x200b;
  - Intermediate code, most commonly **generated virtual bytecode** ('bytecode' from here on) is needed as it has a defined standard, and therefore can be distributed independent of the system it will be running on. Its place within a virtual machine (technically a **bytecode interpreter**) is to be translated and executed quickly and efficiently. As language bytecode is platform-independent, only the language's bytecode interpreter needs to be built specifically for a target platform.
  - &#x200b;
    1. Library routines are usually well-tested, and therefore are unlikely to contain serious bugs or vulnerabilities.
    2. Using libraries' routines in your code makes your code more readable, as less space is used defining helper functions (as imports usually take one line)
    3. Using libraries saves time during development as many libraries exist, meaning that many problems have already been solved and have functions available to use.
