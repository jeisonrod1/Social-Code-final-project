from django.contrib.auth import get_user_model
from django.db import models

from user.models import User

User = get_user_model()


class CodePost(models.Model):
    title = models.CharField(max_length=250)
    tags = models.CharField(max_length=300)
    language = models.CharField(max_length=250)
    difficulty = models.CharField(max_length=250)
    description = models.TextField()
    code = models.TextField()
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='codePost')

