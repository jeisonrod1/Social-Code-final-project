from django.db import models

from answers.models import Answers
from code_post.models import CodePost


class Comments(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    code_post = models.ForeignKey(to=CodePost, on_delete=models.CASCADE, related_name='answersToComments')
    answers = models.ManyToManyField(to=Answers, blank=True, related_name='commentsToAnswers')


