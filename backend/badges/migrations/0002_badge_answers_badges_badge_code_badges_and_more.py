# Generated by Django 4.1.1 on 2022-11-09 15:31

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('answers', '0003_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('code_post', '0002_initial'),
        ('comments', '0001_initial'),
        ('general_posts', '0002_initial'),
        ('badges', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='badge',
            name='answers_badges',
            field=models.ManyToManyField(blank=True, related_name='badges', to='answers.answers'),
        ),
        migrations.AddField(
            model_name='badge',
            name='code_badges',
            field=models.ManyToManyField(blank=True, related_name='badges', to='code_post.codepost'),
        ),
        migrations.AddField(
            model_name='badge',
            name='comments_badges',
            field=models.ManyToManyField(blank=True, related_name='badges', to='comments.comments'),
        ),
        migrations.AddField(
            model_name='badge',
            name='posts_badges',
            field=models.ManyToManyField(blank=True, related_name='badges', to='general_posts.generalposts'),
        ),
        migrations.AddField(
            model_name='badge',
            name='user_badges',
            field=models.ManyToManyField(blank=True, related_name='badges', to=settings.AUTH_USER_MODEL),
        ),
    ]