---
layout: default
title: Types Of Programming Language | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_2/chapter_4
back_text: Back to Chapter 4
---

# Types of Programming Language

## Programming paradigms

### What is a paradigm?

- A paradigm is a standard, perspective, or set of ideas. A paradigm is a way of looking at something
- The word paradigm comes up a lot in the academic, scientific, and business worlds.

### The need for and characteristics of a variety of programming paradigms

We can apply different paradigms to how we solve a problem

There are two broad categories

- Imperative
  - These are languages used to write a list of instructions to solve a problem where the programmer defines *how* the problem should be solved
  - Imperative programming languages can be split into more specific paradigms
    - Procedural
      - Used for a wide range of software development as it is very simple to implement. However, it is not possible to solve all kinds of problems with procedural languages or it may be inefficient to do so
      - In procedural programming, programs are broken into key blocks called procedures and functions
      - Structured programming is a popular subsection of procedural programming in which the control flow is given by four main programming structures
        - where instructions are given in sequence
    - Object-oriented
      - OOP is built on entities called objects formed from classes, which have certain attributes and methods
      - OOP focuses on making programs that are reusable and easy to update and maintain and make it easy for teams of developers to work together
      - E.G. Java, Delphi, Python
      - The four main principles of the OOP paradigm are encapsulation, abstraction, inheritance, and polymorphism
        - Encapsulation: The state of an object is private, and other objects can only interact with the object's public methods
        - Abstraction: The complexities of how the object works are hidden
        - Inheritance: subclasses can inherit properties and methods from one or more parent classes
- Declarative
  - These languages are used by the programmer to define the problem to be solved rather than how to solve the problem
  - We tell the computer what results we want but we don't have to give the instructions how.
  - Unlike imperative languages that describe how to solve a problem, declarative languages define what should be achieved by the program
    - What the programmer does not know (and doesn't need to know) is how the code *works*
    - The programmer only needs to define what they *want* to know
  - Declarative programming languages can also be split into more specific paradigms:
    - Logic programming
      - A program is expressed as a set of facts (things that are always true) and rules (things that are true if particular facts are true)
    - Functional programming
      - No mutable data structures, rather it makes use of structures like mathematical expressions, where the same input will always result in the same output
      - Functions can call other functions and use the output of one function as the input for another
      - A description of the solution to a problem is built up through a collection of functions
      - E.G. Haskell, Python
        - Data structures in functional programming languages being immutable makes these languages ideal for processing Big Data (to ensure data integrity)

Many programming languages are multi-paradigm

Python, for example, is multi-paradigm with procedural, OOP, or functional techniques  
Java, however, is exclusively OOP

## Low-level languages

The lowest-level languages are:

- Machine code, which directly represents the instructions (the contents of program memory) as a sequence of numbers
- Assembly language, where the machine instructions are represented by mnemonics and memory addresses can be given symbolic labels
  - Each assembly instruction represents a single machine code instruction
  - Programs written in assembly can be much longer than high-level equivalents
  - Assembly code uses mnemonics (e.g. LDA, STA, BRZ) rather than a binary sequence
  - Each family of processors has its own instruction sets available
    - A program written for one instruction set will usually not work on a different instruction set

## Modes of addressing memory

In machine code, there are different addressing modes that can be specified as part of the opcode of an instruction. The addressing mode specifies the way in which the operand will be interpreted

| Mode      | Explanation                                                                                                                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct    | The operand gives the address which holds the value upon which the instruction is to be performed. This is used in LMC                                                                                                                                     |
| Immediate | The operant is the literal value upon which the instruction is to be performed                                                                                                                                                                             |
| Indirect  | The operand gives the address of the address of the value                                                                                                                                                                                                  |
| Indexed   | An index register is used, which stores a certain value. The address of the operand is determined by adding the operand to the index register. This is necessary to add an offset in order to access data stored contiguously in memory such as in arrays. |
