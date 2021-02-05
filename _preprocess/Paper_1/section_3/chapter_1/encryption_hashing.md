# Encryption, and Hashing

## Hashing

Hashing is the process of transforming data into fixed-size values. The original data is known as the key, and the fixed-size output is known as the hash.

Hashing algorithms take an arbitrary-length input and map them to a fixed-length output; this algorithm is known as a hash function.

Ideal hashing algorithms are:

- Unique (hashing two differing keys should not result in the same hash value twice)
- Repeatable (hashing the same key should always result in te same hash value)
- Irreversible (given a hash value, the key is unrecoverable)

Hashing can be used for security:

- Passwords and PINs are passed through a hashing function as they are entered
  - The password/PIN is never transmitted or stored in plain-text
  - If the database is breached or the transmission intercepted, the attacker will only find hash values
  - Because hashing functions are one-way operations, the hash value cannot be turned into the key
- The hash function is repeatable and can be used to verify the user's password
  - Every time the user enters their password, it is hashed and if its value is identical then the produced hash is identical
  - The server can compare the entered password to the real password without ever receiving either directly

Hashing can also be used to speed up data retrieval:

- When retrieving one record from many in a database, a naive search would take time proportional to the number of records
- However, if hashing is used, the search terms can be hashed, and the hash used to jump directly to the corresponding block of records

Finally, hashing can be used to validate transmitted data

- The hash value is much smaller than the transmitted data
- So it can be compared easily to the hash of the transmitted data
- If the provided hash of the original data matches the calculated hash of the recieved data, it is overwhelmingly likely that the data has been received correctly

01. > Hashing and Encryption are both essentially the same thing as they turn plain text into an unreadable format

    Explain what is wrong with this statement.

    Encryption algorithms are used to transform raw data into a format that is unreadable to anyone without the key; to keep it safe during transmission while allowing the intended recipient to use it.

    Hashing algorithms are used to transform raw data into a format that is fixed-length, unreadable, and irreversible; to keep it safe forever when the intended recipient needs only to compare it to other values.
02. Provide a good example of what hashing is used for. Justify your answer.

    Hashing is used for storing passwords. This is so that users can be verified by the server, but there is no chance of passwords being intercepted or leaked by malicious actors.
03. Provide other examples of when hashing might be used.

    Hashing can also be used to optimise database searching, or as a checksum to ensure that no download errors (or malicious actions) occur when downloading software
04. Discuss the use of hashing in a database and its associated problems. Also provide an example of a program which would sensibly use hashing and justify your answer.

    Hashing can be used in a database to reduce search time when using a full primary key; the primary key can be hashed and then used to find the record in constant time, rather than linear time. However, using hashing like this can cause hash collisions, which require either running the hash function on the hash value (using an additional hash slot, and losing the main benefit of using hash lookup) or storing the hash table as a sequence of (linked) lists, which requires linear search inside each hash bucket.

    Hashing could be used more sensibly for storing and transmitting passwords, as passwords are sensitive data that must never be exposed to anyone; and there is a massive inherent risk to storing passwords as plain-text

## Encryption

### Symmetric Encryption

Symmetric Encryption is where both the sender and recipient use the same key. Caesar and Vernam ciphers are examples of symmetric encryption.

### Asymmetric Encryption

Asymmetric encription is where the key used to encrypt the message is not the same as the key used to decrypt it again.

- Asymmetric encryption algorithms generate multiple keys that are mathematically linked such that one (the public key) encrypts the message and the other (the private key) decrypts it again
- The public key is made available to everyone and the private key is kept secret
- Messages can be signed to authenticate the sender
