import json
import requests

with open('data_formatted.json') as f:
    data = json.load(f)['rows']
    headers = {'Content-type': 'application/json'}

    for d in data:
        params = {
            'name':
            d['name'] if 'name' in d else '',
            'email':
            d['email'] if 'email' in d else '',
            'description':
            d['description'] if 'description' in d else '',
            'image_url':
            d['image_url'] if 'image_url' in d else '',
            'zip_code':
            d['zip_code'] if 'zip_code' in d else '',
            'latitude':
            d['latitude'] if 'latitude' in d else '',
            'longitude':
            d['longitude'] if 'longitude' in d else '',
            'instructions':
            d['instructions'] if 'instructions' in d else '',
            'address':
            d['address'] if 'address' in d else '',
            'accepts_opened':
            d['accepts_opened'] if 'accepts_opened' in d else '',
            'needs':
            d['needs'] if 'needs' in d else '',
            'city':
            d['city'] if 'city' in d else '',
            'state':
            d['state'] if 'state' in d else ''
        }

        try:
            r = requests.get(
                'http://localhost:5000/add-organization',
                json=params,
                headers=headers).json()
            print("Successfully sent to " + d['name'])
        except Exception as e:
            print(e)
            continue
