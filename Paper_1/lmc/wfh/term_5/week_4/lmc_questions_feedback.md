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
2.  ```psc
    for i of {input_int()..1} do
        print i
    end for
    ```
3. &#x200b;
    1. &#x200b;
        1. The line `ten DAT 10` creates a label and a value of 10 in the mailbox where the instruction is. It can be referenced by the label `ten` at other points in the program, and (unless explicitly modified) will have a value of 10
        2. Starting value in accumulator | Target branch
            --- | ---
            29 | `fail`
            30 | `pass`
            31 | `fail`
    2. &#x200b;
        1. `INP`
        2. `BRA fail`
        3. 20
        4. 40
        5. Rounds the number to the next multiple of 10; the equivalent of ceil(n / 10) * 10
4. &#x200b;
    1. ?
    2. &#x200b;
        1. Input | Green light | Red light
            --- | --- | ---
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
        3. `print(int(int(input()) <= 5))` (Python 3), if the entry is required after evaluation then `print(int((entry := int(input())) <= 5))` (Python 3.8+)
5. &#x200b;
    1. ?
    2. The program performs the following operations (overall):
        - Store 4 to NUMA
        - Store 9 to NUMB
        - Calculate 9 - 4
        - Load and print 4

        The program is determining the lower of the two numbers and printing it; with inputs of 9 and 4 an output of 4 is given
    3. Swap instructions 06 and 08 (leaving the labels in their positions), so that the program reads as follows:

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
    4.  ```psc
        procedure max(a, b) as
            if a > b do
                print a
            else do
                print b
            end if
        end procedure
        ```