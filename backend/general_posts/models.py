from django.contrib.auth.models import User
from django.db import models

from comments.models import Comments


class GeneralPosts(models.Model):
    content = models.TextField()
    userGeneralPost = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='generalPosts')
    commentsToGeneralPost = models.ManyToManyField(to=Comments, on_delete=models.CASCADE, related_name='commentsToGeneralPosts')