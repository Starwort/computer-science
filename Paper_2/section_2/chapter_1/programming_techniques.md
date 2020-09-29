---
layout: default
title: Programming Techniques | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "fix indexes" ⓒ Starwort, 2020
has_title: false
---

# Programming Techniques

← [Back to Chapter 1](./index.html)

- recursion, how it can be used and compares to an iterative approach
- global and local variables
- modularity, functions and procedures, parameter passing by value and by reference

## Modularity

- When programming you use computational thinking
- **Decomposition** is an approach to attempt to break down a large problem into its component parts
  - Smaller problems are easier to understand and solve
    - Different programmers can work on separate smaller programs
    - Lightens the workload for programmers
    - Certain problems may be better suited to some programmers' skill sets than others
    - Debugging a program is much easier if a smaller component that is part of a bigger program is to blame
- These smaller program **modules** correspond to each sub-problem
  - e.g. an online ordering system could have modules for:
    - custom records
    - order processing
    - invoice production
    - stock control etc.
- It is likely that modules for these smaller jobs already exist and need customising for the scenario/bigger problem
- Depending on the programming language these blocks of code could be referred to as subroutines, procedures, functions, or methods

## Subroutines (functions and procedures)

- a **named** block of code
- performs a **specific task**
- is called by the main program
- can be either
  - **procedure**
    - carries out a set task
    - **never** returns a value
  - **function**
    - carries out a set task
    - **always** returns a value

## Local and global variables

- Large programs are written in modules
  - important to know if a certain variable is visible from a part of the code
  - potential of many programmers working on different modules
    - they may choose the same name for different data items which could cause conflicts
- The variable's **scope** is the extent of a program which is visible. Can be **global** or **local**.
- A global variable is declared (initialised) outside of the subroutine, and is available throughout the entire program's code
- A local variable is declared inside a subroutine and is only available to that subroutine
  - In some cases a subroutine may use a local variable that is the same name as a global variable. In this case the local variable within the subroutine takes precedence
- Using **local** variables makes a subroutine sel-contained and hides the details of how it works from a programmer using the subroutine
- Subroutines are **independent** of the calling program and changes to the main program will not affect the subroutines
- It is easier to maintain because the subroutine can be **tested** separately
  - Once it is working correctly then only the calling program needs to be tested if any changes are made.
  - Subroutines can be tested and documented separately and held in a subroutine library, maintaining the program should not require subroutines to be changed
- Using **global** variables can cause confusion and is considered quite bad programming practice
  - Global variables **will change the data throughout the program**, not just within the subprogram

## Parameter Passing

- Functions and procedures can accept values
  - There are several ways to pass the parameters to the subroutines
    - We have seen **by value** so far
    - Another way is **by reference**

### By value

- In some cases it's not intended for a function to change a variable in the main program
- An example could be an array holding student names and test marks. The array may be in alphabetical order but you want to output them in mark order
  - In his case you can call a subprogram and pass the data as a parameter **by value**
  - The subprogram will sort and output the data
  - The subprogram is working on a **copy** of the original data
  - Any **changes** to the data **are lost** when the function returns

### By reference

- In some cases the intention is to have a subprogram change the value of the variable(s)
  - An example could be a running total for a bill
  - This may be updated by various functions and the up-to-date value is always required in the main program, no matter what subprogram is accessing it
- This is similar to global variables but less dangerous
- The parameter could be passed **by reference**
  - This would mean that the function is being pointed to the actual **memory address** where the data is **stored**
    - Similar to address modes - if it is value or memory location
- The subprogram works directly with the original data and if it changes it, it stays changed.
- This is the way that Python handles parameters
