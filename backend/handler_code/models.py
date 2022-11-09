from django.db import models
from badges.models import Badge
from code_post.models import CodePost


class HandlerCode(models.Model):
    code_posts = models.ManyToManyField(to=CodePost, related_name="handler", blank=True)
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_code", default=1)
    amount = models.IntegerField(default=0)




