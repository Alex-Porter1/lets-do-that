# Generated by Django 4.0.3 on 2022-08-30 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts_rest', '0002_alter_account_activity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='activity',
        ),
    ]