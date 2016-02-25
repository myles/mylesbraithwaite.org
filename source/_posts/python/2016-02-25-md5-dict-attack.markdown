---
layout: post
date: 2016-02-25 14:47
public: true
category: python
tags: [python, md5]
title: Dictonary Attack with Python
lead: A simple Python script for doing a MD5 dictonary attack.
shorturl: http://myl.be/1-
---

Used this as an example of why you should have a secure password.

```python
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
```
