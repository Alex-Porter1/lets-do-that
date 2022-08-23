from django.urls import path

from .views import (
    api_accounts,
)

urlpatterns = [
    path("accounts/", api_accounts, name="api_accounts"),
]