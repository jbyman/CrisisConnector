"""
Entrypoint for the webapp
"""

from flask import render_template, request, jsonify, abort
import config
import models
import matching
import json
import utils

APP = config.MAIN_APP
DB = config.MAIN_DB


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
        rows = []
        orgs = models.Organization.query.all()
        for org in orgs:
            rows.append(org.serialize())
        return jsonify(rows)
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
    latitude = r['latitude']
    longitude = r['longitude']
    instructions = r['instructions']
    address = r['address']
    accepts_opened = r['accepts_opened']
    needs = r['needs']
    city = r['city']
    state = r['state']

    try:
        org = models.Organization(
            name=name,
            contact_email=email,
            description=description,
            image_url=image_url,
            zip_code=zip_code,
            latitude=latitude,
            longitude=longitude,
            instructions=instructions,
            address=address,
            accepts_opened=accepts_opened,
            needs=needs,
            city=city,
            state=state)

        DB.session.add(org)
        DB.session.commit()

        return {'added': True}
    except Exception as e:
        abort(500, description=e)


@APP.route('/match')
def match_with_organization():
    """
    API endpoint to take some user's data and match them up with
    """

    r = request.get_json()
    latitude = r['latitude']
    longitude = r['longitude']
    donating = r['donating']

    #
    # Given the user's information, find the best donation center for them
    #

    best_match = matching.find_best_match(latitude, longitude, donating)
    return {'best_match': best_match}


# @APP.errorhandler(500)
# def internal_server_error_handler(error):
# return jsonify(error=str(error)), 500

if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
