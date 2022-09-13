from django.urls import path

from .views import api_list_activities, api_list_categories, api_list_ratings
from .views import api_show_activities, api_show_categories, api_show_ratings, api_yelp_query

urlpatterns = [
    path(
        "activities/", api_list_activities, name="api_list_activities"
    ),
    path(
        "activities/<int:pk>/", api_show_activities, name="api_show_activities"
    ),
    path(
        "categories/", api_list_categories, name="api_list_categories"
    ),
    path(
        "categories/<int:pk>/", api_show_categories, name="api_show_categories"
    ),
    path(
        "ratings/", api_list_ratings, name="api_list_ratings"
    ),
    path(
        "ratings/<int:pk>/", api_show_ratings, name="api_show_ratings"
    ),
    path(
        "yelp/get/", api_yelp_query, name="api_yelp_query"
    ),
]
