---
layout: default
title: Computational Method Features | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.3 "add tag to make &lt;base&gt; work" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Lessons
---

# Features that make a problem solvable by computational methods

- Solving a problem involves finding a way to move from a curent situation to a desired outcome.

  To be able to solve a problem using **computational methods**, the problem itself needs to have certain characteristics:
  - The problem needs to be **clearly defined** - this means that you should be able to identify the current situation, the end goal, the possible means of reaching the end goal, and the potential obstacles
  - The problem needs to be **computable** - you should consider what type of **calculations** are required, and if these are feasible within a reasonable time frame and processing capacity
  - The data requirements of the problem need to be exained, such as what types of data the problem involves, and the storage capacity required to keep this data
  - You should be able to determine if the problem can be approached using **decomposition** and **abstraction**, as these methods are key for tackling complex problems
- Once these features of the given problem are identified, you should be able to ...

## What do we mean by computable

- A problem is defined as being **computable** if there is **an algorithm that can solve every instance of it in a finite number of steps.**
- Some problems may be theoretically computable, but if they take millions of years to solve then they are, in a practical sense, insoluble

## Features

- Enumeration
  - designing an algorithm that performs an exhaustive search
    - uses all possible solutions until correct one is found
- Theoretical approach
  - Can it be broken down to pure theory?
    - if so, it can be represented by mathematics
- Simulation
  - Modelled in a computer
    - abstract (remove unnecessary detail)
    - understand behaviour model outcomes, suggest strategies, predict outputs
      - e.g. financial modelling, stock markets, weather predictions
  - e.g. queuing problems, e.g. how many checkouts are needed in a new supermarket, how many staff needed in a software support department.
    - What abstraction would be applied to this type of problem? (Which factors are relevant and which are irrelevant?)
      - Maximum/average number of items (people per till/shopping size or calls coming into the support staff)
      - Maximum/average time to process each item
      - All other factors are irrelevant at this time

## Problem recognition

- The first step in solving a problem is to perform **problem recognition**, meaning that you need to examine the description of a given scenario in order to:
  - Identify the nature and parameters of the problem
  - Undertake a thorough analysis of the current situation
  - Specify the problem requirements or success criteria
  - Identify whether the specifics of the problem allow it to be classified as a certain type of problem
- Before you work towards solving a problem, it is important to check that what you will be solving is the root cause of the current issue, if there are any other contributing factors that need to be taken into consideration, and if there are any different problems that need to be tackled first
- Is there a problem?
  - if so, what is it?
- What data do I need to acquire to understand it fully?
- What variables are in play which could alter this current state?
  - Change the algorithm for the traffic lights (e.g. change the timing)
- What processes to solve the current problem should you consider?
  - Add extra lanes
  - Add a by-pass
  - Change the lights algorithm

To what extent do you now think the problem is solvable?

I think it is solvable with better traffic light algorithms

## Strategies for problem solving

- Decomposition - strategy for solving large, complex problems
  - Break down the problem into smaller more manageable sub-problems
    - Depending on the size and complexity of the main problem, the sub-problems could be broken down further and further again (this is the **top-down approach**)
- Divide and Conquer
  - Reduces the size of a problem with each iteration
    - Best example: Binary search
      - Halves the size of the problem with each iteration (at each iteration we discard half of the data items)
    - Other problems tackled in this way may not necessarily reduce the problem so quickly
- Abstraction
  - Working out what factors in a solution are relevant and which can be ignored
  - In a simulation game that replicates a character having a job, and earning money, the character may have to travel to work
    - The entire journey would likely be much simpler than the real thing

## Question

A computer game is being designed to simulate cars on a race track. Abstraction has been used in the design.

Explain how abstraction may be applied in the creation of the game.

- The controls would most likely be massively simplified (e.g. accelerator, brake, and reverse simplified to forwards and backwards, gears likely removed)
- The models would likely be simplified
- The cars would likely not need refuelling - instead they have infinite fuel
