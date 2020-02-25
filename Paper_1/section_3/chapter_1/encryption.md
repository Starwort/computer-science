# Encryption

← [Back to Chapter 1](./index.html)

## What it is

- The transformation of data from one form to another to prevent an unauthorised third part from being able to understand it.

## Why we need it

- More and more data is being transmitted online (websites, web forms, emails, messaging)
- There is always a danger of data being hijacked
- People conduct more of their lives online with more sensitive data than ever being transmitted

## Terminology

- Plaintext
  - no encryption; the original data
- Ciphertext
  - encrypted data
- Cipher
  - the encryption method or algorithm
- Key
  - secret information to encrypt or decrypt the message

People have been using encryption for as long as there has been written communication - not just since the introduction of computers

One of the oldest known encryption methods is the Caesar Cipher

## Caesar Cipher

- Also known as the **shift cipher**
- It is a form of **substitution cipher**

It works by shifting the number of letters of the alphabet along by a certain number of characters.

### Breaking the Caesar Cipher

- Even without the key, the Caesar Cipher is very easy to decrypt.
- To decrypt this message:
  > DGYDQFH WR ERUGHU DQG DWWDFN DW GDZQ

  You could attempt a **~~Brutus~~ Brute Force Attack** (trying to crack a code/password by trying hundreds/thousands of possibilities by **trial and error**)
  
  - there are only 25 different possibilities:
    > EHZERGI XS FSVHIV ERH EXXEGO EX HEAR  
    > FIAFSHJ YT GTWIJW FSI FYYFHP FY IFBS  
    > GJBGTIK ZU HUXJKX GTJ GZZGIQ GZ JGCT  
    > HKCHUJL AV IVYKLY HUK HAAHJR HA KHDU  
    > ILDIVKM BW JWZLMZ IVL IBBIKS IB LIEV  
    > JMEJWLN CX KXAMNA JWM JCCJLT JC MJFW  
    > KNFKXMO DY LYBNOB KXN KDDKMU KD NKGX  
    > LOGLYNP EZ MZCOPC LYO LEELNV LE OLHY  
    > MPHMZOQ FA NADPQD MZP MFFMOW MF PMIZ  
    > NQINAPR GB OBEQRE NAQ NGGNPX NG QNJA  
    > ORJOBQS HC PCFRSF OBR OHHOQY OH ROKB  
    > PSKPCRT ID QDGSTG PCS PIIPRZ PI SPLC  
    > QTLQDSU JE REHTUH QDT QJJQSA QJ TQMD  
    > RUMRETV KF SFIUVI REU RKKRTB RK URNE  
    > SVNSFUW LG TGJVWJ SFV SLLSUC SL VSOF  
    > TWOTGVX MH UHKWXK TGW TMMTVD TM WTPG  
    > UXPUHWY NI VILXYL UHX UNNUWE UN XUQH  
    > VYQVIXZ OJ WJMYZM VIY VOOVXF VO YVRI  
    > WZRWJYA PK XKNZAN WJZ WPPWYG WP ZWSJ  
    > XASXKZB QL YLOABO XKA XQQXZH XQ AXTK  
    > YBTYLAC RM ZMPBCP YLB YRRYAI YR BYUL  
    > ZCUZMBD SN ANQCDQ ZMC ZSSZBJ ZS CZVM  
    > ADVANCE TO BORDER AND ATTACK AT DAWN  
    > BEWBODF UP CPSEFS BOE BUUBDL BU EBXO  
    > CFXCPEG VQ DQTFGT CPF CVVCEM CV FCYP  

## Vernam Cipher

- Invented in 1917 - the only cipher that is still unbreakable
- Uses a one-time pad (also known as the encryption key)
  - is equal length to (or longer than) the plaintext
  - is completely random
  - only used once (one-time)
- One-time pads are used in pairs - sender and recipient have the key.
  - key is shared securely (in person)

### How it works

- The plaintext is given in ASCII (binary)
- The one-time pad is given in binary
- The XOR operation is carried out between the two binary strings

Example:

- Plaintext character **M** in ASCII: `1001101`
- One-time pad (**+** in ASCII): `0101011`
- XOR them

```binary
1001101 M
0101011 +
- XOR - ⊻
1100110 f
```

Encrypt `E` with key `w`

```binary
01000101 E
01110111 w
-- XOR - ⊻
00110010 2
```
