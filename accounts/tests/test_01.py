from unittest import TestCase
from django.contrib import admin


class FeatureTests(TestCase):
    def test_accounts_model_exists(self):
        try:
            from accounts_rest.models import Account  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.Accounts'")

    # Perla Tests #

    def test_activity_vo_model_exists(self):
        try:
            from accounts_rest.models import ActivityVO  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models.ActivityVO'")

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
