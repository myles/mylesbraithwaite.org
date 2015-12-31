---
layout: post
date: 2015-12-01 10:56
public: true
category: five-little-monkeys
tags: [coffeescript, five-little-monkeys]
title: Five Little Monkeys in CoffeeScript
simpletitle: CoffeeScript
---

```coffee
numberOfMonkeys = [
  'Five'
  'Four'
  'Three'
  'Two'
  'One'
]

for key, value of numberOfMonkeys
  if value == 'One'
    console.log "#{ value } little monkey jumping on the bed"
    console.log 'They fell off and bumped their head'
  else
    console.log "#{ value } little monkeys jumping on the bed"
    console.log 'One fell off and bumped their head'
  
  console.log 'Mama called the doctor,'
  console.log 'And the doctor said'
  
  if value == 'One'
    console.log 'Put those monkeys right to bed\n'
  else
    console.log 'No more monkeys jumping on the bed\n'

return
```