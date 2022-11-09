# Generated by Django 4.1.1 on 2022-11-08 11:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('answers', '0001_initial'),
        ('code_post', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('answers', models.ManyToManyField(blank=True, related_name='commentsToAnswers', to='answers.answers')),
                ('code_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answersToComments', to='code_post.codepost')),
            ],
        ),
    ]
