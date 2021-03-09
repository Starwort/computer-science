# LMC practice

1. The table below shows the Little Man Computer instruction set.

   | Mnemonic         | Instruction                      |
   | ---------------- | -------------------------------- |
   | `ADD`            | Add                              |
   | `SUB`            | Subtract                         |
   | `STA`            | **Store Accumulator**            |
   | `LDA`            | Load Accumulator                 |
   | **`BRA`**        | Branch Always                    |
   | `BRZ`            | **Branch when Zero**             |
   | `BRP`            | **Branch when Positive or zero** |
   | `INP`            | Input                            |
   | `OUT`            | Output                           |
   | **`HLT`\|`COB`** | End program                      |

   Complete the table above to show the missing mnemonics and instructions.
2. Write a program using the Little Man Computer instruction set that will allow a user to input two numbers and then output the larger of the two numbers. The program should loop continuously.

   ```
           INP
           STA     a
           INP
           STA     b
           SUB     a
           BRP     out_b
           LDA     a
           OUT
           BRA     0
   out_b   LDA     b
           OUT
           BRA     0
   a       DAT
   b       DAT
   ```

   Also:

   ```
           DAT     901
           DAT     312
           DAT     901
           DAT     313
           DAT     212
           DAT     809
           DAT     512
           DAT     902
           DAT     600
           DAT     513
           DAT     902
           DAT     600
   ```

   Try it online: [https://starwort.github.io/lmc/](https://starwort.github.io/lmc/)
3. Below is part of a program written using the Little Man Computer instruction set. This section of code can exit by either jumping to the code labelled pass or fail depending on what value is in the accumulator when the code is run.

   ```
   test    SUB     ten
           BRZ     pass
           BRP     test
           BRA     fail
   ten     DAT     10
   ```
   1. Explain what the following line does:

      ```
      ten     DAT     10
      ```

      - The line declares a named mailbox 'ten' which is initialised to the literal value 10.
   2. Complete the table below determining whether the program branches to pass or fail given the following values in the Accumulator when it is run.

      | Starting value in Accumulator | Jump Target |
      | ----------------------------- | ----------- |
      | 29                            | `fail`      |
      | 30                            | `pass`      |
      | 31                            | `fail`      |

   3. The complete program is shown below:

      ```
              INP
      main    STA     entry
              BRA     test
      fail    LDA     entry
              ADD     one
              BRA     main

      test    SUB     ten
              BRZ     pass
              BRP     test
              BRA     fail

      pass    LDA     entry
              OUT
              HLT

      entry   DAT
      ten     DAT     10
      one     DAT     1
      ```

      1. Give one instruction in the program that, when executed, changes the value in the Accumulator.
         - `INP`
      2. Give one instruction in the program that, when executed, changes the value in the Program Counter.
         - `BRA test`
      3. State the value the code outputs for the input 18.
         - 20
      4. State the value the code outputs for the input 37.
         - 40
      5. Describe the purpose of the program.
         - Round the input to the next multiple of 10.
