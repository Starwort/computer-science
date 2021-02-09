---
layout: default
title: Booklet 1 | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./programming_practice/wb_2020_10_26
back_text: Back to Wb 2020 10 26
---

# Booklet 1

01. A processor contains a number of special registers.  
    Name and describe **three** buses used to convey information between the special registers.

    - What? When did we cover this? Data/Address/Control buses aren't used to convey information between registers...
02. A processor contains a number of special registers.  
    Explain the need for the following registers.

    01. Program Counter
        - The PC is needed to store the address of the next instruction to be read from memory in the fetch-decode-execute cycle
    02. Memory Address Register
        - The MAR is needed to store the address of the next read from memory, whether it is instruction or data
    03. Memory Data Register
        - The MDR is needed to store the last word (instruction or data) fetched from memory, for use by the processor
03. Processors use special registers.
    01. Explain why special registers are needed in addition to primary memory.
        - Primary memory is too slow to be read from constantly, so registers are used instead in order to run the program faster
