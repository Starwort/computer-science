---
layout: default
title: Inheritance And Abstraction | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.1 "fix a bunch of bugs" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2020 10 05
---

<style>
ol ol {
    list-style-type: lower-alpha;
}
</style>

# Inheritance and Abstraction

01. Define the term **inheritance**

    - Inheritance is where a class uses the interface of another class (its attributes and methods), and optionally (re-)defines the behaviour of those methods. It may also add attributes or methods of its own.

02. Draw a diagram to show inheritance relationships between at least three things.

    - ```text
            Computer
            /   |   \
      Desktop Phone Laptop
              /   \
      Smartphone Flip-phone
      ```

03. Use the pseudocode below to answer the questions that follow:

    ```psc
    class Guitar
        private noOfStrings = 6

        public procedure holdFret()
            ...
        endprocedure

        public procedure strum()
            ...
        endprocedure
    endclass

    class ElectricGuitar inherits Guitar
        public procedure adjustVolume()
            ...
        endprocedure
    endclass
    ```

    01. Identify the parent class and the child class.

        - Parent: `Guitar`
        - Child: `ElectricGuitar`

    02. Identify the attributes and methods that `ElectricGuitar` inherits from `Guitar`

        - `noOfStrings`
        - `holdFret()`
        - `strum()`

04. Describe what happens when a class calls a super method.

    - When a class calls a 'super method', it calls the original method on its superclass (ignoring any overriden methods that the subclass may have), performing the original routine on the subclass object.

05. Explain the issue caused by allowing multiple inheritance.

    - The method resolution order is not immediately clear to inexperienced programmers.
    - Two classes with conflicting interfaces could be inherited from
06. Define the term *abstract method*, and explain when you might use one.
    - An abstract method is one for which the signature, but no implementation, is defined. Classes containing abstract methods may not be instantiated.
    - Abstract methods may be used when defining a base class that other classes will inherit from, but may not be instantiated, or when defining an interface for use by other classes

## Code task

[Source](https://github.com/Starwort/computer-science/blob/master/_preprocess/programming_practice/wb_2020_10_05/inheritance_and_abstraction_task.py), [download](./inheritance_and_abstraction_task.py)
