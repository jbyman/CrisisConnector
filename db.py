from flask_sqlalchemy import SQLAlchemy


class Database:
    def __init__(self, app):
        self.db_url = 'postgresql://postgres@db:5432/help_directory'  # This should eventually go in an ENV variable
        app.config['SQLALCHEMY_DATABASE_URI'] = self.db_url
        self.db = SQLAlchemy(app)

    def getDbURL(self):
        """
        Returns the Postgres DB connection URL
        """

        return self.db_url

    def getDb(self):
        """
        Returns the SQLAlchemy DB object
        """

        return self.db

    def query(self, q):
        """
        Returns the Postgres DB connection URL
        """

        rows = self.db.session.execute(q)
        organizations = [row for row in rows]
        return organizations
