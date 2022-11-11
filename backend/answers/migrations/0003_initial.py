# Generated by Django 4.1.1 on 2022-11-11 14:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('answers', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='answers',
            name='answersOfUser',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answersOfUser', to=settings.AUTH_USER_MODEL),
        ),
    ]
