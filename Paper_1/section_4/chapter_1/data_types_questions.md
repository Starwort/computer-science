---
layout: default
title: Data Types Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.2 "fix links to documents" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 1
---

<style>
ol ol {
    list-style-type: lower-alpha !important;
}
ol ol ol {
    list-style-type: lower-roman !important;
}
</style>

# Data Types questions

01. &#x200b;
    01. Describe why two's complement may be preferable to sign and magnitude
        - Two's complement allows addition to work with negative numbers as if the numbers were positive, and subtraction to work by inverting the bits of the right number, adding the result to the left number, and adding one. Additionally, two's complement does not allow a representation of -0, meaning it gives an extra number, whereas sign and magnitude provides -0 and therefore has one fewer unique number
    02. Demonstrate subtraction in binary using 8-bit two's complement using the equivalent of the denary calculation 47-23. You must show all working.
        - 47 = 0x30 - 1 = 0x2F = 0b00101111  
            -23 = ~22 = ~0x16 = 0xE9 = 0b11101001  
            47 - 23 = 47 + -23

            0b00101111  
            0b11101001  
            ~~b111011110~~  
            0b00011000

            = 0x18 = 24
02. &#x200b;
    01. &#x200b;
        01. Change the denary number -89 into a two's complement, 8-bit binary number.
            - -89 = ~88 = ~0x58 = 0xA7 = 0b10100111
        02. Change the denary number -72 into a two's complement, 8-bit binary number.
            - -72 = ~71 = ~0x47 = 0xB8 = 0b10111000
    02. &#x200b;
        01. Add the two binary answers which you obtained, using 8-bit arithmetic.

            You must show your working.
            - 0b10100111  
                0b10111000  
                ~~b101000000~~  
                0b01011111

                = 0x5F = 95
        02. Explain why your answer to the addition sum is wrong
            - When adding the two negative numbers, integer overflow occurs and therefore the sum is off by 256 - the correct answer to the addition is 95 - 256 = -161
03. Express the denary number -43 in binary using 8-bit two's complement representation.

    Show your working.
    - -43 = ~42 = ~0x2A = 0xD5 = 0b11010101
04. Show a representation of denary -119 in 8-bits using:
    01. Sign and Magnitude
        - 0b11110111
    02. Two's Complement
        - 0b10001001
05. Convert the denary number -19 to an 8-bit number using:
    01. Two's complement representation.
        - 0b11101101
    02. Sign and Magnitude representation.
        - 0b10010011
06. Using two’s complement convert the denary number −43 into an 8 bit binary number. You must show your working.
    - -43 = ~42 = ~0x2A = 0xD5 = 0b11010101
07. Convert the denary number -52 into an 8-bit binary number using two’s complement.
    - -52 = ~51 = ~0x33 = 0xCC = 0b11001100
08. Convert the denary number -8 to:
    01. An 8-bit sign and magnitude binary number.
        - 0b10001000
    02. An 8-bit two's complement binary number.
        - 0b11111000
09. &#x200b;
    01. &#x200b;
        01. Convert the denary number 188 to an unsigned 8-bit binary number.
            - 0xBC = 0b10111100
        02. Convert the denary number 188 to hexadecimal.
            - 0xBC
    02. &#x200b;
        01. Convert the denary number -44 to an 8-bit binary number with sign and magnitude representation.
            - 0b10101100
        02. Convert the denary number -44 to an 8-bit binary number with two's complement representation.
            - 0b11010100
10. &#x200b;
    01. Variables in programs contain specific types of data.

        Complete the table below to suggest a suitable data type for each piece of data.

| Data    | Data Type |
|---------|-----------|
| 'H'     | Character |
| "Hello" | String    |
| 35      | Integer   |
| -2.625  | Real      |
| True    | Boolean   |
    02. Show the denary number 35 as an 8-bit unsigned binary number.
        - 0b00100011u
    03. The character 'A' in the ASCII character set is represented by the denary value 65. Write the binary representation for the ASCII character 'H'. Show your working.
        - 'H' = 'A' - 1 + 8 = 'A' + 7 = 72
11. &#x200b;
    01. A simple program is shown below.

        ```psc
        //Program to calculate number of times
        //a number goes into 100
        count = 0
        num = int(input("Enter a number"))
        while (count*num)<=100
            count=count+1
        endwhile
        count=count-1 //Take one off as gone over

        print(str(num) + " goes into 100 " + str(count) + " times.")
        ```

        State the most suitable data type of the variable **count**
        - int
    02. State the data type of the result of the expression `(count*num)<=100`
        - Boolean
    03. State the data type of the result of the expression `str(num) + " goes into 100 " + str(count) + " times."`
        - String
12. Convert the unsigned binary number 0b11110000u to:
    01. Denary:
        - 240
    02. Hexadecimal:
        - 0xF0
13. Below are extracts from the ASCII and EBCDIC character sets.

    ASCII

| Denary value | Character |
|--------------|-----------|
| 65           | A         |
| 66           | B         |
| 67           | C         |
| 68           | D         |
| 69           | E         |
| 70           | F         |
| 71           | G         |
| 72           | H         |
| 73           | I         |
| 74           | J         |
| 75           | K         |
| 76           | L         |
| 77           | M         |
| 78           | N         |
| 79           | O         |
| 80           | P         |
| 81           | Q         |
| 82           | R         |
| 83           | S         |
| 84           | T         |
| 85           | U         |
| 86           | V         |
| 87           | W         |
| 88           | X         |
| 89           | Y         |
| 90           | Z         |

    EBCDIC

| Denary value | Character |
|--------------|-----------|
| 193          | A         |
| 194          | B         |
| 195          | C         |
| 196          | D         |
| 197          | E         |
| 198          | F         |
| 199          | G         |
| 200          | H         |
| ...          | ...       |
| 209          | J         |
| 210          | K         |
| 211          | L         |
| 212          | M         |
| 213          | N         |
| 214          | O         |
| 215          | P         |
| 216          | Q         |
| 217          | R         |
| ...          | ...       |
| 226          | S         |
| 227          | T         |
| 228          | U         |
| 229          | V         |
| 230          | W         |
| 231          | X         |
| 232          | Y         |
| 233          | Z         |

    Explain, referring to ASCII and EBCDIC, what would happen if computers were to use different character sets when communicating.
    - If computers were to use different character sets when communicating, they would misunderstand each other. If computer A, using ASCII, attempts to transmit `Z` to computer B, using EBCDIC, it will arrive as a completely different character (character 90 EBCDIC, 103 characters before `A` in EBCDIC)
14. &#x200b;
    01. Convert the denary number 72 to an unsigned 8-bit integer.
        - 0b01001000u
    02. Convert the unsigned binary number 0b10000101u to denary.
        - 165
    03. Convert the denary number 104 to hexadecimal.
        - 0x68
    04. Given that computers store everything in binary, explain how they are able to represent text.
        - Computers are able to store text as a sequence of bytes, which can then be decoded with a character set such as UTF-8, UTF-16, EBCDIC, or ASCII
15. &#x200b;
    01. Demonstrate how the bytes below are added together. Show your working.

        0b01101010  
        0b00111111  
        ~~0b11111100~~  
        0b10101001
    02. Convert the binary number shown below to hexadecimal.
        - 0x370F
16. &#x200b;
    01. Show how the binary number 0b01011110 is represented in hexadecimal.
        - 0x5E
    02. Show how the hexadecimal number 0x9B is represented in denary.
        - 9 × 16 + 11 = 144 + 11 = 155
    03. Show how the denary number -87 is represented in sign and magnitude binary.
        - 0b10000000 | 0b1010111 = 0b11010111
