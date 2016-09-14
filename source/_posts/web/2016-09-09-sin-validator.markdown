---
layout: post_web
date: 2016-09-09 09:03
public: true
category: web
tags:
  - javascript
  - social-insurance-number
title: Check for a Valid SIN Number
demo: index.html
shorturl: https://myl.be/df
crosspost_to_medium: true
---

```javascript
function validate_sin (sin) {
    // Basic check to see if the SIN is nine characters.
    if (sin.length != 9) {
        console.log('SIN number to short.');
        return false;
    }

    var c = 0;

    // odd digits
    for (var i = 1; i<=9; i+=2) {
    	c += Number(sin.charAt(i-1));
    }

    // even digits
    for (var i = 2; i <=8; i+=2) {
    	var digit = Number(sin.charAt(i-1)) *2;
    	if (digit >9) {digit = digit -9}
    	c += digit;
    }

    if ((c % 10) == 0) {
        console.log('Valid SIN number.');
        return true;
    } else {
        console.log('Invalid SIN number.');
        return false;
    }
}
```
