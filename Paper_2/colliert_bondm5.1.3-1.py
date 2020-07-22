def quot_and_rem(x, y):
    assert x >= 0
    assert y > 0
    r = x
    q = 0
    while r >= y:
        r -= y
        q += 1
    return q, r


for x in range(10):
    for y in range(10):
        try:
            q, r = quot_and_rem(x, y)
        except AssertionError:
            pass
        else:
            assert x == y * q + r
            assert 0 <= r < y
