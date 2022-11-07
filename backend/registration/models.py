import random
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    email = models.EmailField()
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    code = models.CharField(max_length=5, default=code_generator)
