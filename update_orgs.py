import requests

try:
    headers = {'Content-type': 'application/json'}
    params = {
    }
    r = requests.get(
        'http://localhost:5000/update-orgs',
        json=params,
        headers=headers).json()
    print("Successfully enqueued request")
except Exception as e:
    print(e)
