import utils
import config
db = config.MAIN_DB


class Organization(db.Model):

    __tablename__ = 'organizations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    contact_email = db.Column(db.String())
    description = db.Column(db.String())
    zip_code = db.Column(db.String())
    image_url = db.Column(db.String())
    latitude = db.Column(db.String())
    longitude = db.Column(db.String())
    instructions = db.Column(db.String())
    address = db.Column(db.String())
    accepts_opened = db.Column(db.String())
    city = db.Column(db.String())
    state = db.Column(db.String())
    needs = db.Column(db.String())

    def __init__(self, name, contact_email, description, image_url, zip_code,
                 latitude, longitude, instructions, address, accepts_opened,
                 city, state, needs):
        self.id = utils.get_next_id()
        self.name = name
        self.contact_email = contact_email
        self.description = description
        self.image_url = image_url
        self.zip_code = zip_code
        self.latitude = latitude
        self.longitude = longitude
        self.instructions = instructions
        self.address = address
        self.accepts_opened = accepts_opened
        self.city = city
        self.state = state
        self.needs = needs

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'contact_email': self.contact_email if not None else '',
            'description': self.description if not None else '',
            'image_url': self.image_url if not None else '',
            'zip_code': self.zip_code if not None else '',
            'latitude': self.latitude if not None else '',
            'longitude': self.longitude if not None else '',
            'latitude': self.latitude if not None else '',
            'longitude': self.longitude if not None else '',
            'instructions': self.instructions if not None else '',
            'address': self.address if not None else '',
            'accepts_opened': self.accepts_opened if not None else '',
            'city': self.city if not None else '',
            'state': self.state if not None else '',
            'needs': self.needs if not None else ''
        }


class Need(db.Model):
    __tablename__ = 'organization_needs'

    id = db.Column(db.Integer, primary_key=True)
    need = db.Column(db.String())

    def __init__(self, org_id, need):
        self.id = org_id
        self.need = need

    def __repr__(self):
        return '<need {}>'.format(self.need)

    def serialize(self):
        return {
            'id' : self.id,
            'name': self.name
        }

