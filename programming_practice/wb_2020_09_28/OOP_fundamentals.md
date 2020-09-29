---
layout: default
title: OOP Fundamentals | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.2 "fix backlink text" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to OOP Fundamentals
---

# Fundamentals of OOP

← [Back to W/B 2020/09/28](./index.html)

## Questions

01. Define the term programming paradigm
    - The way in which one programs; declarative vs procedural, functional vs object-oriented.
02. Explain the difference between object-oriented programming and procedural programming
    - Procedural programming (a subset of imperative programming) is where code is written in direct sequence; step by step: 'Make a sandwich, then a cup of tea.'  
    Some languages that the procedural paradigm are C, C++, Java, Python, and Rust.

        This differs from declarative programming, which specifies the required goal but does not require a specific algorithm: 'Make lunch.' Because its algorithms are determined by the language implementation, any code written is automatically future-proof.  
        Some examples of declarative languages include Prolog, Lisp, Haskell, and Miranda.
    - Object-oriented programming is where the code written models real life objects as data types with attributes and methods.
    Each data type (or 'class') should represent a single kind real-world object, be it physical or conceptual ('colour' is a conceptual object which could have its own class, as is 'message'). Class inheritance (where attributes and methods are propagated to subclasses) is generally used, but not universally (see Rust).  
        Some languages which use the object-oriented programming paradigm are C#, C++, Java, Python (optionally), and Rust (although without inheritance and therefore non-hierarchically).

        This differs from functional programming, which is composed without classes (although sometimes *structures* may be used to hold related pieces of information). Some examples of functional programming languages are Haskell, Python (optionally), JavaScript (older specifications, or optionally), or C.
03. Explain the difference between a class and an object
    - A class is the 'factory' for objects; the class defines the attributes and methods that its instances have, and the objects are pieces of data which each represent an instance of the class.
    - Non-static methods cannot be called from the class, only from objects/class instances. This is because they require an instance for context.
04. Identify a situation where a static method may be used.
    - Where an instance of the class is not required, but the process is related to the class: For example, generating a random sale price does not need a specific object to run, but it may be useful to a class designed to predict the sale prices and could therefore be a static method for that class.
05. Using pseudocode, write a class with relevant attributes and methods to represent a digital clock object. It should represent the time as a 24-hour clock, and include methods to create a new object, set the time manually, display the time, and update the time at the end of each minute.

    - ```psc
      class Clock {
          private int time
          Clock(int time) {
              self.time = time
          }
          void set_time(int value) {
              self.time = value
          }
          void display() {
              print(time DIV 60 + ':' + time % 60)
          }
          void minute_end() {
              self.time++
          }
      }
      ```

06. Link the code fom the programming task: [programming_task.py](https://github.com/Starwort/computer-science/blob/master/_preprocess/programming_practice/wb_2020_09_28/programming_task.py) [(download)](./programming_task.py)