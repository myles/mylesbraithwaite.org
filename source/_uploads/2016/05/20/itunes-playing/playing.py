#!/usr/bin/env python3

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


def itunes(args):
    """This is so I don't have to repeat a bunch of code."""

    script = 'tell application "iTunes" to {0} as string'

    return osascript(script.format(args))


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


def is_playing():
    """This function is to check if iTunes is currently playing music."""
    output = itunes('player state')

    if output == 'playing':
        return True
    else:
        return False


def get_track():
    """This is the main function that get the currently playing track."""
    track = {}

    track['name'] = itunes('name of current track')
    track['artist'] = itunes('artist of current track')
    track['album'] = itunes('album of current track')

    return track


def main():
    if not is_running():
        return None

    # `is_running()` and `is_playing()` need to be run separately, if together
    # than it will launch iTunes.
    if is_playing():
        print('iTunes is currently playing:')
        print("{name} / {artist} / {album}".format(**get_track()))


if __name__ == "__main__":
    main()
