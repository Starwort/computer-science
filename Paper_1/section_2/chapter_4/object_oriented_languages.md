---
layout: default
title: Object Oriented Languages | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_2/chapter_4
back_text: Back to Chapter 4
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
    ul ol, ol ol {
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

# Chapter 58

1. &#x200b;
    - &#x200b;
        1. Number of legs
        2. Colour of paws
        3. Colour of eyes
        4. Age
        5. Name
    - &#x200b;
        1. Shortest side length
        2. Longest side length
    - &#x200b;
        1. Start date
        2. End date
        3. Accomodation price per night
        4. Owner

2. ```psc
    // how dare you use 3-space indentation
    class Radio
        // instance variables
        private volume
        private station
        private switch

        public procedure new(aVolume, aStation, aSwitch)
            volume = aVolume
            station = aStation
            switch = aSwitch
        endprocedure

        public procedure setVolume(aVolume)
            volume = aVolume
        endprocedure
    endclass
    ```

3. ```psc
    robertsRadio = new Radio(0.3, 88.2, false)
    philipsRadio = new Radio(0.6, 37.4, true)
    ```

4. `squeak`

5. ```psc
    class Rodent inherits Animal
        private colour
        public procedure new(aName, aPosition, aSize)
            super.new(aName, aPosition)
            // shame on the book for getting this wrong!
            size = aSize
        endprocedure
    endclass
    ```

6. `tom.position` increases by 3 and `jerry.position` increases by 2

## Exercises

- &#x200b;
  - &#x200b;
    1. Member
        1. JuniorMember
        2. SeniorMember

  - ```psc
      class Member
          private memberNumber
          private firstname
          private surname
          private tel

          public procedure new(aMemberNumber, aFirstname, aSurname, aTel)
              memberNumber = aMemberNumber
              firstname = aFirstname
              surname = aSurname
              tel = aTel
          endprocedure
      endclass
      ```

  - **Encapsulation** is the independence of an object's methods and attributes from all other objects of its class.
  - &#x200b;
    - **Instantiation** of an object is where the object is created, with a set of attribute values unique that instance. Only a specific instance of a class can read/write to the attributes of that instance
    - `member = new Member("A456", "John", "Bell", "07981 345987")`
- &#x200b;
  - &#x200b;
    1. Crawlers
       1. Spiders
       2. Bugs
  - &#x200b;
    - `type`
    - `spin_web`
- &#x200b;
  - The practice of having a programming language interpret an object differently depending on its class, via subclassing and method overriding
  - &#x200b;
    - Assuming the procedure call is implied:

      > Birds can fly
      > Seabirds can fly and swim

      Otherwise, nothing.
    - `bird1` is an instance of `Bird`. Therefore it uses `Bird`'s `move` procedure - and prints `Birds can fly`.

      `bird2` is an instance of `Seabird`. `Seabird` inherits `move` from `Bird`, but then **overrides** it with its own `move` method, which prints `Seabirds can fly and swim`.
