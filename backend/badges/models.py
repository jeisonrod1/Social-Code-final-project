from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class Badge(models.Model):
    name = models.CharField(max_length=100)
    amount = models.IntegerField(default=0)
    icon = models.ImageField(blank=True, upload_to=badge_image_directory_path)
    owned = models.ManyToManyField(to=User, related_name="badges", blank=True)









