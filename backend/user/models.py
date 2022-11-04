from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'avatar {instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    about_me = models.TextField()
    social_media = models.CharField(max_length=600)
    experience = models.CharField(max_length=400)
    company = models.CharField(max_length=100)
    date_joined = models.DateTimeField(auto_now_add=True)
    avatar = models.ImageField(blank=True, upload_to=user_directory_path)
    user_level = models.CharField(max_length=100)
    amount_of_posts = models.IntegerField(default=0)
    amount_of_friends = models.IntegerField(default=0)
    amount_following = models.IntegerField(default=0)
    logged_in_user_is_following = models.ManyToManyField('self', symmetrical=False, related_name='following', blank= True)
    logged_in_user_is_friends = models.ManyToManyField('self', symmetrical=True, blank=True)
    user_invited = models.BooleanField(default=False)
    servant = models.ForeignKey('self', related_name='Lord', on_delete=models.PROTECT, blank=True)


    def __str__(self):
        return self.username








