---
layout: default
title: sub_programs | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

#include <stdbool.h>
#include <stdio.h>

int main() {
    while (true) {
        printf("1. cm -> in\n2. in -> cm\n3. Quit\n>>> ");
        int input = getchar() - '0';
        switch (input) {
        case 1:
            double user_length;
            printf("\nEnter length in cm\n>>> ");
            scanf("%d", &user_length);
            user_length *= 0.393700787;
            printf("\n%.2d inches\n");
            break;
        case 2:
            double user_length;
            printf("\nEnter length in inches\n>>> ");
            scanf("%d", &user_length);
            user_length *= 2.54;
            printf("\n%.2d cm\n");
            break;
        case 3:
            return 0;
        default:
            printf("\nInvalid selection.\n");
        }
    }
}
