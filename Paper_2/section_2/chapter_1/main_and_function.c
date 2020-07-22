---
layout: default
title: main_and_function | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

#define string char *
#define in_celsius C

typedef enum _CorF { C, F } CorF;

float fahrenheit_to_celsius(float fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
float celsius_to_fahrenheit(float celsius) {
    return (celsius * 9 / 5) + 32;
}
float temp_convert(float temperature, CorF c_or_f) {
    if (c_or_f == in_celsius) {
        return celsius_to_fahrenheit(temperature);
    } else {
        return fahrenheit_to_celsius(temperature);
    }
}

int main() {
    printf("Enter a temperature in Fahrenheit or Celsius\n>>> ");
    float user_temp;
    scanf("%f", &user_temp);
    printf("Celsius (C) or Fahrenheit (F)\n>>> ");
    char c_or_f_in;
    do {
        c_or_f_in = getchar() & ~0x20;
    } while (c_or_f_in == '\n');
    CorF c_or_f;
    if (c_or_f_in == 'C') {
        c_or_f = C;
    } else if (c_or_f_in == 'F') {
        c_or_f = F;
    } else {
        printf("'%c' is not 'C' or 'F'", c_or_f_in);
        exit(1);
    }
    float temp = temp_convert(user_temp, c_or_f);
    printf("%.4f°%c\n", temp, c_or_f_in);
    return 0;
}
