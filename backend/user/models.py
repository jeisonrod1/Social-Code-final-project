from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


def user_directory_path(instance, filename):
    return f'avatar {instance.id}/{filename}'

class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    location = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    about_me = models.TextField(blank=True)
    social_media = models.CharField(max_length=600, blank=True)
    experience = models.CharField(max_length=400, blank=True)
    company = models.CharField(max_length=100, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    avatar = models.ImageField(blank=True, upload_to=user_directory_path)
    user_level = models.CharField(max_length=100, blank=True)
    amount_of_posts = models.IntegerField(default=0)
    amount_of_friends = models.IntegerField(default=0)
    amount_following = models.IntegerField(default=0)
    friends = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name="my_friends", blank=True)
    following = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followers', blank=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f'ID {self.id} : {self.username}'









