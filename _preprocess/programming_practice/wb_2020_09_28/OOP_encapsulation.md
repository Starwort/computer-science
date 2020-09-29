# OOP - encapsulation

01. Define the term encapsulation
    - Encapsulation is the idea of grouping data and subroutines, achieved in object-oriented programming using classes and data privacy. In pure encapsulated programming, no attributes of a class should be accessible from outside of the class directly.
02. Explain the difference between a private attribute or method and a public attribute or method.
    - Private attributes and methods are accessible only from within methods of the class; external code should have no access to them.
    - Public attributes and methods are accessible from any code; any code can set or read the attributes and call the methods.
03. Explain one reason why an attribute may be made private.
    - Attributes may be made private so that their values may be type-checked or range-checked when being set by other code.
04. Define the terms accessor and mutator.
    - An accessor is used to read the value of a private attribute.
    - A mutator is used to set the value of a private attribute (and often implements a check on the data given)
05. Identify when accessors and mutators should be used.
    - Accessors should be used if the value they read should never be set, or if the value they read should have checks on its set values.
    - Mutators should be used if the value they mutate should have checks on its values before setting.
    - They should *not* be used if there are no checks on the values that can be stored in the attribute by external code
06. Explain why you might make an attribute public instead of using accessors and mutators.
    - It makes external code easier to read, and it makes attribute access faster.
    - If there were no checks in the mutator in the first place, no code safety is lost by using a public attribute
07. Share your code: [object_oriented.py](https://github.com/Starwort/computer-science/blob/master/_preprocess/programming_practice/wb_2020_09_28/object_oriented.py) [(download)](./object_oriented.py)
