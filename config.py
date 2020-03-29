from flask import Flask
import db

MAIN_APP = Flask(__name__)
MAIN_DB = db.Database(MAIN_APP).getDb()
