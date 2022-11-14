from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class FriendRequest(models.Model):
    request = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="friend_request_requester", blank=True, null=True)
    receiver = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="friend_request_receiver", blank=True, null=True)
    status = models.CharField(max_length=1, default="P")
