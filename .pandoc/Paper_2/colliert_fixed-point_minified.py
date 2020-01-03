# fmt:off
b=float(input());i,d=divmod(b,1);print(f'{bin(int(i))[2:][-8:]:0>8}.{bin(int(d*256))[2:][-8:]:0>8}')
