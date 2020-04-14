"""
Some helpful functions that can be used across the Flask codebase
"""

from random import randint


def get_next_id():
    """
    Return the next ID. Should be a random
    32 bit integer
    """

    return randint(1, 1000000000)
