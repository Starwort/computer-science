---
layout: default
title: Character Sets | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "hopefully fix indexes" ⓒ Starwort, 2020
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

# Chapter 29

← [Back to Chapter 1](./index.html)

1. IEEE 1621 defines this as the power symbol; it is derived from IEC 60417-5007 (power-on symbol, line - derived from binary 1 representing 'on') and IEC 60417-5008 (power-off symbol, circle - derived from binary 0 representing 'off') - although IEC 60417-5009 designates this as the standby symbol and IEC 60417-5010 (line fully within a circle) represents a toggle between on and fully off states
2. As an ASCII or Unicode string. Null-terminated ASCII -> (hex) `43 61 73 00`
3. 12 bytes -> (hex) `4D 6F 75 73 65 00`

## Exercises

- ​
    - 0b0110010
    - 128
- ​
    - Unicode is encoded with more than one byte per character
    - ​
        1. Allows shorter representations for strings
        1. Allows fewer characters to be represented in strings
- 1TiB -> 2<sup>40</sup>B = 1,099,511,627,776B
    256MiB -> 256 × 2<sup>20</sup>B = 256 × 1,048,576B = 268,435,456B
    1,099,511,627,776B ÷ 268,435,456B = 4,096
    A 1TiB hard disk drive has 4,096 times the capacity than a 256MiB one
