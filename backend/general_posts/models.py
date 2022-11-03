from django.contrib.auth import get_user_model
from django.db import models

from comments.models import Comments
from user.models import User

User = get_user_model()


class GeneralPosts(models.Model):
    title = models.CharField(max_length=250)
    tags = models.CharField(max_length=300)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    userGeneralPost = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='generalPosts')
    commentsToGeneralPost = models.ManyToManyField(to=Comments, blank=True, related_name='commentsToGeneralPosts')