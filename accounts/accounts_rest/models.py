from django.db import models

# Create your models here.

class ActivityVO(models.Model):
    import_href = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    picture_url = models.CharField(max_length=200)
    category = models.CharField(max_length=200)


class Account(models.Model):
    username = models.CharField(max_length=200, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)
    birthday = models.DateField()
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    activity = models.ForeignKey(
        ActivityVO,
        related_name="activity",
        on_delete=models.CASCADE,
    )