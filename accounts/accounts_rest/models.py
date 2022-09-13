from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class ActivityVO(models.Model):
    import_href = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    picture_url = models.CharField(max_length=200)
    category = models.CharField(max_length=200)


class Account(AbstractUser):
    email = models.EmailField(unique=True)
    # birthday = models.DateField()
    # activity = models.ForeignKey(
    #     ActivityVO,
    #     related_name="activity",
    #     on_delete=models.CASCADE,
    #     blank=True,
    #     null=True,
    # )

    def save(self, *args, **kwargs):
        self.set_password(self.password)
        super().save(*args, **kwargs)
