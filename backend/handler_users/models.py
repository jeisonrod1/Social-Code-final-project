from django.db import models
from django.contrib.auth import get_user_model

from badges.models import Badge

User = get_user_model()


class HandlerUsers(models.Model):
    users = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name="handler")
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_users")
    amount = models.IntegerField(default=0)
