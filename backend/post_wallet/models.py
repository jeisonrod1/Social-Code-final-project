from django.db import models

from badges.models import Badge
from general_posts.models import GeneralPosts



def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class PostWallet(models.Model):
    TYPE_CHOICES = (
        ('Badger', 'Badger'),
        ('404-error', '404-error'),
    )
    type = models.CharField(max_length=100, choices=TYPE_CHOICES)
    icon = models.ImageField(blank=True, upload_to=badge_image_directory_path)
    post = models.ManyToManyField(to=GeneralPosts, related_name='wallet')
    badges = models.ManyToManyField(to=Badge, related_name='post_wallet')










