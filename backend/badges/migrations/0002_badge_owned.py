# Generated by Django 4.1.1 on 2022-11-07 10:18

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('badges', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='badge',
            name='owned',
            field=models.ManyToManyField(blank=True, related_name='badges', to=settings.AUTH_USER_MODEL),
        ),
    ]
