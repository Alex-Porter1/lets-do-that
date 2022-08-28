import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "accounts.settings")
django.setup()

from accounts_rest.models import ActivityVO

def get_activities():
    response = requests.get("http://activities:8000/api/activities/")
    content = json.loads(response.content)
    print("ACTIVITIES POLLER DATA: ", content)
    for activity in content["activities"]:
        ActivityVO.objects.update_or_create(
            id = activity["id"],
            defaults={
                "name": activity["name"],
                "description": activity["description"],
                "picture_url": activity["picture_url"],
                "category": activity["category"],
            }
        )

def poll():
    while True:
        print('Account poller polling for data')
        try:
            get_activities()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()