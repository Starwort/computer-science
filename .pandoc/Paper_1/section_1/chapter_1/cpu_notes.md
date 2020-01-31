# System Clock

- The clock generates a series of signals (0 and 1, several billion times per second)
- Synchronises CPU operations (Control bus uses this)
- Each on edge is the start of a new cycle
- Measured in Hz
    - Modern CPU approx 2-4GHz
- Clock speed ∝ instruction speed

# № Cores

- A single core (one processor containing ALU, CU, and registers) can only process one instruction at once
- A multi-core processor has more than one core linked together in the same IC
    - Gives the potential for multiple instructions to be run in the same cycle
        - known as parallel processing
    - Not all programs are written to allow for parallel processing
    - Not all processes can be split evenly, some steps depend on others (sequential)
        - Therefore one core may have to wait for another core to complete the process to be able to run the next process

# Cache

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
