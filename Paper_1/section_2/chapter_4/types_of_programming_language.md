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

### Exercises

1. A high-level language states what is required but not how to do it. The statements do not have to be in a specific order. Identify the type of language described.

   Declarative
2. State one typical use for this type of language and give one reason for your choice

   Database lookup - SQL is a declarative language that is commonly used to specify the result of the search, while allowing the database engine to optimise however it pleases.
3. Some high-level languages are object-oriented. Describe three features of an object-oriented language.
   1. Object-oriented languages use classes and objects to abstract away behaviours. These can be used to reduce the complexity of functions and increase readability, when using appropriately named classes and methods
   2. Encapsulation, or data hiding, is used by object-oriented languages; this ensures that each class maintains its own internal state, and other classes interact with them only by sending messages through that class' methods
   3. Polymorphism, a form of dynamic dispatch, is also very common in object-oriented languages. It is used to dispatch different methods under the same name, depending on the type of an object.
4. The program, as shown below, is written in assembly code using the [Little Man Computer](https://starwort.github.io/lmc) instruction set. It is supposed to take in two numbers and output the higher.

   ```
           INP
           STA     NUMA
           INP
           STA     NUMB
           SUB     NUMA
           BRP     NOTA
           LDA     NUMB
           BRA     QUIT
   NOTA    LDA     NUMA
   QUIT    OUT
           HLT

   NUMA    DAT
   NUMB    DAT
   ```

   Programs can also be written in high-level languages. In pseudocode write a procedural program that takes in two numbers and outputs the higher of them.

   ```
   INPUT INT a
   INPUT INT b
   IF a > b THEN
      OUTPUT $a
   ELSE
      OUTPUT $b
   END IF
   ```

5. A procedural programming language may use procedures. Explain the term procedural programming language.

   A procedural programming language is one in which instructions are written in the order the computer is expected to execute them. For example, a procedural programming language may tell the computer to make a sandwich by:
   - placing a slice of bread on a plate
   - spreading butter across the face of the slice
   - placing/spreading, as appropriate, the filling on top of the buttered bread
   - buttering an additional slice of bread
   - placing it on top of the rest of the sandwich, buttered face down

   The computer would then be expected to perform these actions in the order they are written to produce the expected output.
6. The same variable name may be used in more than one procedure in a program. Explain how a variable named result may be used in different procedures without causing errors.

   Most programming languages have a concept of *variable scope*. This means that a variable within one scope is contained entirely within that scope and cannot affect other scopes.

   For example, each procedure has its own scope, and variables defined within that scope are inaccessible outside that scope; and the name is free to be rebound without affecting that procedure.
7. Explain parameter passing.

   Parameter passing is where a function or procedure is called, and values are given to the subroutine to determine how it executes. Subroutines can take any number of parameters, of any types they like, and these parameters are locally bound names which take values from the caller.

   Variable names are not relevant when passing parameters; their contents are treated as values, which are passed to the function and then rebound to the names provided in the function signature.

   The names specified in the function signature are defined in the scope of the function; i.e. they do not leak scope to outside the function.

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
