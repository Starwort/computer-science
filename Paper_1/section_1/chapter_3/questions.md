---
layout: default
title: Questions | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.2 "🦀 dumb indenting is gone 🦀" ⓒ Starwort, 2020
---

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
    ul ol {
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

# Chapter 3

← [Back to Chapter 3](./index.html)

- Optical disc
- Prices and part names from: Chillblast
  1. SSDs
      1. Samsung 860 QVO SSD (4TiB): £463.50
      1. Seagate BarraCuda SSD (1TiB): £110.73
      1. Seagate BarraCuda SSD (500GiB): £59.41
      1. Samsung 860 EVO SSD (250GiB): £65.25
  1. HDDs
      1. Seagate BarraCuda 7200RPM Hard Disk (1TiB): £40.94
      1. Seagate BarraCuda 5900RPM Hard Disk (8TiB): £231.10
      1. Seagate IronWolf Pro 7200RPM NAS Hard Disk (4TiB): £179.41
      1. Seagate IronWolf Pro 7200RPM NAS Hard Disk (8TiB): £312.51
      1. Seagate IronWolf Pro 7200RPM NAS Hard Disk (16TiB): £734.99

## Exercises

- ​
  - Data is written by 'burning' the disc with a high-power laser, changing its chemical properties to make it less reflective; and is read by a lower-power laser that is testing how reflective the surface of the disc is
  - ​
    1. The disc could have been scratched while in storage, rendering the disc unreadable
    1. The disc could have been exposed to extreme light or heat, corrupting the data on it
- ​
  - Solid-state drives have no moving parts - where a hard disk drive has magnetic discs and read-write heads, the SSD has a circuit board with a series of floating gates on it, which trap electrons to measure an 'on' state. Solid-state drives also have no way of unsetting a single gate - an entire 'block' (roughly equivalent to a sector on a HDD) must be cleared at once - whereas the HDD can polarise any individual bit to either state.
  - ​
    1. Faster access
    1. Lower power usage
    1. Silent operation
    1. Highly portable and resistant to shock damage
