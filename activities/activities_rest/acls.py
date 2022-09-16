import os
from yelpapi import YelpAPI


YELP_API_KEY = os.environ["YELP_API_KEY"]  # noqa: F401


def get_yelp_list(category, location):
    yelp_api = YelpAPI(YELP_API_KEY)
    response = yelp_api.search_query(categories=category, location=location)

    return response


def get_yelp_id(id):
    yelp_api = YelpAPI(YELP_API_KEY)
    response = yelp_api.business_query(id=id)
    return response
