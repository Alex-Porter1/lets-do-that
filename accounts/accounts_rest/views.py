from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import AccountEncoder

from .models import Account, ActivityVO

# Create your views here.

@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response

@require_http_methods(["GET", "POST"])
def api_accounts(request):
    if request.method == "GET":
        accounts = Account.objects.all()
        return JsonResponse(
            {"accounts": accounts},
            encoder=AccountEncoder,
        )
    else:
        content = json.loads(request.body)
        # try:
        #     activity_data = content["activity"]
        #     activity = ActivityVO.objects.get(id=activity_data)
        #     content["activity"] = activity
        # except ActivityVO.DoesNotExist:
        #     response = JsonResponse(
        #         {"message": "Activity doesn't exist"}
        #     )
        #     response.status_code = 400
        #     return response

        account = Account.objects.create(**content)
        return JsonResponse(
          account,
          encoder=AccountEncoder,
          safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_accounts(request, pk):
    if request.method == "GET":
        account = Account.objects.filter(id=pk)
        return JsonResponse(
            account,
            encoder=AccountEncoder,
            safe=False,
        )
    else:
        count, _ = Account.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})