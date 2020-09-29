---
layout: default
title: LMC Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.2 "fix backlink text" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to LMC Questions
---

<style>
ol ol {
    list-style-type: lower-alpha;
}
ol ol ol {
    list-style-type: lower-roman;
}
ol ol ol ol {
    list-style-type: decimal;
}
li:empty {
   position: absolute !important;
   top: -9999px !important;
   left: -9999px !important;
}
</style>

# LMC Questions

1. A program written in the Little Man Computer instruction set is given below.

    ```LMC
            INP
            STA     num
    loop    LDA     total
            ADD     num
            STA     total
            LDA     count
            ADD     one
            STA     count
            SUB     num
            BRZ     end
            BRA     loop
    end     LDA     total
            OUT
            HLT
    one     DAT     1
    num     DAT     0
    count   DAT     0
    total   DAT     0
    ```

    1. State what the program outputs are for the following inputs.

        Input | Output
        :---: | :----:
        1     | 1
        2     | 4
        3     | 9
    2. State what the purpose of the program is.

        To square its input.
    3. Explain which registers are used and their values when the line `STA count` is **executed** and the accumulator is holding the value 9. The label `count` refers to memory location 16.

        The register in use is the Accumulator, which holds the value `9`. Also in use is mailbox¹ 16, the value of which is overwritten by the value held in the accumulator (`9`) during the execution of the statement.

        ¹ 'Mailbox' is the preferred term for locations in memory when using LMC.

    4. Whilst the line `STA count` is being executed, the CPU receives a signal from another process, requiring its attention.

        State the name for the signal received by the CPU.

        Interrupt
    5. The code uses direct addressing. Describe **one** other mode of addressing.

        One other mode of addressing is *in*direct addressing, wherein the value desired is at a location specified by the location specified in the instruction (this is typically known as a pointer).

        For example, if the instruction being processed is `JMP ($2A)`, then first the value in memory at offset 0x2A is read, then the result is used as the jump target; if the value at 0x2A is 0x45 then the `JMP` will be executed as if it were `JMP $45`.
