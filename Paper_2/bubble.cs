---
layout: default
title: bubble | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

using System;
using System.Collections.Generic;
using System.Linq;
class MainClass {
    static int[] BubbleSort(List<int> toSort) {
        int[] toSortArray = toSort.ToArray();
        int length = toSortArray.Length;
        bool swapped = true;
        int sorted = 0;
        while (swapped) {
            sorted++;
            swapped = false;
            for (int i = 0; i < length - sorted; i++) {
                if (toSortArray[i] > toSortArray[i+1]) {
                    swapped = true;
                    int tmp = toSortArray[i];
                    toSortArray[i] = toSortArray[i+1];
                    toSortArray[i+1] = tmp;
                }
            }
        }
        return toSortArray;
    }
    static int[] BubbleSort(int[] toSortArray) {
        // int[] toSortArray = toSort.ToArray();
        int length = toSortArray.Length;
        bool swapped = true;
        int sorted = 0;
        while (swapped) {
            sorted++;
            swapped = false;
            for (int i = 0; i < length - sorted; i++) {
                if (toSortArray[i] > toSortArray[i+1]) {
                    swapped = true;
                    int tmp = toSortArray[i];
                    toSortArray[i] = toSortArray[i+1];
                    toSortArray[i+1] = tmp;
                }
            }
        }
        return toSortArray;
    }
    static void Main() {
        int[] initialList = new int[100000];
        for (int i = 0; i < initialList.Length; i++){
            initialList[i] = i;
        }
        Random random = new Random();
        int[] testList = initialList.OrderBy(x => random.NextDouble()).ToArray();
        Console.WriteLine("List is [{} .. {}] ({} elements)", string.Join(", ",new int[]{testList[0], testList[1]}), string.Join(", ",new int[]{testList[testList.Length-2], testList[testList.Length-1]}), testList.Length);
    }
}
