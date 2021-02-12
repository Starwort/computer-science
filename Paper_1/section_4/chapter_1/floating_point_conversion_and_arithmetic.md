---
layout: default
title: Floating Point Conversion And Arithmetic | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_4/chapter_1
back_text: Back to Chapter 1
---

# Floating-point conversion and arithmetic

Adding floating-point numbers

01. Normalise
02. Match the exponent
03. Add the mantissas

Using 8.4 two's-complement floating-point, add 01011101&#x200b;0111 and 01111000&#x200b;0101

A = 01011101&#x200b;0111  
B = 01111000&#x200b;0101 = 00011110&#x200b;0111  
A + B = (01011101 + 00011110)0111 = 01111011&#x200b;0111

## Exercises

01. Using 8.4 two's-complement floating-point, add 01100101&#x200b;0101 and 01011010&#x200b;0011

    A = 01100101&#x200b;0101  
    B = 01011010&#x200b;0011 = 00010110&#x200b;0101  
    A + B = (01100101 + 00010110)0101 = 01111011&#x200b;0101
02. Represent the number 55 in normalised two's-complement floating-point notation, using as few bits as possible

    55 = 0110111 = 0.110111 « 6 = 0110111&#x200b;0110 (7.4)
03. A computer represents numbers using normalised 6.4 two's-complement floating-point representation (why though, it's 10 bits).

    Add the following three numbers together and give the answer in the format described. You must show your working.

    ```
    010100  0010
    011000  0001
    100010  0010
    ------------ shift mantissas so exponent == 0010
    010100  0010
    001100  0010
    100010  0010
    ============ add mantissas
    000010  0010
    ------------ normalise
    010000  1111
    ```
