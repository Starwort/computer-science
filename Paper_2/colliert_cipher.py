---
layout: default
title: colliert_cipher | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

LATIN_RANGE_CAPITAL = 65, 90  # unicode ranges
LATIN_RANGE_LOWERCASE = 97, 122
LATIN_RANGE = 26
JAPANESE_RANGE_HIRA = 12353, 12436
JAPANESE_RANGE_KATA = 12449, 12532
JAPANESE_RANGE = 84

shift = None  # set shift to a number the user inputs
while shift is None:
    try:  # try getting input
        shift = int(input("Enter a shift value\n>>> "))
    except ValueError:  # it's not a number
        print("That isn't a whole number")

text = input("Enter the text to shift\n>>> ")  # get some text
out = ""  # set a sentry out

for letter in text:
    letter_as_int = ord(letter)
    # ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if LATIN_RANGE_CAPITAL[0] <= letter_as_int <= LATIN_RANGE_CAPITAL[1]:
        letter_as_int += (shift % LATIN_RANGE) - LATIN_RANGE_CAPITAL[0]
        letter_as_int %= LATIN_RANGE
        letter_as_int += LATIN_RANGE_CAPITAL[0]
    # abcdefghijklmnopqrstuvwxyz
    if LATIN_RANGE_LOWERCASE[0] <= letter_as_int <= LATIN_RANGE_LOWERCASE[1]:
        letter_as_int += (shift % LATIN_RANGE) - LATIN_RANGE_LOWERCASE[0]
        letter_as_int %= LATIN_RANGE
        letter_as_int += LATIN_RANGE_LOWERCASE[0]
    # there are 84 kana I'm not writing them all
    if JAPANESE_RANGE_HIRA[0] <= letter_as_int <= JAPANESE_RANGE_HIRA[1]:
        letter_as_int += (shift % JAPANESE_RANGE) - JAPANESE_RANGE_HIRA[0]
        letter_as_int %= JAPANESE_RANGE
        letter_as_int += JAPANESE_RANGE_HIRA[0]
    # there are 84 kana I'm not writing them all
    if JAPANESE_RANGE_KATA[0] <= letter_as_int <= JAPANESE_RANGE_KATA[1]:
        letter_as_int += (shift % JAPANESE_RANGE) - JAPANESE_RANGE_KATA[0]
        letter_as_int %= JAPANESE_RANGE
        letter_as_int += JAPANESE_RANGE_KATA[0]
    out += chr(letter_as_int)

# output
print(out)
