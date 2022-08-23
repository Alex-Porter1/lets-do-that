from django.shortcuts import render
from .models import Activity, Category, Rating
import json
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from sqlite3 import IntegrityError
# Create your views here.

class CategoryEncoder(ModelEncoder):
    model = Category
    properties = [
        "name",
        "description"
    ]

class RatingEncoder(ModelEncoder):
    model = Rating
    properties = [
        "value",
        "description"
    ]


class ActivityListEncoder(ModelEncoder):
    model = Activity
    properties = [
        "name",
        "description",
        "picture_url",
        "category",
        "rating",
    ]
    encoders = {
        "category": CategoryEncoder(),
        "rating": RatingEncoder()
    }


@require_http_methods(["GET", "POST"])
def api_list_activities(request):
    if request.method == "GET":
        activities = Activity.objects.all().order_by("name")
        return JsonResponse(
            {"activities": activities},
            encoder=ActivityListEncoder
        )
    else:
        try:
            category = Category.objects.get(id=content["category"])
            content["category"] = category
        except Category.DoesNotExist:
            return JsonResponse(
                {"message": "Category does not exist"},
                status=400
            )
        try:
            rating = Rating.objects.get(id=content["rating"])
            content["rating"] = rating
        except Rating.DoesNotExist:
            return JsonResponse(
                {"message": "Rating does not exist"},
                status=400
            )
        try:
            content = json.loads(request.body)
            activity = Activity.objects.create(**content)
            return JsonResponse(
                activity,
                encoder=ActivityListEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Activity ID already exists"},
                status=400,
            )