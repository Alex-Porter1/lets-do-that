from django.test import TestCase
from django.db import models


class FeatureTests(TestCase):
    def test_activity_model_exists(self):
        try:
            from activities_rest.models import Activity  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'activities.models.Activity'")

    def test_activity_model_has_char_name_field(self):
        try:
            from activities_rest.models import Activity

            name = Activity.name
            self.assertIsInstance(
                name.field,
                models.CharField,
                msg="Activity.name should be a character field",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'activities_rest.models'")
        except ImportError:
            self.fail("Could not find 'activities_rest.models.Activity'")
        except AttributeError:
            self.fail("Could not find 'Activity.name'")

    def test_activity_model_has_text_description_field(self):
        try:
            from activities_rest.models import Activity

            description = Activity.description
            self.assertIsInstance(
                description.field,
                models.TextField,
                msg="Activity.description should be a text field",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'activities_rest.models'")
        except ImportError:
            self.fail("Could not find 'activities_rest.models.Activity'")
        except AttributeError:
            self.fail("Could not find 'Activity.description'")

    def test_activity_model_has_char_picture_url_field(self):
        try:
            from activities_rest.models import Activity

            picture_url = Activity.picture_url
            self.assertIsInstance(
                picture_url.field,
                models.CharField,
                msg="Activity.picture_url should be a character field",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'activities_rest.models'")
        except ImportError:
            self.fail("Could not find 'activities_rest.models.Activity'")
        except AttributeError:
            self.fail("Could not find 'Activity.name'")

    def test_project_model_has_category_related_name_of_projects(self):
        try:
            from activities_rest.models import Activity

            category = Activity.category
            self.assertEqual(
                category.field.related_query_name(),
                "categories",
                msg="Activity.category should have related name 'categories'"
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'Activity.models'")
        except ImportError:
            self.fail("Could not find 'Activity.models.Activity'")
        except AttributeError:
            self.fail("Could not find 'Activity.members'")

    def test_category_model_exists(self):
        try:
            from activities_rest.models import Category
        except ModuleNotFoundError:
            self.fail("Could not find 'activities_rest.models.Category'")

    def test_category_model_has_char_name_field(self):
        try:
            from activities_rest.models import Category

            name = Category.name
            self.assertIsInstance(
                name.field,
                models.CharField,
                msg="Category.name should be a character field",
            )
        except ModuleNotFoundError:
            self.fail("Could not find 'activities_rest.models'")
        except ImportError:
            self.fail("Could not find 'activities_rest.models.Category'")
        except AttributeError:
            self.fail("Could not find 'Activity.name'")
