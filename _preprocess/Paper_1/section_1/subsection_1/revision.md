# 1.1.1 Structure and function of the processor - Revision

## Fetch-Decode-Execute cycle

Every instruction is fetched from memory,
decoded to see what must be
processed, then executed (the operation is
performed)

### Fetch phase

1. The address of the next instruction is copied from the PC to the MAR
2. The instruction held at that address is copied from RAM to the MDR
3. The PC increments to hold the address of the next instruction (when *branch* instructions execute, they directly set the PC)
4. The contents of the MDR are copied to the CIR

#### Instructions

The instructions fetched by the computer are represented in memory as binary digits.

E.G. `11101010` *(NOP in 6502 bytecode)*

To make it easier for programmers to understand, this can be written in hexadecimal (`EA`)

Each instruction is made up of two parts:

- The opcode (**op**eration **code**); what *action* to perform
- The operand; what *data* to perform the operation with

### Decode phase

1. The instruction in the CIR is decoded
   - It is split into opcode and operand
   - The opcode determines the instruction and the hardware required for its execution
   - The operand holds information about the value to be used; it will be one of:
     - A value (immediate)
     - An address (addressed)
     - An address of a pointer (indirect)
     - An address and an offset (indexed)

### Execute phase

The appropriate operation is performed on the operand

## Von Neumann vs Harvard

| Von Neumann                                                                                       | Harvard                                                                                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Used in conventional processors in PCs, servers, and embedded systems with only control functions | Used in DSP and embedded systems, mobile communication systems, audio, speech, and image processing systems |
| Data and instructions share the same memory                                                       | Data and instructions are held in separate memories                                                         |
| One bus is used to transfer both data and instructions                                            | Parallel data and instruction buses are used                                                                |
| Programs can be optimised in size                                                                 | Programs tend to be large                                                                                   |
<!-- ??? -->

## Practice

1. Describe what is meant by the term **register**
   - A register is an extremely fast, piece of temporary memory found within the CPU. It has only enough space to store a single word of data, however.
2. Outline the benefits and limitations of **parallel processing**
   - Benefits
     - Parallel processing allows programs the opportunity to split their tasks across CPUs
     - ...this means that they can run in a fraction of the time they would when processed serially.
   - Limitations
     - Programs must be written in a way which can utilise parallel processing in order to benefit from it
     - Some cycles will be lost to synchronisation and tasks which must be executed serially, so parallel processing does not simply divide the processing time of a program
3. State how each of the following components is used in the fetch phase of the fetch-decode-execute cycle:
   - Program Counter
     - The PC is read to determine the address of the next instruction. It is then incremented to point to the next instruction
   - Memory Address Register
     - The contents of the PC are written to the MAR, which is then read by the address bus to fetch the instruction from RAM
   - Memory Data Register
     - The MDR is populated by the data bus, with the instruction fetched from RAM
   - Current Instruction Register
     - The CIR is populated with the data from the MDR after the instruction has been fetched from RAM
   - Data Bus
     - The data bus is used to transmit the instruction from RAM, after it has been loaded from the address specified by the PC/MAR
   - Address Bus
     - The address bus is used to transmit the address of the next instruction to RAM
4. State **three** features of the von Neumann architecture
   1. Single memory for both instructions and data
   2. One bus used for transmission of data and instructions
   3. Registers are used for temporary data storage
5. Describe **three** factors that can affect the performance of the central processing unit
   1. Cache size

      The size of the cache affects the performance of the CPU; more cache will mean fewer cache misses, and therefore better performance
   2. Clock speed

      The speed of the clock will affect the performance of the CPU; increasing the clock speed will mean more fetch-decode-execute cycles happen per second, which will mean more processing is done in the same time.

      Note that increasing the clock speed too high can cause the components to fail, or read incorrectly
   3. Number of cores

      Having more cores in a CPU will allow it to split its jobs more effectively; each additional core allows the CPU to perform an additional process simultaneously to its other processes
