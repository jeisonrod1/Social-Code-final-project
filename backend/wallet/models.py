from django.contrib.auth import get_user_model
from django.db import models

from badges.models import Badge

User = get_user_model()


def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class Wallet(models.Model):
    TYPE_CHOICES = (
        ('Badger', 'Badger'),
        ('404-error', '404-error'),
    )
    type = models.CharField(max_length=100, choices=TYPE_CHOICES)
    amount = models.IntegerField(default=0)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='wallet')
    badges = models.ManyToManyField(to=Badge, related_name='wallet', blank=True)










