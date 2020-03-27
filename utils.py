from time import time


def get_next_id():
    ts = time()
    formatted = int(str(ts).replace('.', ''))
    return formatted / 1000000
