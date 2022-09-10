from .common.json import ModelEncoder

from .models import Account, ActivityVO


class ActivityVOEncoder(ModelEncoder):
    model = ActivityVO
    properties = [
        "id",
        "name",
        "description",
        "picture_url",
        "category",
    ]


class AccountEncoder(ModelEncoder):
    model = Account
    properties = [
        "id",
        "username",
        "email",
        "password",
        "first_name",
        "last_name",
    ]
