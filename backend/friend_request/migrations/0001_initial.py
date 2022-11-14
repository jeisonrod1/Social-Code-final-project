# Generated by Django 4.1.1 on 2022-11-14 09:23

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FriendRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='P', max_length=1)),
                ('receiver', models.ManyToManyField(null=True, related_name='friend_request_receiver', to=settings.AUTH_USER_MODEL)),
                ('request', models.ManyToManyField(null=True, related_name='friend_request_requester', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
