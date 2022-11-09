# Generated by Django 4.1.1 on 2022-11-09 11:15

from django.db import migrations, models
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('code', models.CharField(default=registration.models.code_generator, max_length=5)),
            ],
        ),
    ]
