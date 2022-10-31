from django.db import models

from answers.models import Answers
from code_post.models import CodePost


class Comments(models.Model):
    content = models.TextField()
    code_post = models.ForeignKey(to=CodePost, on_delete=models.CASCADE, related_name='comments')
    answers = models.ManyToManyField(to=Answers, on_delete=models.CASCADE, related_name='answers')


