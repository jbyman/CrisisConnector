# from app import DB as db
import app
import utils

db = app.DB.getDb()


class Organization(db.Model):

    __tablename__ = 'organizations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    contact_email = db.Column(db.String())
    description = db.Column(db.String())
    zip_code = db.Column(db.String())
    image_url = db.Column(db.String())

    def __init__(self, name, contact_email, description, image_url, zip_code):
        self.id = utils.get_next_id()
        self.name = name
        self.contact_email = contact_email
        self.description = description
        self.image_url = image_url
        self.zip_code = zip_code

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'contact_email': self.contact_email,
            'description': self.description,
            'image_url': self.image_url,
            'zip_code': self.zip_code,
        }
