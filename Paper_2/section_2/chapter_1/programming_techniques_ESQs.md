---
layout: default
title: Programming Techniques ESQs | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_2/section_2/chapter_1
back_text: Back to Chapter 1
---

# 2.2.1 Programming Techniques

## Exam-Style Questions (37 marks)

1. Programming languages consist of three basic programming constructs. For each construct, state its name and give a working example.
   1. Name: Sequence  
      Example:

      ```py
      print("A random number is: 4")  # chosen by fair dice roll. guaranteed to be random.
      print("This is a second line of code")
      print("Is this a good enough example yet?")
      ```

   2. Name: Branching  
      Example:

      ```py
      import random

      if random.random() < 0.5:
          print("Success!")
      else:
          print("Failure")
      ```
   3. Name: Iteration  
      Example:

      ```py
      for i in range(10):
          print(f"A good example ({i + 1} / 10)")
      ```
2. This code uses a procedure:

   ```
   name = "Sam"
   addMessage(name)
   print(name)
   procedure addMessage(inText: byVal)
       inText = "Hello " + inText
   endprocedure
   ```

   Explain why this program outputs `Sam` rather than `Hello Sam`.

   The procedure `addMessage` takes `inText` by *value* rather than by *reference*, and therefore when it modifies `inText` it is modifying a copy rather than the original variable.
3. Given the following pseudocode:

   ```
   d = 5

   if ((a > b) OR (b >= c)) then
      if ((c < a) XOR (c < b)) then // Check to see if one or the other
                                    // comparisons are TRUE, but not both
         d = 15
      else
         d = 16
      endif
   else
      d = 14
   endif

   print(d)
   ```

   1. State the value of `d` if `a` = 42, `b` = 41, and `c` = 42
      - 16
   2. State the value of `d` if `a` = 42, `b` = 36, and `c` = 4
      - 16
   3. State the value of `d` if `a` = 42, `b` = 36, and `c` = 36
      - 15
   4. Give one potential value of b if `a` = 42, `c` = 44, and `d` = 14
      - 42
4. A procedure takes as input a number between 1 and 100. It calculates and outputs the square of each number starting from 1, to the number input. The square of a number is the result of multiplying a number by itself.

   ```
   procedure squares()
      do
         number - int(input("Enter a number between 1 and 100"))
      until number >= 1 AND number <= 100

      for x = 1 to number
         print(x * x)
      next x
   endprocedure
   ```

   The procedure uses one programming construct twice. State whether the construct that is used twice is iteration or branching.
   - Iteration
5. A software developer is creating a virtual pet game.  
   The user can choose the type of animal they would like as their pet, give it a name, and then they are responsible for caring for that animal. The user will need to feed, play with, and educate their pet.  
   The aim is to keep the animal alive and happy, for example if the animal is not fed over a set period of time then the pet will die.
   - The game tells the user how hungry or bored the animal is as a percentage (%) and the animal's intelligence is ranked as a number between 0 and 150 (inclusive).
   - Hunger and boredom increase by 1% with every tick of a timer.
   - When the feed option is selected, hunger is reduced to 0.
   - When the play option is selected, bored is reduced to 0.
   - When the read option is selected, the intelligence is increased by 0.6% of its current value.

   An example of the game is shown:

   ```
   What type of pet would you like? Fox or Elephant?
   > Fox
   What would you like to name your Fox?
   > Joanne
   Joanne's stats are
   Hunger: 56%
   Bored: 85%
   Intelligence: 20
   What would you like to do with your pet? Play, Read, or Feed?
   ```

   The developer needs to write procedures for the options play and read. Each of the options changes its corresponding value, and outputs the results to the screen.
   1. Write a procedure, using pseudocode, to reset `bored` and output the new value in an appropriate message

      ```
      procedure play()
         global bored, name
         bored = 0
         print(name + " is no longer Bored (" + bored + "%)")
      endprocedure
      ```

   2. Write a procedure, using pseudocode, to increase `intelligence` by 0.6% and output the new intelligence in an appropriate message

      ```
      procedure read()
         global intelligence, name
         intelligence = intelligence * 1.006
         print(name + " learnt! (Intelligence: " + intelligence + ")")
      endprocedure
      ```

6. A recursive function, `calculate`, is shown below:

   ```
   01 │  function calculate(num1, num2)
   02 │     if num1 == num2 then
   03 │        return num1
   04 │     elseif num1 < num2 then
   05 │        return calculate(num1, (num2-num1))
   06 │     else
   07 │        return calculate(num2, (num1-num2))
   08 │     endif
   09 │  endfunction
   ```

   1. Identify the lines where recursion is used

      Lines 5 and 7 use recursion
   2. Re-write the function so it uses iteration instead of recursion.

      ```
      01 │  function calculate(num1, num2)
      02 │      while num1 != num2 do
      03 │          if num1 < num2 then
      04 │              num2 = num2 - num1
      05 │          else
      06 │              tmp = num1 - num2
      07 │              num1 = num2
      08 │              num2 = tmp
      09 │          endif
      10 │      endwhile
      11 │      return num1
      12 │  endfunction
      ```
7. Consider the following algorithm, expressed in pseudocode:

   ```
   function S(A[0..N-1], value, low, high)
       if high < low then
           return error_message
       endif
       mid = (low + high) / 2
       if A[mid] > value then
           return S(A, value, low, mid-1)
       elseif A[mid] < value then
           return S(A, value, mid+1, high)
       else
           return mid
       endif
   endfunction
   ```

   1. Describe what is meant by recursion

      <!-- Recursion -->
      Recursion is where something is defined in terms of itself. In computational terms, this means that a function or procedure will compute part of a solution, and call itself to finish the solution; it will make a step towards the problem's base case, then call itself to make the rest of the journey there.
   2. Identify one example of where recursion occurs in this algorithm.

      When the found midpoint (`A[mid]`) is larger than `value`, the function `S` is called again to determine the result, with the value of the `high` parameter being replaced with `mid-1`, and all other parameters retaining their values.
8. A recursive function, `generate`, is shown.

   ```
   function generate(num1:byval)
       if num1 > 10 then
           return 10
       else
           return num1 + (generate(num1 + 1) DIV 2)
       endif
   endfunction
   ```

   The parameter, `num1`, is passed by value. Explain why the parameter was passed by value instead of by reference.

   `num1` is not modified during the execution of the function, so a reference is not necessary. Additionally, as `num1` is a primitive type (integer), there is no performance benefit to sharing a reference compared to copying the value.
9. A recursive function, `GCD`, is given in pseudocode.

   ```
   function GCD(num1, num2)
       if num2 == 0 then
           return num1
       else
           return GCD(num2, num1 MOD num2)
       endif
   endfunction
   ```

   The function uses branching.
   1. Identify the type of branching statement used in the function.

      If-else tree
   2. Explain the difference between branching and iteration.

      Branching allows code execution to take different paths based on a condition, whereas iteration allows code to be repeated multiple times based on a condition or counter (really this is just branching with a looping jump)
   3. Identify the two parameters in the function
      1. `num1`, an integer
      2. `num2`, an integer
   4. State whether the parameters should be passed by value, or by reference. Justify your answer.

      The parameters should be passed by value. This is because:
      - There is no need for the `GCD` function to modify its parameters for the caller
      - The parameters are primitives, meaning that there is no performance benefit to passing by reference instead of by value
      - The `GCD` function returns a value, that cannot be relevantly represented in either of its parameters
   5. Describe the arithmetic operation of `MOD`. Use an example in your answer.

      The modulo operator, `MOD` (`%` in many programming languages), calculates the remainder of integer division of its operands. Note that many programming languages choose to implement the remainder operator in place of the modulo operator; the difference is that modulo operations have a result the same as the divisor (`y` in `x % y`) and remainder operations have a result the same as the dividend (`x` in `x % y`). When `x` and `y` are both positive, these operations are equivalent.
