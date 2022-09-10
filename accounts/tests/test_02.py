from django.test import SimpleTestCase


class FeatureTests(SimpleTestCase):
    def test_accounts_project_created(self):
        try:
            from accounts.settings import INSTALLED_APPS  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find the Django project 'accounts'")

