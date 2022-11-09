from django.db import models
from badges.models import Badge
from comments.models import Comments


class HandlerComments(models.Model):
    comments = models.ManyToManyField(to=Comments, related_name="handler", blank=True)
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_comments")
    amount = models.IntegerField(default=0)
