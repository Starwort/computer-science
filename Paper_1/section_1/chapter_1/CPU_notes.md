---
layout: default
title: CPU Notes | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_1/chapter_1
back_text: Back to Chapter 1
---

# CPU

## CPU components

- ALU (Arithmetic Logic Unit)
- CU (Control Unit)
- Registers:
  - PC (Program Counter)
  - MAR (Memory Address Register)
  - MDR (Memory Data Register)
  - Accumulator
  - CIR (Current Instruction Register)
- Buses:
  - Data Bus (bi-directional)
  - Address Bus (uni-directional)
  - Control Bus (bi-directional)

## Fetch-Decode-Execute cycle

- Instruction is fetched
    1. PC copied to MAR
    2. MDR loaded from MAR-held address in RAM
    3. PC increments to hold the address of the next instruction
    4. Contents of MDR copied to CIR
- Instruction is decoded
  - Split to opcode and operand
  - Opcode determines the instruction and what hardware/process to use to execute it
  - Operand holds either:
    - The address of the data to be used with the operation. Will be copied to the MAR
    - The actual data to be operated on. Will be copied to the MDR, and possibly to the accumulator or PC
- Instruction is executed
  - Processed - effects occur
  - Appropriate instruction (determined by opcode) is applied to the operand
    - e.g. opcode is ADD and operand is #7 - number 7 added to accumulator's held value
    - e.g. opcode is LDA and operand is $42 - contents address 0x42 loaded to accumulator
- Loop to beginning, millions of times per second

## System Clock

- The clock generates a series of signals (0 and 1, several billion times per second)
- Synchronises CPU operations (Control bus uses this)
- Each on edge is the start of a new cycle
- Measured in Hz
  - Modern CPU approx 2-4GHz
- Clock speed ∝ instruction speed

## № Cores

- A single core (one processor containing ALU, CU, and registers) can only process one instruction at once
- A multi-core processor has more than one core linked together in the same IC
  - Gives the potential for multiple instructions to be run in the same cycle
    - known as parallel processing
  - Not all programs are written to allow for parallel processing
  - Not all processes can be split evenly, some steps depend on others (sequential)
    - Therefore one core may have to wait for another core to complete the process to be able to run the next process

## Cache

- Inside the CPU
- Very expensive
- Very fast memory
  - But much smaller capacity than RAM
- Holds frequently used instructions and data
- When an instruction or data is fetched, it is copied to cache
  - If it is needed again soon after, it is read from cache ,which is closer to the CPU (has a lower latency) and is faster than RAM
  - If it gets full, the least recently used instructions and data get overwritten
- Different levels of cache
  - Level 1
    - extremely fast
    - very small
  - Level 2
    - fairly fast
    - medium capacity
  - Level 3
    - not all processors have this
    - slowest cache (but faster than RAM still)
    - largest cache capacity (but much lower than RAM still)
