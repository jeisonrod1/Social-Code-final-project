# Generated by Django 4.1.1 on 2022-11-08 09:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('code_post', '0002_initial'),
        ('badges', '0003_rename_amount_badge_price_remove_badge_owned'),
    ]

    operations = [
        migrations.CreateModel(
            name='HandlerCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(default=0)),
                ('badges', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='handler_code', to='badges.badge')),
                ('code_posts', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='handler', to='code_post.codepost')),
            ],
        ),
    ]
