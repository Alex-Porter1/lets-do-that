from django.urls import path

from .views import (
    api_accounts,
    api_show_accounts,
)

urlpatterns = [
    path("accounts/", api_accounts, name="api_accounts"),
    path("accounts/<int:pk>/", api_show_accounts, name="api_show_accounts"),
]