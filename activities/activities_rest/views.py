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
        "id",
        "name",
        "description"
    ]

class RatingEncoder(ModelEncoder):
    model = Rating
    properties = [
        "id",
        "value",
        "description"
    ]


class ActivityListEncoder(ModelEncoder):
    model = Activity
    properties = [
        "id",
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
        content = json.loads(request.body)
        try:
            category = Category.objects.get(id=content["category"])
            content["category"] = category
        except Category.DoesNotExist:
            return JsonResponse(
                {"message": "Category does not exist"},
                status=400
            )
        if content["rating"]:
            rating = Rating.objects.get(id=content["rating"])
            content["rating"] = rating
        else:
            content["rating"] = "No rating given"
        try:
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

@require_http_methods(["GET", "POST"])
def api_list_categories(request):
    if request.method == "GET":
        categories = Category.objects.all().order_by("name")
        return JsonResponse(
            {"categories": categories},
            encoder=CategoryEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            category = Category.objects.create(**content)
            return JsonResponse(
                category,
                encoder=CategoryEncoder,
                safe=False,
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Category ID already exists"},
                status=400,
            )


@require_http_methods(["GET"])
def api_list_ratings(request):
    if request.method == "GET":
        ratings = Rating.objects.all()
        return JsonResponse(
            {"ratings": ratings},
            encoder=RatingEncoder,
        )
    else:
        return JsonResponse(
            {"message": "Rating doesn't exist"},
            status=400
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_activities(request, pk):
    if request.method == "GET":
        activity = Activity.objects.get(id=pk)
        return JsonResponse(
            activity,
            encoder=ActivityListEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        content = json.loads(request.body)
        Activity.objects.filter(id=pk).update(**content)
        activity = Activity.objects.get(id=pk)
        return JsonResponse(
            activity,
            encoder=ActivityListEncoder,
            safe=False,
        )
    else:
        count, _ = Activity.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_activities(request):
    if request.method == "GET":
        activities = Activity.objects.all().order_by("name")
        return JsonResponse(
            {"activities": activities},
            encoder=ActivityListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            category = Category.objects.get(id=content["category"])
            content["category"] = category
        except Category.DoesNotExist:
            return JsonResponse(
                {"message": "Category does not exist"},
                status=400
            )
        if content["rating"]:
            rating = Rating.objects.get(id=content["rating"])
            content["rating"] = rating
        else:
            content["rating"] = "No rating given"
        try:
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


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_categories(request, pk):
    if request.method == "GET":
        category = Category.objects.get(id=pk)
        return JsonResponse(
            category,
            encoder=CategoryEncoder,
            safe=False,
        )
    elif request.method == "PUT":
        content = json.loads(request.body)
        Category.objects.filter(id=pk).update(**content)
        category = Category.objects.get(id=pk)
        return JsonResponse(
            category,
            encoder=CategoryEncoder,
            safe=False,
        )
    else:
        count, _ = Category.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

