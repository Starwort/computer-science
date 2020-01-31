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
