from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class Activity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    picture_url = models.CharField(max_length=256)
    category = models.ForeignKey(
        Category,
        related_name="categories",
        on_delete=models.PROTECT
    )


class Rating(models.Model):
    value = models.PositiveSmallIntegerField(
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1),
        ]
    )
    description = models.TextField()
    activity = models.ForeignKey(
        Activity,
        related_name="ratings",
        on_delete=models.CASCADE,
    )
