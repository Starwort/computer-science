"""The Task 4 skeleton code provides a series of calls to various methods with
different types of data and provides expected results for each method call.

Use polymorphism (method overriding/overloading) to implement the methods called
in the Task 4 skeleton code so that the expected results are produced. No
changes should be made to main. (18 marks)
"""
import math
import typing
from abc import ABCMeta, abstractmethod


def str_to_int(string: str) -> int:
    if string == "one":
        return 1
    elif string == "two":
        return 2
    elif string == "three":
        return 3
    elif string == "four":
        return 4
    elif string == "five":
        return 5
    elif string == "six":
        return 6
    elif string == "seven":
        return 7
    elif string == "eight":
        return 8
    elif string == "nine":
        return 9
    else:
        raise ValueError(f"Could not parse {string!r}")


class BaseShape(metaclass=ABCMeta):
    @abstractmethod
    def perimeter(self) -> None:
        pass

    @abstractmethod
    def area(self) -> None:
        pass


Length = typing.Union[int, float, str]


def convert_parameter(param: Length) -> typing.Union[int, float]:
    if isinstance(param, (int, float)):
        return param
    else:
        return str_to_int(param)


class Circle(BaseShape):
    def __init__(self, radius: Length) -> None:
        self.radius = convert_parameter(radius)

    def perimeter(self) -> None:
        print(f"This circle has a perimeter of {math.pi * self.radius * 2}")

    def area(self) -> None:
        print(f"This circle has an area of {math.pi * self.radius ** 2}")


class Rectangle(BaseShape):
    def __init__(self, a: Length, b: Length) -> None:
        self.a = convert_parameter(a)
        self.b = convert_parameter(b)

    def perimeter(self) -> None:
        print(f"This rectangle has a perimeter of {self.a*2+self.b*2}")

    def area(self) -> None:
        print(f"This rectangle has an area of {self.a*self.b}")


class Triangle(BaseShape):
    def __init__(self, a: Length, b: Length, c: Length) -> None:
        self.a = convert_parameter(a)
        self.b = convert_parameter(b)
        self.c = convert_parameter(c)

    @property
    def _perimeter(self) -> float:
        return self.a + self.b + self.c

    @property
    def _semiperimeter(self) -> float:
        return self._perimeter / 2

    @property
    def _area(self) -> float:
        return math.sqrt(
            self._semiperimeter
            * (self._semiperimeter - self.a)
            * (self._semiperimeter - self.b)
            * (self._semiperimeter - self.c)
        )

    def perimeter(self) -> None:
        print(f"This triangle has a perimeter of {self._perimeter}")

    def area(self) -> None:
        print(f"This triangle has an area of {self._area}")

def Shape(a: Length, b: Length = None, c: Length = None) -> BaseShape:
    if c is not None:
        return Triangle(a,b,c)
    elif b is not None:
        return Rectangle(a,b)
    else:
        return Circle(a)


def main():
    # Circles have one value: radius
    circle1 = Shape(2)
    circle2 = Shape("three")

    # Rectangles have two values: width and height
    rectangle1 = Shape(5, 3)
    rectangle2 = Shape("seven", "two")

    # Triangles have three values: the lengths of each side of the triangle
    triangle1 = Shape("four", "six", "nine")
    triangle2 = Shape(3, 6, 5)

    # You can assume that shapes are either given only integer values, or only strings with one of the following values:
    # "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"

    # The perimeter of a circle is: 2 x pi x radius
    # The area of a circle is: pi x radius^2
    # You can use 'math.pi' as the value of pi
    # You can use 'value**2' to square a value

    circle1.perimeter()  # Should print "This circle has a perimeter of 12.5663706..."
    circle1.area()  # Should print "This circle has an area of 12.5663706..."

    circle2.perimeter()  # Should print "This circle has a perimeter of 18.84955592..."
    circle2.area()  # Should print "This circle has an area of 28.27433388..."

    # The perimeter of a rectangle is: 2 x (width + height)
    # The area of a rectangle is: width x height

    rectangle1.perimeter()  # Should print "This rectangle has a perimeter of 16"
    rectangle1.area()  # Should print "This rectangle has an area of 15"

    rectangle2.perimeter()  # Should print "This rectangle has a perimeter of 18"
    rectangle2.area()  # Should print "This rectangle has an area of 14"

    # The perimeter of a triangle with sides of length a, b and c is: a + b + c
    # The area of a triangle with sides of length a, b and c and perimeter p is the square root of:
    # p/2 x (p/2-a) x (p/2-b) x (p/2-c)
    # You can use 'math.sqrt(value)' to get the square root of a value

    triangle1.perimeter()  # Should print "This triangle has a perimeter of 19"
    triangle1.area()  # Should print "This triangle has an area of 9.5622957..."

    triangle2.perimeter()  # Should print "This triangle has a perimeter of 14"
    triangle2.area()  # Should print "This triangle has an area of 7.48331477..."

    input()


if __name__ == "__main__":
    main()
