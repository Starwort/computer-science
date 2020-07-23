---
layout: default
title: Cisc And Risc | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.5 "dumb gitignore handling is gone?" ⓒ Starwort, 2020
---

# CISC vs RISC processors

← [Back to Chapter 2](./index.html)

## Instruction Set

- The machine code instructions that a particular computer can execute
- We have seen these
  - In machine code a typical instruction holds an opcode in the first few bits and an operand in the rest of the word.
- An 8-bit instruction set could be:
  - 4-bit opcode
  - 4-bit operand

## CISC

- Complex Instruction Set Computer
- Older architecture used by early generations of computer
- Large instruction set
  - used to accomplish tasks in as few lines of assembly as possible
  - processor able to understand sub-tasks that make up an instruction
    - e.g. multiply $A by $B and store in $A
      - load each value to a separate general purpose register (similar to accumulator)
      - perform multiplication
      - store result back into $A
  - complex instructions are built into the machine's hardware
  - combines load/store instructions with the instructions that carry out the calculations

<u>Modern CISC defined by the presence of memory manipulation in arithmetic processes, rather than its number of instructions</u>

### Advantages

- Compiler has very little work to translate high level language into machine code
- Code is relatively short therefore little RAM is required to store the instructions

### Disadvantages

- Many specialised instructions built into the hardware
  - Difficult to build
- Only ~20% used on a regular basis

## RISC

- More modern architecture
- Simple instructions
  - Each takes one clock cycle
  - Therefore multiplication takes several instructions, several cycles, and a loop

### Advantages

- Smaller instruction set therefore much simpler circuitry
  - so cheaper to manufactore (fewer transistors)
- Less power needed
- Less cooling needed to be built-in
- Each instruction takes the same amount of time (one clock cycle) therefore pipelining is possible (meaning to execute it could be as fast as the single CISC instruction)

### Disadvantages

- Compiler has to do more work to translate high level code into machine code
- More RAM is required to store the machine code instructions

## Wikipedia, on CISC vs RISC

> A PDP-10, a PDP-8, an Intel 80386, an Intel 4004, a Motorola 68000, a System z mainframe, a Burroughs B5000, a VAX, a Zilog Z80000, and a MOS Technology 6502 all vary wildly in the number, sizes, and formats of instructions, the number, types, and sizes of registers, and the available data types. Some have hardware support for operations like scanning for a substring, arbitrary-precision BCD arithmetic, or transcendental functions, while others have only 8-bit addition and subtraction. But they are all in the CISC category because they have "load-operate" instructions that load and/or store memory contents within the same instructions that perform the actual calculations. For instance, the PDP-8, having only 8 fixed-length instructions and no microcode at all, is a CISC because of how the instructions work, PowerPC, which has over 230 instructions (more than some VAXes), and complex internals like register renaming and a reorder buffer, is a RISC, while Minimal CISC has 8 instructions, but is clearly a CISC because it combines memory access and computation in the same instructions.

## A summary of CISC vs RISC

| | CISC | RISC
--- | --- | ---
Instructions | Includes a full, rich instruction set | Contains only the most frequently used instructions (i.e. a reduced instruction set)
Physical size / hardware | Contains more instructions than RISC, thus more complex hardware. <br>CISC CPUs tend to be larger in physical size | Contains fewer transistors than CISC - simpler hardware. <br>RISC CPUs are smaller in size than CISC CPUs
Speed | Takes more cycles per instruction so slower than RISC (multi-clock) | Takes one cycle per instruction, so faster than CISC (single-clock)
Energy consumption | Uses more transistors so consumes more power.<br> Requires a fan and/or heat sink | Uses fewer transistors so consumes less power, doesn't get so hot.
Coding | Can use less memory as a single instruction can do a complex task | Can use more memory as more instructions need to be stored for a complex task and more sentries are used
Cost | More transistors so costs more to produce than a RISC CPU | Fewer transistors so costs less than a CISC CPU
Used in | Desktop PCs, Laptops | Smartphones, tablets
Examples: | Intel processor | ARM processor
