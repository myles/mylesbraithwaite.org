---
layout: post
date: 2015-11-17 11:50
public: true
category: python
tags: [python, fuzzywuzzy]
title: Fuzzy Wuzzy is a String Matching Python Library
lead: Some of my notes about the Python library FuzzyWuzzy.
shorturl: http://myl.be/I
---

[FuzzyWuzzy](https://github.com/seatgeek/fuzzywuzzy) uses the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to help calculate differences between sequences in a simple to use package.

[Alex Volkov](https://github.com/avolkov/wuzzy-context-talk) gave a great talk on it at last nights [PythonToronto](http://pythontoronto.com/) meeting.

---

```python
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
```

---

I'm interested in using it for matching latin accents.

---

```python
fuzz.ratio('caffè espresso', 'caffe espresso')
```

    90

---


```python
fuzz.partial_ratio('caffè espresso', 'caffe espresso')
```

    86

---

Also strange companies names during a duplication check.

---

```python
fuzz.token_sort_ratio('01234567 Ontario Inc - Company Name', 'Company Name (01234567 Ontario Inc)')
```

    100

---

```python
fuzz.token_sort_ratio('01234567 Ontario Inc - Company Name', 'Company Name (01234567 Ont Inc)')
```

    94

---

```python
fuzz.partial_ratio('ABC Corp.', 'ABC Corporation')
```

    89

---

```python
fuzz.partial_ratio('ABC Corp.', 'ABC Inc.')
```

    50

---

Generally the above wouldn't matter as you would remove the business entity during the duplicate check. It would be close to below.

---

```python
fuzz.partial_ratio('Dell Canada', 'Dell')
```

    100

---

It would also be interesting in matching Provinces and Territories of Canada.

---

```python
provinces = ["Ontario", "Quebec", "Nova Scotia", "New Brunswick", "Manitoba",
              "British Columbia", "Prince Edward Island", "Saskatchewan",
              "Alberta", "Newfoundland and Labrador", "Northwest Territories",
              "Yukon", "Nunavut"]
```

---

```python
process.extractOne('newfoundland', provinces)
```

    ('Newfoundland and Labrador', 90)

---

```python
process.extractOne('Québec', provinces) # I'm sorry Francophones but it seems `process` doesn't work with accents.
```

    ('Quebec', 91)

---

```python
process.extractOne('On', provinces)
```

    ('Ontario', 90)


---

```python
process.extractOne('PEI', provinces)
```

    ('Prince Edward Island', 60)

---

```python
process.extract('BC', provinces, limit=5)
```

    [('Quebec', 50),
     ('Nova Scotia', 45),
     ('New Brunswick', 45),
     ('Manitoba', 45),
     ('British Columbia', 45)]

---

It's pretty bad for doing postal abbreviations but that would probably be better as a sperate function.
