---
layout: default
title: Processor Architectures | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.0 "fix autodoc failing if it already deleted the folders" ⓒ Starwort, 2020
---

# Processor Architectures

← [Back to Chapter 1](./index.html)

## The stored program concept

- Instructions and data are stored in memory for the program to be executed
  - Fetch-Decode-Execute, millions of times per second
- E.G. game on disc being loaded onto a console:
  - Insert a disc (secondary storage)
  - Disc spins up, system loads content to RAM
  - Game plays - instructions executed and data loaded from RAM

## Addressable memory

- Memory
  - Made up of millions of addressable cells (with unique addresses)
  - Holds instructions and data of programs
  - CPU retrieves instructions and data from cells (with the data and address buses) and executes them
- Blocks of memory addresses allocated to different programs in a systematic way
  - Operating System
  - Application software
  - CPU can find instructions and data with fewer cyucles than if stored randomly
  - Addresses normally written in hex

## Von Neumann vs Harvard Architectures

- Architecture refers to the way something is built (such as the CPU)

### Von Neumann

- Instructions and data are stored in RAM and are moved in and out through the data bus

#### Bottleneck

- If instructions are to perform operations on data in memory:
  - data has to move across the data bus into the CPU
  - when the computation is done, the results travel back to memory across the same bus
- If the processor has just finished an instruction and is ready to perform the next, it may have to write the finished computation into memory (occupying the data bus) before it can fetch its next instruction
- Bottleneck has increased over time because processors have improved in speed but memory has not progressed as fast.
- Some techniques to reduce the impact of the bottle neck are to keep memory in cache to minimise data movement

```text
+---------+      +---------------+      +---------+
|  Input  | ___\ | CPU  [CU ALU] | ___\ | Output  |
| Devices |    / |  Memory Unit  |    / | Devices |
+---------+      +---------------+      +---------+
```

#### Typical use case

- Most general purpose computers use this architecture
- Some embedded systems use this
  - generally if control-functions only

### Harvard

- Separate buses are used for data and instructions
  - Linked to different memories - instruction memory and data memory
    - Instructions and data are handled more quickly as they do not share the same bus
    - Programs run faster / more efficiently
    - Able to run a program and access data independently and therefore simultaneously
    - Strict separation between data and code
- More complicated but removes the bottleneck that Von Neumann creates

```text
                           ALU
                            ^
                            v
Instruction Memory <-> Control Unit <-> Data Memory
                            ^
                            v
                        IO Devices
```

#### Typical use case

- Used on some embedded systems or microcontrollers
  - For real-time data
  - Instructions can often be held in read-only memory as they often do not need to be changed
  - Data memory requires read-write memory
  - Some systems have more instruction memory than data memory so the instruction addresses and buses are wid than data addresses and bus
- Used for Digital Signal Processing (DSP)
  - takes real-world signals like voice, audio, video, temperature, pressure, or position that have been digitised, and mathematically manipulate them
  - e.g. navigation systems, trafic lights, aircraft flight control systems and simulators

### Comparison

Von Neumann | Harvard
---: | ---:
Data and programs share the same memory | Instructions and data are held in separate memories |
One bus is used to transfer data and instructions | Parallel data and instructionbuses may be used
Programs can be optimised in size | Programs tend to be large

Modern high-performance CPU chips incorporate aspects of both Von Neumann and Harvard architectures

- RAM holds both data and instructions (Von Neumann)
- CPU cache divided into instruction cache and data cache (Harvard)
