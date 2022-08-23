from django.urls import path

from .views import api_list_activities, api_list_categories, api_list_ratings, api_show_activities, api_show_categories

urlpatterns = [
    path("activities/", api_list_activities, name="api_list_activities"),
    path("categories/", api_list_categories, name="api_list_categories"),
    path("categories/<int:pk>/", api_show_categories, name="api_show_categories"),
    path("ratings/", api_list_ratings, name="api_list_ratings"),
    path("activities/<int:pk>/", api_show_activities, name="api_show_activities")
]