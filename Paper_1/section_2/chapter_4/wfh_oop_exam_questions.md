---
layout: default
title: Wfh Oop Exam Questions | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.3 "hotfix for kramdown bugs" ⓒ Starwort, 2020
---

<style>
    ol ol {
        list-style-type: lower-alpha;
    }
    ol ol ol {
        list-style-type: lower-roman;
    }
</style>

# OOP Exam Style Questions

1. A taxi firm is investigating replacing its drivers with self-driving cars.
    1. Explain why the self-driving system will use a real-time operating system.
        - Self-driving systems need to process input as it is generated, so that they can optimise their route and avoid obstacles; due to their real-time processing of data, they fit the definition of a real-time system.
    2. The code for the self-driving system has been written using an object-oriented programming language.

        It recognises obstacles in the road and then classifies them.  
        The class for `Obstacle` is shown below.

        ```ocrpsc
        public class Obstacle
            private moving // bool
            private distance //real number in metres
            private direction // int between 1 and 360 (degrees)

            public procedure new(givenMoving, givenDistance, givenDirection)
                moving = givenMoving
                distance = givenDistance
                direction = givenDirection
            endprocedure

            public procedure updateDistance(givenDistance)
                distance = givenDistance
            endprocedure
        endclass
        ```

        1. Write a line of code to create an object called `bollard` of type `Obstacle` which is not moving and is 7.8 metres away in a direction of 8 degrees.
            - `bollard = new Obstacle(false, 7.8, 8)`
        2. Describe an example of encapsulation in the class definition code above.
            - `distance` is not modifiable directly, only through the class' own `updateDistance` method
        3. Describe the advantages of using encapsulation.
            - Encapsulation helps prevent a class from being modified in ways which could cause the program to crash or otherwise misbehave
    3. The self-driving program recognises people as a special type of obstacle and the class `Person` should inherit the methods and attributes of `Obstacle`. People are treated like other obstacles except:
        - When the `updateDistance` method is called, if the person is more than 2 metres away but is 5 metres (or less) away, the method `Controls.beepHorn()` is called.
        - When the person is 2 metres away (or closer), the method `Controls.applyBrakes()` is called as well as `Controls.beepHorn()`

        Complete the class `Person`.

        - ```ocrpsc
          class Person inherits Obstacle
              public procedure updateDistance(givenDistance)
                  if givenDistance <= 5 then
                      Controls.beepHorn()
                  endif
                  if givenDistance <= 2 then
                      Controls.applyBrakes()
                  endif
                  distance = givenDistance
              endprocedure
          endclass
          ```
    4. Give **one** advantage and **one** disadvantage to the customers of the taxi using self-driving cars rather than drivers.

        Advantage

        - The customer will likely have a more efficient route, and therefore a faster journey

        Disadvantage

        - The customer may have issues where the car goes to the wrong place, and with no driver to talk to would be unable to correct the destination efficiently
2. Livid Lizards is a computer game in which players get to fire lizards from a cannon to knock down walls. Players get to pick different types of lizards, each with qualities and special powers.

    The game is coded using an object-oriented language. Below is the code for the lizard class:

    ```ocrpsc
    class Lizard
        private speed
        private mass
        private size

        public procedure new(givenSpeed, givenMass, givenSize)
            speed = givenSpeed
            mass = givenMass
            size = givenSize
        endprocedure

        public function breakBlock(brick)
            if speed * mass > brick.getStrength() then
                speed = ((speed * mass) - brick.getStrength()) / mass
                return true
            else
                return false
            endif
        endfunction

        ...
    endclass
    ```

    1. Lizard is a class. Describe what is meant by a class.
        - A class is a data structure with methods and attributes used to model a real-world object.
    2. Identify an attribute in the Lizard class.
        - `speed`
    3. &#x200b;
        1. Describe what is meant by the term *inheritance*.
            - Inheritance is the process by which a class derives methods and attributes from its superclasses; all methods and attributes from the superclasses are copied into the class, generally with precedence given to the first class in the superclasses; i.e. if two classes define the same method, the first in the inheritance list will give its method to the class.
        2. Explain **one** way the game's developers might use inheritance for Livid Lizards.
            - Lizards with special powers could be derived from `Lizard`, inheriting its attributes and methods but being able to *override* methods for which a special behaviour is wanted.
