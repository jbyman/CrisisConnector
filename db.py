from flask_sqlalchemy import SQLAlchemy


class Database:
    def __init__(self, app):
        self.db_url = 'postgresql://postgres@db:5432/help_directory'  # This should eventually go in an ENV variable
        self.db = SQLAlchemy(app)

    def getDbURL(self):
        return self.db_url

    def query(self, q):
        rows = self.db.session.execute(q)
        organizations = [row for row in rows]
        return organizations
