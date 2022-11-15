from django.db import models
from django.contrib.auth import get_user_model
from answers.models import Answers


User = get_user_model()

class Comments(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    target_comment = models.ForeignKey(to=Answers, blank=True, on_delete=models.CASCADE, related_name='replies')
    author = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='commentComments', blank=True)


