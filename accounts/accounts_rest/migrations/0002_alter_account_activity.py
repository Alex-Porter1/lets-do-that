# Generated by Django 4.0.3 on 2022-08-30 00:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='activity',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='activity', to='accounts_rest.activityvo'),
        ),
    ]