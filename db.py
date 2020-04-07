from flask_sqlalchemy import SQLAlchemy


class Database:

    # postgresql://postgres@host.docker.internal:5432/help_directory
    # https://dev.to/bufferings/access-host-from-a-docker-container-4099
    # http://localhost:5000/organizations
    db_url = 'postgresql://postgres@172.17.0.2:5432/help_directory'  # This should eventually go in an ENV variable
    db = None

    def __init__(self, app):
        app.config['SQLALCHEMY_DATABASE_URI'] = self.db_url
        Database.db = SQLAlchemy(app)

    def getDbURL(self):
        """
        Returns the Postgres DB connection URL
        """

        return self.db_url

    def getDb(self):
        """
        Returns the SQLAlchemy DB object
        """

        return Database.db

    @staticmethod
    def query(q):
        """
        Returns the Postgres DB connection URL
        """

        rows = Database.db.session.execute(q)
        organizations = [row for row in rows]
        return organizations
