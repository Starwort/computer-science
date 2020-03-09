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
