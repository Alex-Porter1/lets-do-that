from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class Rating(models.Model):
    value = models.SmallIntegerField()
    description = models.TextField()


class Activity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    picture_url = models.CharField(max_length=256)
    category = models.ForeignKey(
        Category,
        related_name = "categories",
        on_delete=models.PROTECT
    )
    rating = models.ForeignKey(
        Rating,
        related_name = "ratings",
        on_delete=models.PROTECT
    )
