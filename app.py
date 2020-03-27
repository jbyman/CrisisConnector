"""
Entrypoint for the webapp
"""

from flask import Flask, render_template
from db import Database
APP = Flask(__name__)
DB = Database(APP)
APP.config['SQLALCHEMY_DATABASE_URI'] = DB.getDbURL()


@APP.route('/')
@APP.route('/home')
def hello_world():
    """
    Entrypoint to the main application
    """

    rows = DB.query("SELECT * FROM organizations")
    APP.logger.info('Fetching organizations...')
    return render_template('index.html', data=rows)


if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
