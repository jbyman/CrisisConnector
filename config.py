"""
A bunch of variables that are intended
to be shared across the Flask codebase
"""

from flask import Flask
import db
import logging

MAIN_APP = Flask(__name__)
LOGGER = MAIN_APP.logger
LOGGER.setLevel(logging.ERROR)
MAIN_DB = db.Database(MAIN_APP).getDb()
MAIN_LOGGER = logging.getLogger('werkzeug')

POSSIBLE_NEEDS = [
    'N95',
    'N95s',
    'Gloves',
    'Safety Goggles',
    'Face Shields',
    'Surgical Masks',
    'Surgical Mask',
    'Disposable Booties',
    'Thermometers',
    'Thermometer',
    'Disinfectant Wipes',
    'Disinfectant Wipe',
    'Disposable Booties',
    'Currency'
]
