import dataclasses
import math

CIRCLE_SIDES = 1


@dataclasses.dataclass
class RegularShape:
    sides: int
    side_length: float

    @property
    def area(self):
        if self.sides == CIRCLE_SIDES:
            # then the side length is the radius
            return math.pi * self.side_length ** 2
        else:
            int_angle = math.pi - 2 / self.sides * math.pi
            apothem = math.tan(int_angle / 2) * self.side_length / 2
            return round(self.sides * self.side_length * apothem / 2, 3)


if __name__ == "__main__":
    sides = int(
        input(
            f"Enter number of sides of shape (for circle, use '{CIRCLE_SIDES}')\n>>> "
        )
    )
    side_len = float(input("Enter side length (or radius of circle)\n>>> "))
    shape = RegularShape(sides, side_len)
    print(
        f"The area of a regular {sides}-sided polygon of side length {side_len} is {shape.area}"
    )
