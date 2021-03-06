---
layout: default
title: Pipelining | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_1/subsection_1
back_text: Back to Subsection 1
---

# Pipelining

- Von Neumann is a serial / sequential architecutre
  - While an instruction is being fetched, e.g. the ALU is idle
  - But each part of the Fetch-Decode-Execute cycle uses a different part of the CPU
- Pipelining is a way to make the Fetch-Decode-Execute cycle more efficient
  - For example, the architecture allows the next instruction to be fetched at the same time as the ALU is performing a calculation
  - Pipelining is sometimes divided into an instruction pipeline and an arithmetic pipeline
