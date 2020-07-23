---
layout: default
title: Operating Systems | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.0 "collapsible folders (probably)" ⓒ Starwort, 2020
---

<!-- 2343432205 -->
<style>
    :not(ul) + ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    :not(ul) + ol > li {
        counter-increment: list-ctr;
    }
    :not(ul) + ol > li::before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul {
        list-style-type: lower-alpha;
    }
    ol ul ul {
        list-style-type: lower-roman;
    }
    ul ol, ol ol {
        list-style-type: circle;
    }
    ul {
        list-style-type: decimal;
    }
    ul ul {
        list-style-type: lower-alpha;
    }
    ul ul ul {
        list-style-type: lower-roman;
    }
</style>

# Chapter 7

← [Back to Chapter 1](./index.html)

1. Multitasking is the discipline of running multiple tasks, bit by bit, such that it seems as if they're running in parallel - this could be in lockstep, or shared by an algorithm giving more time to some processes than others. It is not the same as multiprocessing, where multiple tasks are run simultaneously by different cores.
2. Yes. Installing more RAM would cause my computer to not boot as it is already at boot maximum (the CPU cannot handle more RAM; if it could, it would increase its ability to handle high load as it would reduce swapping)

## Exercises

- &#x200b;
  - &#x200b;
      1. Check if there are unhandled interrupts to be handled
      2. If there are, use the highest priority interrupt
      3. Disable lower priority interrupts
      4. Suspend execution ot the current process
      5. Copy the PC and all registers to the system stack
      6. Use the Interrupt Service Routine to handle the interrupt
      7. Copy back the PC and registers
  - &#x200b;
      1. Break memory into pages, pages are allocated to processes, pages are fixed size to make swapping easier, and programs are allocated a virtual address space which gets mapped onto its physical address space (its pages)
      2. Virtual memory can be used when physical memory is low. Pages of seldom-used memory are copied into secondary storage, freeing up the memory so that other pages may be stored there. When a page in virtual memory is needed, it is swapped back in (and the page it replaces is swapped out) and then it can be used
- &#x200b;
  - &#x200b;
    - First come first serve scheduling can be highly inefficient as a long task will delay all subsequent tasks until its completion, which could leave a short task stuck behind it for many cycles
    - Round-robin scheduling could be more efficient as it gives every process equal processor time, without any process waiting too long for its share; it gives each process, in turn, processor time (e.g. 100 cycles), then switches to the next process and gives it the same processor time - any finished process is removed from the rota
    - Scheduling is necessary to ensure all processes run togther while seeming parallel; this ensures the user doesn't lose confidence in the system's processes while another is being executed and allows multiple tasks to be performed without bottlenecking performance
  - Memory management is necessary to ensure that processes cannot interfere with one another, and allows extension of memory through virtual memory. It also allows for programs to be stored in disjoint locations without needing exorbitant numbers of calculations
  - Paging is the process by which RAM is split into many sections of addresses. These can be arranged to give a virtal address space that is continuous, even if the physical addresses are disjoint; and they allow for disallowing access by other programs (they cannot perform read/write operations on pages they don't own)
- &#x200b;
  - &#x200b;
    - An interrupt is a signal sent by the computer's hardware (including peripherals) that needs to suspend the current process so that it may be handled - it could be something critical (e.g. power loss) or something non-critical (e.g. IO operation is finished) - but either way it should be handled before resuming the current program
    - An area of memory that holds the data being sent to the output device to compensate for the speed difference between the output device and the CPU - usually communication is managed by a dedicated chip
  - &#x200b;
    - The printer buffer holds the data being sent to the printer while the print job is happening; it is there to compensate for the CPU being much faster than the printer it is communicating with. As the printer needs data it will be transferred out of the buffer
    - The interrupt tells the system it needs more data or that it is finished with the operation.

# Chapter 8

1. We can't, the school's filter prevents it from loading.
    1. Switches (lots of them)
    2. Display panels (lots of them too)
    3. Some levers (including the flight sticks)

## Exercises

- &#x200b;
    1. Multiple-touch response (e.g. zooming)
    2. Sliding notification panel (that drops down to cover the screen)
    3. Large buttons (covering significant portions of the screen)
    4. Swiping gestures (e.g. panning)
- A personal computer's operating system would have a memory manager - which deals with how memory is allocated to each process, a process manager - which deals with CPU sharing and scheduling, a storage manager - which deals with disk IO, an IO manager - which manages IO to peripherals, and an interrupt manager - which handles system interrupts. A car's SatNav system, however, may not need a memory manager - as it has only one job it can be statically mapped; it may not need a process manager - as only the satellite navigation would need to be running; it would likely need a storage manager, as maps would be read from the disk (and written there when they're downloaded); it may need an IO manager - to handle display/speaker output, and touch/keyboard input; and it definitely would also need an interrupt manager - for example if the car runs low on power it may shut off the navigation system.
