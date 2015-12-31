---
layout: post
date: 2015-06-12 11:45
updated: 2015-11-29 15:31
public: true
category: five-little-monkeys
tags: [javascript, five-little-monkeys]
title: Five Little Monkeys in JavaScript
simpletitle: JavaScript
---

```javascript
/*global
    console
*/

'use strict';

var numberOfMonkeys = ["Five", "Four", "Three", "Two", "One"];

numberOfMonkeys.forEach(function (value) {
    if (value == "One") {
        console.log(value + " little monkey jumping on the bed");
        console.log("They fell off and bumped their head");
    } else {
        console.log(value + " little monkeys jumping on the bed");
        console.log("One fell off and bumped their head");
    }

    console.log("Mama called the doctor,");
    console.log("And the doctor said");

    if (value == "One") {
        console.log("Put those monkeys right to bed\n");
    } else {
        console.log("No more monkeys jumping on the bed\n");
    }
});
```