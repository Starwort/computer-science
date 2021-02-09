---
layout: default
title: Rational Numbers | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.3 "add tag to make &lt;base&gt; work" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 1
---

# Rational numbers

## Reminder: Two's complement

| Decimal | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|--------:|-----:|---:|---:|---:|--:|--:|--:|--:|
|      47 |    0 |  0 |  1 |  0 | 1 | 1 | 1 | 1 |
|      23 |    0 |  0 |  0 |  1 | 0 | 1 | 1 | 1 |
|     -23 |    1 |  1 |  1 |  0 | 1 | 0 | 0 | 1 |

<br>

| Decimal | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|--------:|-----:|---:|---:|---:|--:|--:|--:|--:|
|   Carry |    1 |  1 |  0 |  1 | 1 | 1 | 1 |   |
|      47 |    0 |  0 |  1 |  0 | 1 | 1 | 1 | 1 |
|     -23 |    1 |  1 |  1 |  0 | 1 | 0 | 0 | 1 |
|      24 |    0 |  0 |  0 |  1 | 1 | 0 | 0 | 0 |

## Fixed-point

Encode 19.25 and -19.25 in 11-bit (8.3) two's-complement fixed-point notation

| Decimal | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | ½ | ¼ | ⅛ |
|--------:|-----:|---:|---:|---:|--:|--:|--:|--:|--:|--:|--:|
|   19.25 |    0 |  0 |  0 |  1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
|  -19.25 |    1 |  1 |  1 |  0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |

Fixed-point numbers have simple arithmetic but limited range and precision; Floating-point numbers require more complex calculations but have much much greater range and precision

## Floating-point

\- our specification has non-IEEE-754-compliant floating-point numbers -

## Activities

Using 8.3 two's-complement fixed-point notation, encode 3.625

| Decimal | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | ½ | ¼ | ⅛ |
|--------:|-----:|---:|---:|---:|--:|--:|--:|--:|--:|--:|--:|
|  3.5625 |    0 |  0 |  0 |  0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 |

Using 5e4 two's-complement floating-point notation, encode 1.625 and -3.25

| Decimal | -1 | ½ | ¼ | ⅛ | ¹̷₁₆ | Exponent | -8 | 4 | 2 | 1 |
|--------:|---:|--:|--:|--:|----:|---------:|---:|--:|--:|--:|
|   1.625 |  0 | 1 | 1 | 0 |   1 |          |  0 | 0 | 0 | 1 |
|  -3.250 |  1 | 0 | 0 | 1 |   1 |          |  0 | 0 | 1 | 0 |

Using 4e4 two's-complement floating-point numbers, decode 01010110 and 01001110

| Mantissa | -1 | ½ | ¼ | ⅛ | Exponent | -8 | 4 | 2 | 1 | Decimal |
|---------:|---:|--:|--:|--:|---------:|---:|--:|--:|--:|--------:|
|    0.625 |  0 | 1 | 0 | 1 |        6 |  0 | 1 | 1 | 0 |  40.000 |
|    0.500 |  0 | 1 | 0 | 0 |       -2 |  1 | 1 | 1 | 0 |   0.125 |

## Normalisation

What are the advantages of normalisation?

The advantages of normalising floating-point numbers are that it ensures there is a single canonical representation of any representable number, and any normalised floating-point number is guaranteed to have the highest precision possible

P, Q, and R are 7e5 two's-complement floating-point binary numbers.

P = 101100110001, Q = 110100110011

State which of P and Q is normalised. Give a reason for your answer.

- Q is not normalised.
- Its mantissa (1101001) is equal to -0.359375. This is outside the range [-1, -0.5) (and its mantissa is greater than -16) and therefore the number is not normalised

The binary number R is **not** normalised. Write R in normalised form. You must show your working.

R = 000110100101

- Mantissa = 0001101 = 0.203125
  - 0.203125 not in [0.5, 1)
  - 0.203125 × 2 = 0.40625
  - 0.40625 not in [0.5, 1)
  - 0.203125 × 4 = 0.8125
  - 0.8125 in [0.5, 1)
  - Mantissa = 0.8125 = 0110100
- Exponent = 00101 = 5
  - Mantissa was multiplied by 4, so subtract 4
  - Exponent = 1 = 00001
- R = 011010000001

Using 5e4 two's-complement floating-point representation, normalise 000110010 and 111000110. Show your working.

- Mantissa = 00011 = 0.1875
  - 0.1875 not in [0.5, 1)
  - 0.1875 × 2 = 0.375
  - 0.375 not in [0.5, 1)
  - 0.1875 × 4 = 0.75
  - 0.75 in [0.5, 1)
  - Mantissa = 0.75 = 01100
- Exponent = 0010 = 2
  - Mantissa was multiplied by 4, so subtract 4
  - Exponent = -2 = 1110
- Normalised number: 011001110
- Mantissa = 11100 = -0.25
  - -0.25 not in [-1, -0.5)
  - -0.25 × 2 = -0.5
  - -0.5 not in [-1, -0.5)
  - -0.25 × 4 = -1
  - -1 in [-1, -0.5)
  - Mantissa = -1 = 10000
- Exponent = 1110 = -2
  - Mantissa was multiplied by 4, so subtract 4
  - Exponent = -6 = 1010
- Normalised number: 100001010

Show the denary number -5.25 in two's-complement floating-point binary form, representing the mantissa and exponent in as few bits as possible

- 101.01 = 0.10101 × 2<sup>11</sup>
- 01010111 (6.2)
