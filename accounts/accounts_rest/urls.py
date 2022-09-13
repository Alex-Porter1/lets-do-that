from django.urls import path

from .views import (
    api_accounts,
    api_show_accounts,
    api_user_token,
)

urlpatterns = [
    path("accounts/", api_accounts, name="api_accounts"),
    path("accounts/<int:pk>/", api_show_accounts, name="api_show_accounts"),
    path("tokens/mine/", api_user_token, name="api_user_token")
]
