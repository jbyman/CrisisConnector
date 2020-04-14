from flask_sqlalchemy import SQLAlchemy


class Database:
    db_url = 'postgresql://postgres@db:5432/help_directory'
    db = None

    def __init__(self, app):
        """
        Constructor that takes in the Flask App as a
        parameter. Initializes the SQLAlchemy connection
        to the PostgreSQL database
        """

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
        Executes a raw SQL query on the PostgreSQL database.
        With the Flask ORM, this should be seldom needed
        """

        rows = Database.db.session.execute(q)
        organizations = [row for row in rows]
        return organizations
