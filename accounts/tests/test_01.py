from unittest import TestCase
from django.db import models
import django
import os
from django.test import SimpleTestCase

# os.environ["DJANGO_SETTINGS_MODULE"] = "accounts.settings"

class FeatureTests(TestCase):
    def test_accounts_model_exists(self):
        try:
            from accounts_rest.models import Account
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.Accounts'")

    def test_activityvo_model_exists(self):
        try:
            from accounts_rest.models import ActivityVO
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.ActivityVO'")