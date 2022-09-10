from unittest import TestCase
from django.contrib import admin


class FeatureTests(TestCase):

# Perla Tests #

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

    def test_activityvo_registered_with_admin(self):
        try:
            from accounts_rest.models import ActivityVO

            self.assertTrue(
                admin.site.is_registered(ActivityVO),
                msg="Account.models.ActivityVO is not registered with the admin",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'accounts_rest.models'")
        except ImportError:
            self.fail("Could not find 'accounts_rest.models.ActivityVO'")
