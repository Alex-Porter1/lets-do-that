from django.test import TestCase
from django.contrib import admin

class FeatureTests(TestCase):
    def test_black_installed(self):
        try:
            import black
        except ModuleNotFoundError:
            self.fail("Could not find 'black' installed in the environment")


# class FeatureTests(TestCase):
#      def test_account_registered_with_admin(self):
#         try:
#             from accounts_rest.models import Account

#             self.assertTrue(
#                 admin.site.is_registered(Account),
#                 msg="Account.models.Account is not registered with the admin",
#             )
#         except ModuleNotFoundError:
#             self.fail("Could not find 'accounts_rest.models'")
#         except ImportError:
#             self.fail("Could not find 'accounts_rest.models.Account'")