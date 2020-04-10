from flask import Flask
import db

MAIN_APP = Flask(__name__)
LOGGER = MAIN_APP.logger
MAIN_DB = db.Database(MAIN_APP).getDb()

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
    'Disposable Booties'
]
