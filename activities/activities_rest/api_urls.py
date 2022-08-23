from django.urls import path

from .views import api_list_activities

urlpatterns = [
    path("activities/", api_list_activities, name="api_list_activities"),
]