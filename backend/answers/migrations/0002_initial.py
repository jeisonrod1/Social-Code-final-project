# Generated by Django 4.1.1 on 2022-11-02 11:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('code_post', '0001_initial'),
        ('answers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='answers',
            name='answers',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answersToCodePost', to='code_post.codepost'),
        ),
    ]
