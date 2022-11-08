# Generated by Django 4.1.1 on 2022-11-07 12:53

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_remove_user_junior'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='logged_in_user_is_following',
        ),
        migrations.RemoveField(
            model_name='user',
            name='logged_in_user_is_friends',
        ),
        migrations.AddField(
            model_name='user',
            name='following',
            field=models.ManyToManyField(blank=True, related_name='followers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='my_friends', to=settings.AUTH_USER_MODEL),
        ),
    ]
