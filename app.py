"""
Entrypoint for the webapp
"""


import re
import json
from flask import request, jsonify, abort
import config
import models
import matching
from urllib.request import Request, urlopen
from typing import Tuple, Dict
from flask_cors import CORS

APP = config.MAIN_APP
DB = config.MAIN_DB
log = config.LOGGER

CORS(APP)

@APP.route('/')
def empty_response() -> Tuple[str, int]:
    """
    Invalid endpoint
    """

    return ('', 204)


@APP.route('/organizations')
def get_organizations() -> Dict[str, str]:
    """
    API endpoint to get all organizations
    """
    log.info('List organizations')

    try:
        rows = []
        zipcode = request.args.get('zipcode')
        if zipcode is not None:
            orgs = models.Organization.query.filter_by(zip_code=zipcode).all()
        else:
            orgs = models.Organization.query.all()
        for org in orgs:
            rows.append(org.serialize())
        return jsonify(rows)
    except Exception as e:
        abort(500, description=e)


@APP.route('/add-organization')
def add_organization() -> Dict[str, bool]:
    """
    API endpoint to sign up a new organization
    """
    log.info('Add organization')

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
            city=city,
            state=state
        )

        DB.session.add(org)
        DB.session.commit()

        #
        # Now that we've added an organization, let's
        # add any needs associated with it
        #

        process_needs(org.id, needs)

        return {'added': True}
    except Exception as e:
        abort(500, description=e)


@APP.route('/add-organizations')
def bulk_add_organizations() -> Dict[str, bool]:
    """
    API endpoint to fetch the list of organizations from FindTheMasks
    and add them to our Organizations store
    """
    log.info('Add organizations')

    try:
        json_data_url = "https://findthemasks.com/data.json"
        req = Request(json_data_url, headers={'User-Agent': 'Mozilla/5.0'})
        web_byte = urlopen(req).read()
        json_data = web_byte.decode('utf-8')
        data = json.loads(json_data)

        # first two rows of data.json is metadata
        org_data = data["values"][2:]
        entries = []
        for row in org_data:
            if row[0] != "x":
                continue
            # some numbers like street address might appear more than once
            re_zipcode = re.findall('\d+', row[6])
            re_email = re.findall(r'[\w\.-]+@[\w\.-]+', row[10])
            entry = models.Organization(name = row[5],
                                        address=row[7],
                                        city=row[8],
                                        state=row[9],
                                        zip_code='' if len(re_zipcode) < 2 and len(re_zipcode[1]) != 5 else re_zipcode[1],
                                        instructions=row[10],
                                        accepts_opened=row[12],
                                        latitude=row[13],
                                        longitude=row[14],
                                        contact_email='' if re_email == [] else re_email[0],
                                        description='',
                                        image_url='',
                                    )
            entries.append(entry)

        DB.session.add_all(entries)
        DB.session.commit()

        return {'ok': True}
    except Exception as e:
        abort(500, description=e)


@APP.route('/match', methods = ['GET', 'POST'])
def match_with_organization() -> Dict[str, Dict]:
    """
    API endpoint to take some user's data and match them up with
    """
    log.info('Match')

    r = request.get_json()
    latitude = r['latitude']
    longitude = r['longitude']
    donating = r['donating']

    #
    # Given the user's information, find the best donation center for them
    #

    donating = donating.split(',')
    for donation in donating:
        best_match = matching.find_best_match(latitude, longitude, donation)

        if best_match != None:
            return {'best_match': best_match}
        elif best_match == None and donation.lower() == 'money':
            closest_match = matching.find_closest(latitude, longitude)
            return {'best_match': closest_match}


@APP.errorhandler(500)
def internal_server_error_handler(error) -> Dict[str, str]:
    return jsonify(error=str(error)), 500


def process_needs(org_id: int, needs: str) -> None:
    """
    Given a list of needs for an organization,
    insert them into the EAV organization_needs table.
    Returns whether the operation succeeded and, if not, the
    error message
    """

    items_needed = needs.split(',')
    for item in items_needed:
        if item.strip() in config.POSSIBLE_NEEDS:
            try:
                org_need = models.Need(
                    org_id=org_id,
                    need=item
                )

                DB.session.add(org_need)
                DB.session.commit()
            except Exception as e:
                log.error(e)

if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
