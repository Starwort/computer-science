---
layout: default
title: Data_structures | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.2 "🦀 dumb indenting is gone 🦀" ⓒ Starwort, 2020
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

# Chapter 33

← [Back to Chapter 2](./index.html)

Example 1

```py
bird_name = ["robin", "blackbird", "pigeon", "magpie", "bluetit"]
bird_count = [0 for i in range(8)]
bird = input("Enter bird name (x to end): ")
while bird != "x":
    bird_found = False
    num_species = len(bird_name)
    for count in range(num_species):
        if bird == bird_name[count]:
            bird_found = True
            birds_observed = int(input("Number observed: "))
            bird_count[count] += birds_observed
    if bird_found == False:
        print("Bird species not in array")
    bird = input("Enter bird name (x to end): ")
for count in range(8):
    print(bird_name[count], bird_count[count])
```

1. 10 [√]
2. `print("Staff name: ", staff[s])` [√]

Example 2

```py
staff = ["Anna", "Bob", "Carol"]
quarter_sales = [
    [100, 110, 120, 110],
    [350, 355, 360, 360],
    [200, 210, 220, 220],
]
for s in range(3):
    annual_sales = 0
    print("Staff name:", staff[s])
    for q in range(4):
        print("Quarter", q, quarter_sales[s][q])
        annual_sales += quarter_sales[s][q]
    print("Annual sales:", annual_sales)
```

## Exercises

- &#x200b;
  - It does not halt when it has found the bird. [√]

  - ```py
      count = 0
      while count < 8 and bird_found == False:
          if bird == bird_name[count]:
              bird_found = True
              birds_observed = int(input("Number of birds observed: "))
              bird_count[count] += birds_observed
    ```

    [√]

- ```py
  mean = sum(weight) / len(weight)
  print(mean)
  underweight = [baby for baby in weight if baby < mean - 500]
  print(len(underweight), sum(underweight) / len(underweight))
  ```

  [√]

- |  &#x200b; | Test 1 | Test 2 | Test 3 |
  | --------: | -----: | -----: | -----: |
  | Student 1 |      8 |      8 |      4 |
  | Student 2 |      8 |      7 |      7 |
  | Student 3 |      7 |      5 |      7 |
  | Student 4 |     10 |      7 |      2 |
  | Student 5 |      9 |      8 |      0 |

  [√]

  ```py
  total = 0
  ctr = 0
  for student in range(5):
      stotal = 0
      sctr = 0
      for test in range(3):
          score = int(
              input("Student " + str(student + 1) + " test " + str(test + 1) + ": ")
          )
          stotal += score
          sctr += 1
          mark[student][test] = score
      print("Student average:", stotal / sctr)
      total += stotal
      ctr += sctr
  print("Class average:", total / ctr)
  ```

  [√]

- Finds and outputs the location of the treasure

  ```py
  import random

  for row in range(10):
      for col in range(10):
          grid[row][col] = 0
  xcoord = random.randint(0, 9)
  ycoord = random.randint(0, 9)
  grid[y][x] = 1
  ```

  [√]
