# Generated by Django 4.1.1 on 2022-11-10 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0002_remove_wallet_user_wallet_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wallet',
            old_name='type',
            new_name='name',
        ),
    ]
