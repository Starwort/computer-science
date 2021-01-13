---
layout: default
title: Thinking Concurrently | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.1 "fix a bunch of bugs" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 5
---

<style>
    @counter-style question {
        prefix: "Q";
        suffix: ". ";
        system: extends decimal;
    }
    x-question > ol {
        list-style: question;
    }
    x-question > ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    x-question > ol > li {
        counter-increment: list-ctr;
    }
    x-question > ol > li:before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul, ul ul {
        list-style-type: circle;
    }
    ul {
        list-style-type: decimal;
    }
    ol ol, ul ol {
        list-style-type: lower-alpha !important;
    }
    ul ol ol, ol ol ol {
        list-style-type: lower-roman !important;
    }
</style>
# Thinking concurrently

<x-question>

1. A house may have a burglar alarm system which continually monitors the front door, back door, windows, room upstairs, and downstairs.

    Is this parallel or concurrent processing?

    - It is concurrent processing.

</x-question>

## Exercises

1. &#x200b;
    1. Distinguish between parallel processing and concurrent processing.
        - Both parallel and concurrent processing handle many tasks at once.
        - Parallel processing runs its tasks simultaneously, whereas concurrent shares the processing time between tasks without actually executing them simultaneously.
    2. A school runs a local area network linking computers throughout the school. Describe how concurrent processing can be achieved on the network.
        - Concurrent processing can be achieved by allocating processing time to each machine in turn (although with many parallel machines, parallel processing would most likely be easier)
    3. When a class of students all try and download a piece of software at the beginning of a class, performance is affected. Explain why.
        - The bandwidth on the local area network is too low, so most machines wait while other machines download, and these execute concurrently - only one computer can be downloading data at any one time
