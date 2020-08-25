---
layout: default
title: Gpus | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.2.3 "parent folders in indexes *should* now display properly" ⓒ Starwort, 2020
---

# Graphics Processing Unit (GPU)

← [Back to Chapter 2](./index.html)

- All computers have basic graphics chips installed on their motherboard
  - These are fine for everyday use
- Video games require a lot of processing power
  - e.g. 3D graphics
- Specialist graphics card can be installed
- Graphics card includes a GPU
  - Designed to handle graphics and video much faster than the CPU itself
- if an application is making intense use of graphics or video, a GPU will improve performance considerably
- The CPU will send graphics-related tasks to the GPU
- Many graphics tasks can be run in parallel (simultaneously)
  - e.g. setting the colour of independent pixels on a screen
  - To take advantage of this, the GPU can issue a single instruction and act on many pixels at the same time
  - This is an example of ***Single Instruction Multiple Data*** processing

A GPU would be better suited to rendering a change in lighting for the surrounding objects when the torches are switched on

- The image is made up of a series of **pixels**
- Each pixel is a binary number representing the colour
- When the torch is turned on, the colour of the **pixels representing the torch need to all change** to the same colour
- All the surrounding pixels need to have their brightness changed by applying a **mathematical calculation to the binary number** representing each pixel
- All of these **calculations** can be done in **parallel**
- These sorts of **mass calculations** typically associated

# <marquee style="color:red">fill this in later</marquee>

## Uses of GPUs

- Graphics for gamers, designers, 3D animators
- SIMD - the ability to process the same instruction across multiple pieces of data at one time
  - scientists and engineers
  - modelling physical systems (e.g. weather)
  - audio processing
  - cryptographic mining
  - machine learning

Although installing a graphics card will lead to improvements in computer performance there are some issues that need to be considered

- Graphics cards can be **expensive**
- Graphics cards do not improve CPU performance on *all* tasks, only ones related to graphics and video
- Graphics cards use a lot of **power** and this might mean that the computer also needs to be fitted with a more powerful power supply. The larger power supply will add further cost.
- Because graphics cards use a lot of power they need a **cooling system**. Cooling fans are noisy but the cheapest option - so you may have to make your computer sound louder than it was before the graphics card was installed.
