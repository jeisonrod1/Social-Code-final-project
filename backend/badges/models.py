from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class Badge(models.Model):
    type = models.CharField(max_length=100)
    icon = models.ImageField(blank=True, upload_to=badge_image_directory_path)
    cost = models.IntegerField(default=0)
    reward = models.IntegerField(default=0)

    def __str__(self):
        return f'ID {self.id} : {self.type}'


