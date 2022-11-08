from django.db import models
from badges.models import Badge
from general_posts.models import GeneralPosts


class HandlerPosts(models.Model):
    posts = models.ForeignKey(to=GeneralPosts, on_delete=models.PROTECT, related_name="handler")
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_posts")
    amount = models.IntegerField(default=0)
