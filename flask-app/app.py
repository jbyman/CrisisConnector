"""
Entrypoint for the webapp
"""

from flask import Flask, render_template
APP = Flask(__name__)


@APP.route('/')
@APP.route('/home')
def hello_world():
    """
    Entrypoint to the main application
    """

    return render_template('index.html')


if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
