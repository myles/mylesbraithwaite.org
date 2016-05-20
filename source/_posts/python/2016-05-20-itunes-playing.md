---
layout: post
date: 2016-05-20 11:53
public: true
category: python
tags: [python, itunes, applescript]
title: What's Playing on iTunes
lead: A simple Python script to tell you what's currently playing on iTunes.
shorturl: https://myl.be/9c
---

I got [really angry at Last.fm](https://twitter.com/mylesb/status/733664737347538944) today so I wanted to see how hard it was to duplicate it's Scrobbler feature (the only useful feature in Last.fm). So I wrote a simple script that uses [subprocess](https://docs.python.org/3/library/subprocess.html) and [osascript](http://ss64.com/osx/osascript.html) (a command line AppleScript).

Download the [script]({% upload_path playing.py %}) or the [notebook]({% upload_path itunes-playing.ipynb %}).

---

```python
import subprocess


def osascript(script):
    """
    This is a bridge between Python and AppleScript using the `osascript`
    comamnd line app.
    """

    process = subprocess.run(['osascript', '-e', script],
                             stdout=subprocess.PIPE)

    # Because the `subprocess.CompletedProcess` class returns a byte (followed
    # by a new line), I have to clean it a little.
    return process.stdout.decode('utf-8').strip()
```

---


```python
def itunes(args):
    """This is so I don't have to repeat a bunch of code."""

    script = 'tell application "iTunes" to {0} as string'

    return osascript(script.format(args))
```

---


```python
def is_running():
    """
    Here we a checking to see if iTunes is currently running.
    I'm doing this because if iTunes is closed I don't want to open it.
    """
    output = osascript('application "iTunes" is running')

    if output == 'true':
        return True
    else:
        return False
```

---


```python
def is_playing():
    """This function is to check if iTunes is currently playing music."""
    output = itunes('player state')

    if output == 'playing':
        return True
    else:
        return False
```

---


```python
def get_track():
    """This is the main function that get the currently playing track."""
    track = {}

    track['name'] = itunes('name of current track')
    track['artist'] = itunes('artist of current track')
    track['album'] = itunes('album of current track')

    return track
```

---


```python
# `is_running()` and `is_playing()` need to be run separately, if together
# than it will launch iTunes.
if is_running():
    if is_playing():
        print('iTunes is currently playing:')
        print("{name} / {artist} / {album}".format(**get_track()))
```

    iTunes is currently playing:
    Garcia Counterpoint / Bryce Dessner / Day of the Dead
