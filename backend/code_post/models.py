from django.contrib.auth import get_user_model
from django.db import models



User = get_user_model()

def code_directory_path(instance, filename):
    return f'avatar {instance.id}/{filename}'

class CodePost(models.Model):
    LANGUAGE_CHOICES = (
        ('python', 'Python'),
        ('javascript', 'Javascript'),
    )
    title = models.CharField(max_length=250)
    tags = models.CharField(max_length=300, blank=True)
    language = models.CharField(max_length=250, choices=LANGUAGE_CHOICES, blank=True)
    difficulty = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    code = models.TextField(blank=True)
    image = models.ImageField(upload_to=code_directory_path, height_field=None, width_field=None, max_length=100, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='codePost')

