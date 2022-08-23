import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from accounts_rest.models import ActivityVO

def get_activities():
    response = requests.get("http://localhost:8090/api/activities/")
    content = json.loads(response.content)
    print("ACTIVITIES POLLER DATA: ", content)
    for activity in content["activities"]:
        ActivityVO.objects.update_or_create(
            defaults={
                "name": activity["name"],
                "description": activity["description"],
                "picture_url": activity["picture_url"],
                "category": activity["category"],
                "rating": activity["rating"],
            }
        )

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_activities()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()