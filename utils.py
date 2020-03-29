from random import randint

def isfloat(value):
  try:
    float(value)
    return True
  except ValueError:
    return False

def get_next_id():
    return randint(1, 1000000000)
