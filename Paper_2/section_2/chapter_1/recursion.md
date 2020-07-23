---
layout: default
title: Recursion | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.3 "fix colour of missing files" ⓒ Starwort, 2020
---

# Recursion

← [Back to Chapter 1](./index.html)

[More on Recursion](./recursion.html)

## What is recursion

- Recursion
- Where a subroutine calls **itself**
  - The act of a subroutine calling itself is known as recursion
- A recursive subroutine has **three** essential characteristics
  - A stopping condition (**base case**) in order to avoid **endless recursion**
    - When the stopping condition is met the routine stops calling itself and will start to unwind
  - For any input values other than the stopping condition the subroutine must **call itself**
  - The stopping condition must be reached after a **finite** number of calls (otherwise it will never end)

## How it can be used and how it compares to an iterative approach

- Recursion is a useful technique if the algorithm itself is essentially recursive
- Some algorithms can be written with **recursion or iteration**
  - Recursive routines are usually much shorter - but can be more difficult to trace
  - If the recursive routine is called a very large number of times before reaching the stopping condition, the program may smash the system stack, or overflow its return stack
  - Recursion **creates new variables each time it is called**, whilst iteration **reuses the same variables**. Therefore the recursive method could **use more memory**

## Example recursive algorithm

### Binary search

```py
def search(list, value, low, high):
    if high < low:
        return error
    mid = (low + high) // 2
    if list[mid] > value:
        return search(list, value, low, mid-1)
    elif list[mid] < value:
        return search(list, value, mid+1, high)
    else:
        return mid
```

## Example algorithm using iteration and then recursion

### Factorial number

- This is the product of all positive integers less than or equal to n (represented as `n!`)

#### Iterative

```py
def factorial_iterative(n):
    answer = 1
    for count in range(1, n+1):
        answer *= count
    return answer
```

#### Recursive

```py
def factorial_recursive(n):
    if n == 0:
        return 1
    else:
        return n * factorial_recursive(n-1)
```

## Final notes

- Recursion is less efficient in terms of memory
  - For each recursive call, the system must remember the return address in order to continue execution properly
  - It also must remember the values of all the variables as they are local to the function
  - This is done using the stack
  - If the recursive calls go too deep before terminating, you can **overflow the stack buffer** or **smash the stack**

[There was a video for me to watch here, but I couldn't load it]

- Generally recursion should be avoided
  - However in some cases it is the best - or even **only** - way to solve a problem
    - E.G. tree traversal algorithms, or flood fill in painting programs (although [a DFS can be performed iteratively](https://github.com/Starwort/advent-of-code-2019/blob/master/day20.py#L218-L243))

## Exam Style Questions

1. A recursive function, `generate`, is shown.

  ```psc
  function generate(num1:byVal)
      if num1 > 10 then
          return 10
      else
          return num1 + (generate(num1 + 1) DIV 2)
      end if
  end function
  ```

  Trace the algorithm to show the value returned when generate(7) is called. Show each step of your working

  > ```trace
  > generate(7)
  >   Return 7 + (generate(8) DIV 2)
  >   generate(8)
  >     Return 8 + (generate(9) DIV 2)
  >     generate(9)
  >       Return 9 + (generate(10) DIV 2)
  >       generate(10)
  >         Return 10 + (generate(11) DIV 2)
  >         generate(11)
  >           Return 10
  >         Return 10 + (10 DIV 2)
  >         Return 15
  >       Return 9 + (15 DIV 2)
  >       Return 9 + 7
  >       Return 16
  >     Return 8 + (16 DIV 2)
  >     Return 16
  >   Return 7 + (16 DIV 2)
  >   Return 15
  > ```

  The parameter `num1` is passed by value.
  Explain why the parameter was passed by value instead of by reference

  > If the value is sent by reference, calling `generate(num1 + 1)` will increment num1 for all callers including itself and therefore it would not produce the correct result

  Parameters can be used to reduce the use of global variables.  
  Compare the use of parameters to global variables in recursive functions

  > Global variables are accessible by all functions and procedures - including recursive functions. Recursive functions would all have access to the same global variables (which is rather memory-unsafe) and therefore all changes they make to them are propagated through the call stack - which is almost always unwanted
  >
  > Parameters are accessible only by the function to which they belong (and, in languages where it is syntactically valid, functions they define) - and they are therefore more memory safe when passed by value. When passed by reference, it is more obvious when a variable can be changed as it is specified as such in the function's signature. Changes made to parameters passed by value are not propagated outside the subroutine in any way (unless returned)
  >
  > Using global variables would likely result in requiring a redesign of the algorithm to account for the value held changing, and would increase memory usage as the memory used by parameters could be reallocated - but globals would not be; however the parameters would use more memory overall

  A student named Jason writes a recursive algorithm. The recursive algorithm uses more memory than if Jason had written it as an iterative algorithm.

  Explain why the recursive algorithm uses more memory than the iterative algorithm.

  > Each recursive call stores the current state on the stack - values of local variables and the return address whereas iteration reuses the same variables and does not perform subroutine jumps.

## Student Activities

### Programming techniques

Explain the algorithm for flood fill

> Flood fill takes a point, marks it (for a painting program this is changing its colour), and then for each point orthogonally connected to it, calls itself. If the colour at its point is not the colour being changed (this also occurs for points that were already changed), it returns. This results in all connected tiles being changed.

#### Iterative countdown

```py
def countdown_iter(n):
    while n >= 0:
        print(n)
        n -= 1

countdown_iter(10)
```

What it does: prints a countdown from 10 to 0

#### Recursive countdown

```py
def countdown_recur(n):
    if n < 0:
        return
    print(n)
    countdown_recur(n - 1)

countdown_iter(10)
```
