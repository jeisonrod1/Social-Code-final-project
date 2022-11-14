# Generated by Django 4.1.1 on 2022-11-12 09:58

import code_post.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('code_post', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='codepost',
            name='code',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='codepost',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='codepost',
            name='image',
            field=models.ImageField(blank=True, upload_to=code_post.models.code_directory_path),
        ),
        migrations.AlterField(
            model_name='codepost',
            name='language',
            field=models.CharField(blank=True, choices=[('PY', 'Python'), ('JS', 'Javascript')], max_length=250),
        ),
        migrations.AlterField(
            model_name='codepost',
            name='tags',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
