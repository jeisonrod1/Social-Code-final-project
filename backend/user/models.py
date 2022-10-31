from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    country = models.CharField(max_length=250, blank=True)

    def __str__(self):
        return self.username
