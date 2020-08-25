from math import trunc, floor, ceil

BIT_LENGTH_EXPONENT = 11  # N64 uses 8 bits
BIT_LENGTH_MANTISSA = 52  # N64 uses 23 bits
BIT_LENGTH_FLOAT = BIT_LENGTH_EXPONENT + BIT_LENGTH_MANTISSA + 1

MAX_EXPONENT = 2 ** (BIT_LENGTH_EXPONENT) - 1
MIN_EXPONENT = 0

MAX_MANTISSA = 2 ** (BIT_LENGTH_MANTISSA) - 1
MIN_MANTISSA = 0

MAX_FLOAT = 2 ** (BIT_LENGTH_EXPONENT + BIT_LENGTH_MANTISSA + 2) - 1

INTERVAL_EXPONENT = MAX_EXPONENT + 1
INTERVAL_MANTISSA = MAX_MANTISSA + 1


class N64Float:
    """Represents an N64-style float
    Sign = uint1
    Exponent = uint8
    Mantissa = uint23"""

    __slots__ = ("sign", "exponent", "mantissa")

    def __init__(self, sign, exponent, mantissa, /):
        if not isinstance(sign, int):
            raise TypeError("sign must be an integer")
        if not isinstance(exponent, int):
            raise TypeError("exponent must be an integer")
        if not isinstance(mantissa, int):
            raise TypeError("mantissa must be an integer")
        self.sign = sign % 2
        self.exponent = exponent % INTERVAL_EXPONENT
        self.mantissa = mantissa % INTERVAL_MANTISSA

    @classmethod
    def from_float(cls, initial_value, /):
        if isinstance(initial_value, N64Float):
            sign = initial_value.sign
            exponent = initial_value.exponent
            mantissa = initial_value.mantissa
        if initial_value < 0 or str(initial_value) == "-0.0":
            sign = 1
            initial_value = -initial_value
        else:
            sign = 0
        if initial_value == float("inf"):
            exponent = MAX_EXPONENT
            mantissa = MAX_MANTISSA
        elif initial_value == 0:
            exponent = MIN_EXPONENT
            mantissa = 0
        else:
            initial_value *= INTERVAL_MANTISSA
            divs = 0
            while initial_value > INTERVAL_MANTISSA:
                initial_value //= 2
                divs += 1
            mantissa = round(initial_value)
            exponent = divs
            if exponent > MAX_EXPONENT:
                mantissa = MAX_MANTISSA
                exponent = MAX_EXPONENT
        return cls(sign, exponent, mantissa)

    @property
    def as_float(self) -> float:
        if self.exponent == MAX_EXPONENT and self.mantissa == MAX_MANTISSA:
            return ((-1) ** self.sign) * float("inf")
        return (
            ((-1) ** self.sign)
            * self.mantissa
            * (2 ** self.exponent)
            / INTERVAL_MANTISSA
        )

    @classmethod
    def from_bits(cls, value, /):
        mant = MAX_MANTISSA & value
        value = value >> BIT_LENGTH_MANTISSA
        exp = MAX_EXPONENT & value
        value = value >> BIT_LENGTH_EXPONENT
        sign = 1 & value
        return cls(sign, exp, mant)

    @property
    def as_bits(self):
        return (
            (self.sign << (BIT_LENGTH_MANTISSA + BIT_LENGTH_EXPONENT))
            | ((self.exponent % INTERVAL_EXPONENT) << BIT_LENGTH_MANTISSA)
            | self.mantissa
        )

    def __int__(self):
        return int(self.as_float)

    def __float__(self):
        return self.as_float

    def __index__(self):
        return self.as_bits

    def __round__(self, ndigits: int = None):
        return N64Float.from_float(round(self.as_float, ndigits))

    def __trunc__(self):
        return N64Float.from_float(trunc(self.as_float))

    def __floor__(self):
        return N64Float.from_float(floor(self.as_float))

    def __ceil__(self):
        return N64Float.from_float(ceil(self.as_float))

    def __repr__(self):
        return f"N64Float(sign={self.sign}, exponent={self.exponent}, mantissa={self.mantissa})"

    def __str__(self):
        return f"{'-' if self.sign else ''}{abs(self.as_float)}"

    def __neg__(self):
        return N64Float.from_float(-self.as_float)

    def __pos__(self):
        return N64Float.from_float(+self.as_float)

    def __abs__(self):
        return N64Float.from_float(abs(self.as_float))

    def __invert__(self):
        return N64Float.from_bits(MAX_FLOAT - self.as_bits)

    def __add__(self, other):
        if self == -other and abs(self) == float("inf"):
            return N64Float.from_float(0)
        return N64Float.from_float(self.as_float + other)

    __radd__ = __add__

    def __sub__(self, other):
        if self == other and abs(self) == float("inf"):
            return N64Float.from_float(0)
        return N64Float.from_float(self.as_float - other)

    def __rsub__(self, other):
        if self == other and abs(self) == float("inf"):
            return N64Float.from_float(0)
        return N64Float.from_float(other - self.as_float)

    def __mul__(self, other):
        if abs(self) == float("inf") and other == 0:
            return N64Float.from_float(0)
        return N64Float.from_float(self.as_float * other)

    __rmul__ = __mul__

    def __truediv__(self, other):
        if self == 0:
            if str(other) == "-0.0":
                sign = 1 - self.sign
                return N64Float.from_float(sign)
            if other == 0:
                return N64Float.from_float(self.sign)
            return N64Float.from_float(self.sign * (other / abs(other)) * 0.0)
        if str(other) == "-0.0":
            sign = 1 - self.sign
            return N64Float(sign, MAX_EXPONENT, MAX_MANTISSA)
        if other == 0:
            return N64Float(self.sign, MAX_EXPONENT, MAX_MANTISSA)
        return N64Float.from_float(self.as_float / other)

    def __rtruediv__(self, other):
        if self == 0:
            if str(other) == "-0.0":
                sign = 1 - self.sign
                return N64Float.from_float(sign)
            if other == 0:
                return N64Float.from_float(self.sign)
            other_sign = -other // abs(other)
            other_sign += 1
            other_sign /= 2
            sign = other_sign ^ self.sign
            return N64Float(sign, MAX_EXPONENT, MAX_MANTISSA)
        if str(other) == "-0.0":
            sign = 1 - self.sign
            return N64Float(sign, 0, 0)
        if other == 0:
            return N64Float(self.sign, 0, 0)
        return N64Float.from_float(other / self.as_float)

    def __lshift__(self, by):
        new_value = self.as_bits << by
        return N64Float.from_bits(new_value & MAX_FLOAT)

    def __rshift__(self, by):
        new_value = self.as_bits >> by
        return N64Float.from_bits(new_value & MAX_FLOAT)

    def __and__(self, other):
        new_value = self.as_bits & other
        return N64Float.from_bits(new_value & MAX_FLOAT)

    __rand__ = __and__

    def __xor__(self, other):
        new_value = self.as_bits ^ other
        return N64Float.from_bits(new_value & MAX_FLOAT)

    __rxor__ = __xor__

    def __or__(self, other):
        new_value = self.as_bits | other
        return N64Float.from_bits(new_value & MAX_FLOAT)

    __ror__ = __or__

    def __eq__(self, other):
        return other == self.as_float

    def __ne__(self, other):
        return other != self.as_float

    def __lt__(self, other):
        return self.as_float < other

    def __le__(self, other):
        return self.as_float <= other

    def __gt__(self, other):
        return self.as_float > other

    def __ge__(self, other):
        return self.as_float >= other


if __name__ == "__main__":
    b10 = float(
        input("Enter a base 10 number. It will be converted to floating point.\n>>> ")
    )
    conv = N64Float.from_float(b10)
    print(f"The converted floating point number is: {conv}")
    print(f"The error is: {abs(conv - b10)}")
    print(
        f"Its bitwise representation is: 0b{bin(conv.as_bits)[2:].zfill(BIT_LENGTH_FLOAT)}"
    )
    print(f"In hex, that is: 0x{hex(conv.as_bits)[2:].zfill(BIT_LENGTH_FLOAT // 4)}")
