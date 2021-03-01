# Applications generation

## Translator questions

1. A software team use a prebuilt library to create a Graphical User Interface

   Give *two* advantages to the team of using a library
   1. The team does not need to write all the boilerplate code to create the layout
   2. The GUI is likely to be more stable as the implementation of the widgets has been left to widely trusted
2. Why would a company or individual programmer *not* want to distribute the source code when they sell a software package?
   > If the code is being sold, the programmer would want to avoid potential customers simply taking the source and compiling it, rather than buying the software from the programmer
3. What further entries to the symbol table will the lexical analyser make on encountering the statement:

   ```
   circumference = 2 * pi * radius
   ```

   Tokenise the statement, then add the entries to the table

   | Symbol          | Type       |
   | --------------- | ---------- |
   | `circumference` | Identifier |

   | Token           | Type                   |
   | --------------- | ---------------------- |
   | `circumference` | Identifier             |
   | `=`             | Operator \| `assign`   |
   | `2`             | Constant \| `int`      |
   | `*`             | Operator \| `multiply` |
   | `pi`            | Identifier             |
   | `*`             | Operator \| `multiply` |
   | `radius`        | Identifier             |

4. Give 2 examples of semantic errors:
   1. Type mismatch
   2. Undeclared identifier
5. Explain the terms 'source code' and 'object code', and how the two differ

   > *Source code* is the code the human has written, which dictates the main logic of the program. *Source code* is not executable directly by the computer; it must first be translated into object code  
   > *Object code* is code that is executable by the computer; it is the result of compilation of source code
