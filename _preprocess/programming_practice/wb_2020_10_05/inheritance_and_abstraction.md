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
    - 