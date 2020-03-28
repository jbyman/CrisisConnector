"""
Entrypoint for the webapp
"""

from flask import Flask, render_template, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
import db
import models

APP = Flask(__name__)
DB = db.Database(APP)


@APP.route('/')
def empty_response():
    """
    Invalid endpoint
    """

    return ('', 204)


@APP.route('/organizations')
def get_organizations():
    """
    API endpoint to get all organizations
    """

    try:
        orgs = models.Organization.query.all()
        return jsonify([e.serialize() for e in orgs])
    except Exception as e:
        abort(500, description=e)


@APP.route('/login')
def login():
    """
    API endpoint to log in a user
    """
    return "Nice! You're logged in"


@APP.route('/signup')
def signup():
    """
    API endpoint to sign up a new user
    """
    return "Nice! You just signed up"


@APP.route('/donate')
def donate():
    """
    API endpoint to sign up a new user
    """

    return "Nice! You donated stuff"


@APP.route('/add-organization')
def add_organization():
    """
    API endpoint to sign up a new organization
    """

    r = request.get_json()
    name = r['name']
    email = r['email']
    description = r['description']
    image_url = r['image_url']
    zip_code = r['zip_code']

    try:
        org = models.Organization(
            name=name,
            contact_email=email,
            description=description,
            image_url=image_url,
            zip_code=zip_code)

        DB.getDb().session.add(org)
        DB.getDb().session.commit()

        return {'added': True}
    except Exception as e:
        abort(500, description=e)

@APP.errorhandler(500)
def internal_server_error_handler(error):
    return jsonify(error=str(error)), 500

if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
