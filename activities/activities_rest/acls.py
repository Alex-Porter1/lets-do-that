import os
import json
import requests
from requests_oauthlib import OAuth1

YELP_API_KEY = os.environ["YELP_API_KEY"]

ICON_API_KEY = os.environ["ICON_API_KEY"]
ICON_SECRET = os.environ["ICON_SECRET"]

def get_icon(term):

    auth = OAuth1(ICON_API_KEY, ICON_SECRET)
    endpoint = f'http://api.thenounproject.com/icons/{term}'

    response = requests.get(endpoint, auth=auth)
    print(response.content)
    content = json.loads(response.content)

    icon = content["icons"][0]["preview_url"]

    return icon
