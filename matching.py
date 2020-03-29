import config
from db import Database
from flask import jsonify
import json
import models
import math

db = config.MAIN_DB
log = config.MAIN_APP.logger


def find_best_match(latitude, longitude, donating):

    rows = models.Organization.query.filter(
        models.Organization.needs.like(donating))

    min_distance = float('inf')
    winner = None
    for row in rows:
        org_lat = row.latitude
        org_lon = row.longitude

        try:
        dist = distance(
            float(latitude), float(longitude), float(org_lat), float(org_lon))
        if dist < min_distance:
            min_distance = dist
            winner = row
        except Exception as e:
            continue

    return winner.serialize()


def distance(lat1, lon1, lat2, lon2):
    #
    # Blatantly stolen from https://gist.github.com/rochacbruno/2883505
    #

    radius = 6371  # km

    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2) * math.sin(dlat/2) + math.cos(math.radians(lat1)) \
        * math.cos(math.radians(lat2)) * math.sin(dlon/2) * math.sin(dlon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    d = radius * c

    return float(d)
