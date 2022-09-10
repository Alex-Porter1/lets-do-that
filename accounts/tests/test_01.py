import imp
from unittest import TestCase
from django.contrib import admin



#os.environ["DJANGO_SETTINGS_MODULE"] = "accounts.settings"


class FeatureTests(TestCase):
    def test_accounts_model_exists(self):
        try:
            from accounts_rest.models import Account
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.Accounts'")

    def test_activity_vo_model_exists(self):
        try:
            from accounts_rest.models import ActivityVO
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.ActivityVO'")


#Perla Tests #


    def test_account_registered_with_admin(self):
        try:
            from accounts_rest.models import Account

            self.assertTrue(
                admin.site.is_registered(Account),
                msg="Account.models.Account is not registered with the admin",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models'")
        except ImportError:
            self.fail("Could not find 'accounts_rest.models.Account'")

    def test_accounts_rest_app_created(self):
        try:
            from accounts.settings import INSTALLED_APPS
        except ModuleNotFoundError:
            self.fail("Could not find the Django project 'accounts_rest'")

    