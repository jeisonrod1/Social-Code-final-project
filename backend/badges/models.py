from django.contrib.auth import get_user_model
from django.db import models

from answers.models import Answers
from code_post.models import CodePost
from comments.models import Comments
from general_posts.models import GeneralPosts

User = get_user_model()


def badge_image_directory_path(instance, filename):
    return f'badge/{instance.id}/{filename}'


class Badge(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(blank=True, upload_to=badge_image_directory_path)
    price = models.IntegerField(default=0)
    user_badges = models.ManyToManyField(to=User, related_name="badges", blank=True)
    code_badges = models.ManyToManyField(to=CodePost, related_name="badges", blank=True)
    posts_badges = models.ManyToManyField(to=GeneralPosts, related_name="badges", blank=True)
    comments_badges = models.ManyToManyField(to=Comments, related_name="badges", blank=True)
    answers_badges = models.ManyToManyField(to=Answers, related_name="badges", blank=True)








