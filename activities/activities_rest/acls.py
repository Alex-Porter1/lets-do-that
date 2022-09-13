import os
import json
import requests
from yelpapi import YelpAPI

YELP_API_KEY = os.environ["YELP_API_KEY"]
YELP_URL = os.environ["YELP_URL"]
# cors = "https://thingproxy.freeboard.io/fetch/"
# cors = "https://cors-anywhere.herokuapp.com/"


# client = Client(YELP_API_KEY)

def get_yelp_list (category, location):
    yelp_api = YelpAPI(YELP_API_KEY)
    response = yelp_api.search_query(categories=category, location=location)
    # print("response", response)
    # content = json.loads(response.content)
    # print("content:", content)

    return response

# def get_yelp_list (category, location):
#     url = f"{YELP_URL}search?location=${location}&categories=${category}"
#     headers = {
#         "Authorization": f"Bearer {YELP_API_KEY}",
#     }
#     final_url = f"{cors}{url}"
#     # final_url = url
#     response = requests.get(final_url, headers=headers)
#     content = json.loads(response.content)
#     print("final url", final_url)

#     return content


