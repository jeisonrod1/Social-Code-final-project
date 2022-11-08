from django.db import models


def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class Badge(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(blank=True, upload_to=badge_image_directory_path)
    price = models.IntegerField(default=0)








