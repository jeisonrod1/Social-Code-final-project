from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class FriendRequest(models.Model):
    request = models.ManyToManyField(to=User, on_delete=models.CASCADE, related_name="friend_request_requester")
    receiver = models.ManyToManyField(to=User, on_delete=models.CASCADE, related_name="friend_request_receiver")
    status = models.CharField(max_length=1, default="P")
