---
layout: default
title: Thinking Logically | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.3 "add tag to make &lt;base&gt; work" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 4
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
# Thinking logically

## Example Algorithm 1

```ocrpsc
count = 0
first = input('Please enter lower bound: ')
last = input('Please enter upper bound: ')
n = first
while n <= last
    if n mod 3 == 0 then
        count = count + 1
    endif
    n = n + 1
endwhile
print('Values divisible by 3 or 5: ' & count)
```

## Example Algorithm 2

```ocrpsc
function calculatePoints(score)
    points = 0
    for n = 0 to score.length - 1
        if score[n] == 'W' then
            points = points + 2
        else if score[n] == 'D' then
            points = points + 1
        end if
    next n
    return points
endfunction

// main program
myscore = ['W', 'W', 'D', 'W', 'W', 'W', 'W', 'L', 'D', 'D', 'W', 'L']
result = calculatePoints(myScore)
print('Points scored: ' & result)
```

## Example Algorithm 3

```ocrpsc
function playerStats(names, scores)
    lowerCount = []
    for j = 0 to names.length - 1
        count = 0
        for k = 0 to names.length - 1
            if scores[k] < scores[j] then
                count = count + 1
            endif
        next k
        lowerCount.append((names[j], count))
    next j
    return lowerCount
endfunction

// main program
names = ["Adam", "Ben", "Carol", "Davina", "Enid", "Fred", "George", "Henry", "Ian", "Jane", "Keith"]
scores = [14, 3, 21, 14, 15, 10, 20, 6, 10, 12, 10]
lowerCount = playerStats(names, scores)
for n = 0 to len(names)
    print(lowerCount[n][0], lowerCount[n][1])
next n
```

<x-question>

1. Suppose the user enters a lower bound of 0 and an upper bound of 15 in Example Algorithm 1. What answer would you expect? What will be output by the program?
    1. 14
    2. `Values divisible by 3 or 5: 14`
2. Suggest amendments to the algorithm so that it works correctly for any two positive integers entered by the user.
    - Confirm that both inputs are integers
    - If `last` < `first`, swap `last` and `first`
3. What is the expected output of Example Algorithm 2?
    - `Points scored: 17`
4. In the above Example Algorithm 3, the function `playerStats` returns a list of tuples. Each element of the tuple consist of a player’s name and an integer count as follows: `[(names[0], count[0]), (names[1], count[1]), ..., (names[10], count[10])]`

    The first line output in the main program is: `Adam 6`

    What are the second and third lines output? What is the function `playerStats` calculating?

    `j` | `count` | `k` | `scores[j]` | `scores[k]`
    :-: | :-----: | :-: | :---------: | :---------:
     0  |    0    |  0  |     14      |     14
     0  |    0    |  1  |     14      |      3
     0  |    1    |  2  |     14      |     21
     0  |    1    |  3  |     14      |     14
     0  |    1    |  4  |     14      |     15
     0  |    1    |  5  |     14      |     10
     0  |    2    |  6  |     14      |     20
     0  |    2    |  7  |     14      |      6
     0  |    3    |  8  |     14      |     10
     0  |    4    |  9  |     14      |     12
     0  |    5    | 10  |     14      |     10

    Line 2: `Ben 0`  
    Line 3: `Carol 10`

    The algorithm is calculating how many players each player beat in points.

</x-question>

## Exercises

- A plumber charges for parts and labour. Labour is charged at £20 per half hour (rounded up). The time spent is recorded as a four-digit integer, so that (for example):
    - 0120 means that 1 hour and 20 minutes labour is to be charged
    - 0350 means that 3 horus and 50 minutes labour is to be charged

    A variable called `duration` holds the four-digit integer representing time spent.

    1. Write a subroutine to calculate and return the labour charge.

        - ```py
          def labour_charge(duration: int) -> int:
              hours, minutes = divmod(duration, 100)
              slots = hours * 2 + int(minutes / 30 + 0.999)
              return slots * 20
          ```

    2. Identify **two** local variables used in your subroutine.
        - `hours`, `minutes`
    3. Show how the subroutine will be called using a parameter.
        - `labour_charge(120)` (returns `60`, meaning £60)
- In a vote for which of three plays produced at a theatre was most enjoyable, the total votes cast for each of plays 'A', 'B', and 'C' have been stored in an array totalVotes.

    The following algorithm has been written to output the play with the most votes.

    ```ocrpsc
    1 | if totalVotes[0] > totalVotes[1] then
    2 |     if totalVotes[0] > totalVotes[2] then
    3 |         print('Play A')
    4 |     end if
    5 | else if totalVotes[1] > totalVotes[2] then
    6 |     print('Play B')
    7 | else
    8 |     print('Play C')
    9 | end if
    ```

    1. In the event that an equal number of votes is cast for each play,
        1. Which lines of the algorithm will be executed?
            - 1, 5, 7, 8(, 9)
        2. What will be printed?
            - `Play C`
    2. Write an algorithm so that the result is always printed correctly in the event of two or three plays are all receiving the same number of votes (for example it will need to output 'Plays A and C are equal top preference' if A and C are the same)

        ```py
        max_votes = totalVotes[0]
        choices = ["A"]
        if totalVotes[1] > max_votes:
            max_votes = totalVotes[1]
            choices = ["B"]
        elif totalVotes[1] == max_votes:
            choices.append("B")
        if totalVotes[2] > max_votes:
            max_votes = totalVotes[2]
            choices = ["C"]
        elif totalVotes[2] == max_votes:
            choices.append("C")
        if len(choices) == 1:
            print(f"Play {choices[0]} with {max_votes} votes")
        else:
            print(f"Plays {' and '.join(choices)} with {max_votes} votes each")
        ```
