import os
import json
import requests
# from requests_oauthlib import OAuth1
# from yelp.client import Client

YELP_API_KEY = os.environ["YELP_API_KEY"]
YELP_URL = os.environ["YELP_URL"]
cors = "https://thingproxy.freeboard.io/fetch/"


# client = Client(YELP_API_KEY)

def get_yelp_list (category, location):
    url = f"{YELP_URL}search?location=${location}&categories=${category}"
    headers = {
        "Authorization": f"Bearer {YELP_API_KEY}",
    }
    final_url = f"{cors}{url}"
    # final_url = url
    response = requests.get(final_url, headers=headers)
    content = json.loads(response.content)

    return content


