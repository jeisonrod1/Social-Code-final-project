from django.contrib.auth.models import User
from django.db import models
from code_post.models import CodePost

class Answers(models.Model):
    name= models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    answers = models.ForeignKey(to=CodePost, on_delete=models.CASCADE, related_name='answers')
    answersOfUser = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='answersOfUser')


    def __str__(self):
        return f'ID {self.id}: {self.name}'
