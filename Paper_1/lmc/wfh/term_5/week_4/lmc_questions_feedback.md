---
layout: default
title: Lmc Questions Feedback | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.6 "fix name of root directory" ⓒ Starwort, 2020
---

<style>
ol ol {
    list-style-type: lower-alpha;
}
ol ol ol {
    list-style-type: lower-roman;
}
code, pre {
    font-family: "Source Code Pro";
}
</style>
# LMC questions following feedback

1. **What is the purpose of this code:**

    ```lmc
            INP
            STA times
    loop    LDA times
            SUB count
            BRZ end
            LDA count
            ADD one
            STA count
            OUT
            BRA loop
    end     HLT
    count   DAT 0
    times   DAT
    one     DAT 1
    ```

    This code counts from the inputted number to 1 (including both endpoints), printing out the value at each step
2. Write the assembly code in question 1 into a high-level language pseudocode

    ```psc
    for i of {input_int()..1} do
        print i
    end for
    ```
3. ?
    1. Below is part of a program written using the Little Man Computer instruction set. This section of code can exit by either jumping to the code labelled `pass` or `fail` depending on what value is in the accumulator when the code is run.

        ```lmc
        test    SUB ten
                BRZ pass
                BRP test
                BRA fail
        ten     DAT 10
        ```

        1. Explain what the line `ten     DAT 10` does.

            The line `ten DAT 10` creates a label and a value of 10 in the mailbox where the instruction is. It can be referenced by the label `ten` at other points in the program, and (unless explicitly modified) will have a value of 10
        2. Complete the table below determining whether the program branches to `pass` or `fail` given the following values in the accumulator when it is run.

            Starting value in accumulator | Target branch
            --- | ---
            29 | `fail`
            30 | `pass`
            31 | `fail`
    2. The complete program is shown below:

        ```lmc
                INP
        main    STA entry
                BRA test
        fail    LDA entry
                ADD one
                BRA main
        test    SUB ten
                BRZ pass
                BRP test
                BRA fail
        pass    LDA entry
                OUT
                HLT
        entry   DAT
        ten     DAT 10
        one     DAT 1
        ```

        1. Give **one** instruction in the program that, when executed, changes the value in the accumulator

            `INP`
        2. Give **one** instruction in the program that, when executed, changes the value in the program counter

            `BRA fail`
        3. State the value the code outputs for the input 18

            20
        4. State the value the code outputs for the input 37

            40
        5. Describe the purpose of the program.

            Rounds the number to the next multiple of 10; the equivalent of ceil(n / 10) * 10
4. A digital coffee making machine has a CPU that uses the Little Man Computer instruction set.
    1. ?
    2. Part of the coffee making machine's code asks the user to press a button to select strength. The code outputs 1 which will switch on a green light to indicate a valid selection or outputs 0 to indicate an invalid selection.

        The code is shown below:

        ```lmc
                INP
                STA entry
                LDA max
                SUB entry
                BRP accept
                LDA red
                BRA print
        accept  LDA green
        print   OUT
                HLT
        green   DAT 1
        red     DAT 0
        max     DAT 5
        entry   DAT
        ```

        **Fig. 1**

        1. Tick the appropriate boxes below to indicate which inputs will result in a green light (i.e. code outputs 1) and which with a red light.
        
            Input | Green light | Red light
            --: | :-: | :-:
            1 | √ |
            2 | √ |
            3 | √ |
            4 | √ |
            5 | √ |
            6 |   | √
            7 |   | √
            8 |   | √
            9 |   | √
        2. ?
        3. Write code in a high-level language or pseudocode that has the same functionality as the code in Fig. 1.

            `print(int(int(input()) <= 5))` (Python 3), if the entry is required after evaluation then `print(int((entry := int(input())) <= 5))` (Python 3.8+)
5. The program, as shown in Fig. 2 below, is written in assembly code using the Little Man Computer instruction set. It is *supposed* to take in two numbers and output the higher.

    ```lmc
            INP
            STA NUMA
            INP
            STA NUMB
            SUB NUMA
            BRP NOTA
            LDA NUMB
            BRA QUIT
    NOTA    LDA NUMA
    QUIT    OUT
            HLT
    NUMA    DAT
    NUMB    DAT
    ```

    1. ?
    2. The program does not work correctly. Describe what the program actually does, using the numbers 4 and 9 being entered as an example.

        The program performs the following operations (overall):

        - Store 4 to NUMA
        - Store 9 to NUMB
        - Calculate 9 - 4
        - Load and print 4

        The program is determining the lower of the two numbers and printing it; with inputs of 9 and 4 an output of 4 is given
    3. Explain how you would correct the program so it outputs the higher of the two numbers entered.

        Swap instructions 06 and 08 (leaving the labels in their positions), so that the program reads as follows:

        ```lmc
                INP
                STA NUMA
                INP
                STA NUMB
                SUB NUMA
                BRP NOTA
                LDA NUMA
                BRA QUIT
        NOTA    LDA NUMA
        QUIT    OUT
                HLT
        NUMA    DAT
        NUMB    DAT
        ```
    4. Programs can also be written in high level languages. In pseudocode write a procedural program that takes in two numbers and outputs the higher of them.

        ```psc
        procedure max(a, b) as
            if a > b do
                print a
            else do
                print b
            end if
        end procedure
        ```