from django.db import models
from django.contrib.auth import get_user_model
from answers.models import Answers
from code_post.models import CodePost


User = get_user_model()


class Comments(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    code_post = models.ForeignKey(to=CodePost, on_delete=models.CASCADE, related_name='answersToComments', blank=True)
    answers = models.ManyToManyField(to=Answers, blank=True, related_name='commentsToAnswers')
    user = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='comments', blank=True)


