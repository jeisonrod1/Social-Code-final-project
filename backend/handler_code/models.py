from django.db import models
from badges.models import Badge
from code_post.models import CodePost


class HandlerCode(models.Model):
    code_posts = models.ForeignKey(to=CodePost, on_delete=models.PROTECT, related_name="handler")
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_code")
    amount = models.IntegerField(default=0)
