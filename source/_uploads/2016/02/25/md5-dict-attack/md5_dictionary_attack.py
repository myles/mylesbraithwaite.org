#!/usr/bin/env python

import hashlib

# This is to get the MD5 hash of the test password.
password_hash = hashlib.md5('zygosporic').hexdigest()


def crack():
    # Open the UNIX dictonary of words.
    with open('/usr/share/dict/words', 'r') as f:
        words = f.read().split()

    # Loop over all the words.
    for word in words:
        # Calculate the MD5 hash of the word.
        word_hash = hashlib.md5(word).hexdigest()

        # If the MD5 hash of the word equals the password hash
        # then the password has been cracked.
        if word_hash == password_hash:
            return word


def main():
    password = crack()

    if password:
        print('The password is `{0}`.'.format(password))
    else:
        print("The password can't be cracked using a dictionary attack.")


if __name__ == "__main__":
    main()