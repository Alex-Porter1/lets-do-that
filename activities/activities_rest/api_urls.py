from django.urls import path

from .views import api_list_activities, api_list_categories, api_list_ratings

urlpatterns = [
    path("activities/", api_list_activities, name="api_list_activities"),
    path("categories/", api_list_categories, name="api_list_categories"),
    path("ratings/", api_list_ratings, name="api_list_ratings")
]