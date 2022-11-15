from django.contrib.auth import get_user_model
from django.db import models
from code_post.models import CodePost
from user.models import User

User = get_user_model()


class Answers(models.Model):
    textContent = models.TextField(blank=True)
    code = models.TextField(blank=True)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(to=CodePost, on_delete=models.CASCADE, related_name='postComments', blank=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='authoredPostComments', blank=True)


    def __str__(self):
        return f'ID {self.id}: {self.author}'
