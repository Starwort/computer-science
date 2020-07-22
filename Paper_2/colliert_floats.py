from math import trunc, floor, ceil, log2 as log

MAX_8 = 0x7F
MIN_8 = -0x80

MAX_U23 = 0x7FFFFF
MIN_U23 = 0

MAX_U32 = 0xFFFFFFFF

INTERVAL_8 = 0x100
INTERVAL_23 = 0x800000


class N64Float:
    """Represents an N64-style float
    Sign = uint1
    Exponent = int8
    Mantissa = uint23"""

    def __init__(self, sign, exponent, mantissa):
        if not isinstance(sign, int):
            raise TypeError("sign must be an integer")
        if not isinstance(exponent, int):
            raise TypeError("exponent must be an integer")
        if not isinstance(mantissa, int):
            raise TypeError("mantissa must be an integer")
        self.sign = sign % 2
        while exponent > MAX_8:
            exponent -= INTERVAL_8
        self.exponent = exponent
        while mantissa > MAX_U23:
            mantissa -= INTERVAL_23
        self.mantissa = mantissa

    @classmethod
    def from_float(cls, initial_value):
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
            exponent = MAX_8
            mantissa = MAX_U23
        elif initial_value == 0:
            exponent = MIN_8
            mantissa = 0
        else:
            exponent = floor(log(initial_value))
            if exponent > MAX_8:
                exponent = MAX_8
                mantissa = MAX_U23
            elif exponent < MIN_8:
                exponent = MIN_8
                mantissa = 0
            else:
                value = initial_value - 2 ** exponent
                interval = 2 ** (exponent - 23)
                mantissa = round(value / interval)
        return cls(sign, exponent, mantissa)

    @property
    def gap_size(self):
        return self.exponent - 23

    @property
    def as_float(self) -> float:
        if self.exponent == MAX_8 and self.mantissa == MAX_U23:
            return (-1) ** self.sign * float("inf")
        if self.mantissa == 0 and self.exponent == MIN_8:
            return ((-1) ** self.sign) * 0.0
        return ((-1) ** self.sign) * self.mantissa * (2 ** self.gap_size) + (
            2 ** self.exponent
        )

    @classmethod
    def from_bits(cls, value):
        sign = 0x80000000 & value
        sign //= 0x80000000
        exp = 0x7F800000 & value
        exp //= 0x800000
        mant = MAX_U23 & value
        return cls(sign, exp, mant)

    @property
    def as_bits(self):
        return (self.sign << 31) | ((self.exponent % 256) << 23) | self.mantissa

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
        return N64Float.from_bits(MAX_U32 - self.as_bits)

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
            return N64Float(sign, MAX_8, MAX_U23)
        if other == 0:
            return N64Float(self.sign, MAX_8, MAX_U23)
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
            return N64Float(sign, MAX_8, MAX_U23)
        if str(other) == "-0.0":
            sign = 1 - self.sign
            return N64Float(sign, 0, 0)
        if other == 0:
            return N64Float(self.sign, 0, 0)
        return N64Float.from_float(other / self.as_float)

    def __lshift__(self, by):
        new_value = self.as_bits << by
        return N64Float.from_bits(new_value & MAX_U32)

    def __rshift__(self, by):
        new_value = self.as_bits >> by
        return N64Float.from_bits(new_value & MAX_U32)

    def __and__(self, other):
        new_value = self.as_bits & other
        return N64Float.from_bits(new_value & MAX_U32)

    __rand__ = __and__

    def __xor__(self, other):
        new_value = self.as_bits ^ other
        return N64Float.from_bits(new_value & MAX_U32)

    __rxor__ = __xor__

    def __or__(self, other):
        new_value = self.as_bits | other
        return N64Float.from_bits(new_value & MAX_U32)

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
    print(
        "The bitwise representation of the converted floating"
        f" point number is: 0b{bin(conv.as_bits)[2:]:0>32}"
    )
    print(f"In hex, that is: 0x{hex(conv.as_bits)[2:]:0>8}")
