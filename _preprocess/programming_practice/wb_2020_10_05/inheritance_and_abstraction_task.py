"""The code contains classes for various animals, describing what attributes
they have and what actions they can do. Recreate the code so that it keeps the
same functionality but adds three additional classes: `Animal`, `Reptile`, and
`Mammal`. The `Animal` class should include abstract methods. Classes should inherit
from other classes as appropriate, and as much functionality as possible should
be moved to the three new classes. The main method should not be altered. (17
marks)
"""
import abc
import typing


class Animal(metaclass=abc.ABCMeta):
    def __init__(
        self,
        cold_blooded: bool,
        tail: bool,
        legs: int,
        arms: int,
        wings: int,
        skin_type: str = None,
        hibernates: bool = False,
    ) -> None:
        self._cold_blooded = cold_blooded
        self._tail = tail
        self._legs = legs
        self._arms = arms
        self._wings = wings
        self._skin_type = skin_type
        self._hibernates = hibernates

    @abc.abstractmethod
    def move(self) -> None:
        ...

    @abc.abstractmethod
    def eat(self) -> None:
        ...

    @abc.abstractmethod
    def birth(self) -> None:
        ...

    def hibernate(self) -> None:
        if self._hibernates:
            print("This animal hibernates")

    def get_info(self) -> None:
        print(self.__class__.__name__ + ":")
        if self._cold_blooded:
            print("This animal is cold-blooded")
        else:
            print("This animal is warm-blooded")
        if self._skin_type is not None:
            print("This animal is covered in " + self._skin_type)
        if self._tail:
            print("This animal has a tail")
        if self._legs > 0:
            print("This animal has " + str(self._legs) + " legs")
        if self._arms > 0:
            print("This animal has " + str(self._arms) + " arms")
        if self._wings > 0:
            print("This animal has " + str(self._wings) + " wings")
        self.move()
        self.eat()
        self.birth()
        self.hibernate()
        print()


class Reptile(Animal):
    """# Reptile

    ### /ˈrɛptʌɪl/

    Noun

    A vertebrate animal of a class that includes snakes, lizards, crocodiles,
    turtles, and tortoises. They are distinguished by having a dry scaly skin
    and typically laying soft-shelled eggs on land.
    """

    def __init__(
        self,
        cold_blooded: bool,
        tail: bool,
        legs: int,
        arms: int,
        wings: int,
        hibernates: bool,
    ) -> None:
        super().__init__(cold_blooded, tail, legs, arms, wings, "scales", hibernates)

    def birth(self) -> None:
        print("This animal lays eggs")


class Mammal(Animal):
    """# Mammal

    ### /ˈmam(ə)l/

    Noun

    A warm-blooded vertebrate animal of a class that is distinguished by the
    possession of hair or fur, females that secrete milk for the nourishment of
    the young, and (typically) the birth of live young.
    """

    def __init__(
        self,
        tail: bool,
        legs: int,
        arms: int,
        wings: int,
        fur_or_hair: typing.Literal["hair", "fur"],
        hibernates: bool,
    ) -> None:
        super().__init__(False, tail, legs, arms, wings, fur_or_hair, hibernates)

    def birth(self) -> None:
        print("This animal gives birth to live young")


class Tortoise(Reptile):
    def __init__(self) -> None:
        super().__init__(True, True, 4, 0, 0, True)

    def move(self) -> None:
        print("This animal walks")

    def eat(self) -> None:
        print("This animal is a herbivore")


class Turtle(Reptile):
    def __init__(self) -> None:
        super().__init__(True, True, 4, 0, 0, True)

    def move(self) -> None:
        print("This animal crawls and swims")

    def eat(self) -> None:
        print("This animal is an omnivore")


class Snake(Reptile):
    def __init__(self) -> None:
        super().__init__(True, True, 0, 0, 0, True)

    def move(self) -> None:
        print("This animal slithers")

    def eat(self) -> None:
        print("This animal is a carnivore")


class Otter(Mammal):
    def __init__(self) -> None:
        super().__init__(True, 4, 0, 0, "fur", False)

    def move(self) -> None:
        print("This animal walks and swims")

    def eat(self) -> None:
        print("This animal is an omnivore")


class Gorilla(Mammal):
    def __init__(self) -> None:
        super().__init__(True, 2, 2, 0, "fur", False)

    def move(self) -> None:
        print("This animal walks and climbs")

    def eat(self) -> None:
        print("This animal is a herbivore")


class Bat(Mammal):
    def __init__(self) -> None:
        super().__init__(True, 2, 0, 2, "fur", True)

    def move(self) -> None:
        print("This animal flies")

    def eat(self) -> None:
        print("This animal is an omnivore")


def main():
    tortoise = Tortoise()
    turtle = Turtle()
    snake = Snake()
    otter = Otter()
    gorilla = Gorilla()
    bat = Bat()

    tortoise.get_info()
    turtle.get_info()
    snake.get_info()
    otter.get_info()
    gorilla.get_info()
    bat.get_info()
    input()


if __name__ == "__main__":
    main()
