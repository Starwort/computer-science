---
layout: default
title: Object Oriented Programming | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.1.2 "tentative fix for kramdown weirdness" ⓒ Starwort, 2020
---

# Object-Oriented Programming Notes and Tasks

← [Back to Chapter 4](./index.html)

An **object** has attributes and methods.

**Attribute**: a dot-accessible label on an object that points to a piece of data  
**Method**: a function or procedure attached to a class that operates on an instance of the class  
**Class**: a data structure consisting of attributes, and (optionally) methods

```ocrpsc
class Monster
    private poisonous
    private strength
    private name

    public procedure new(given_poisonous, given_strength, given_name)
        poisonous = given_poisonous
        strength = given_strength
        name = given_name
    endprocedure

    public procedure eat()
        print(name + " eats a hero. Mmmmmm, delicious!")
    endprocedure

    public procedure sleep()
        print("Snore, snore, snore")
    endprocedure

    public procedure greet(person)
        print("Hello " + person + ". I am " + name + "!")
    endprocedure
endclass
```

**Attributes** for type *Monster*: `poisonous`, `strength`, `name`  
**Methods** for type *Monster*: `eat`, `sleep`, `greet` (`new` is *not* a method, but an *initialiser*)

**Instantiation**: where an object is created of a given type, with a set of values for its attributes

The *initialiser* (`new` in the OCR pseudocode) is used to instantiate a new object.

`MonsterThree = new Monster(false, 4.5, "Susie")`

`MonsterThree.sleep()`

> `Snore, snore, snore`

**Inheritance**: where one class of object gets all the methods and attributes of its parent classes  
**Overriding**: where one class with methods inherited from its parent class redefines a method defined on its parent

`vampireTwo = new Vampire(false, 8.5, "Gordon")`

```ocrpsc
class Goblin inherits Monster
    private gold_coins = 0

    public procedure new(given_gold_coins, given, given_strength, given_name)
        gold_coins = given_gold_coins
        super.new(false, given_strength, given_name)
    endprocedure

    public function get_gold_coins()
        return gold_coins
    endfunction

    public procedure eat()
        print(name + " eats a hero loudly. CHOMP CHOMP CHOMP!")
    endprocedure
endclass
```

**Polymorphism**: the ability to call a method of an object and have it do different things depending on the type of the object

```ocrpsc
for monster of zoo
    monster.greet("Computer Science Students")
endfor
```

**Encapsulation**: the limitation of attribute access to within an instance's own methods only

```ocrpsc
class Monster
    private poisonous
    private strength
    private name
    ...

    public procedure set_strength(entered_strength)
        if strength < 1 || strength > 20
            return
        endfor
        strength = entered_strength
    endprocedure
endclass
```
