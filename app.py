"""
Entrypoint for the webapp
"""

from flask import Flask, render_template
APP = Flask(__name__, static_folder="templates/static")


@APP.route('/api')
def api():
    """
        a mock api endpoint
    """

    return "this is mock api call"


@APP.route('/', defaults={'u_path': ''})
@APP.route('/<path:u_path>')
def hello_world(u_path):
    print(u_path)

    """
    Entrypoint to the main application
    """

    return render_template('index.html')


if __name__ == '__main__':
    APP.run(debug=True, host='0.0.0.0')
