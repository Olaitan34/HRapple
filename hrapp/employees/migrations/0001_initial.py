# Generated by Django 5.1.1 on 2024-09-15 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('state_of_origin', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=15)),
                ('department', models.CharField(max_length=50)),
                ('role', models.CharField(choices=[('manager', 'Manager'), ('developer', 'Developer'), ('designer', 'Designer'), ('qa', 'Quality Assurance')], max_length=20)),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='profile_images/')),
                ('dob', models.DateField()),
                ('date_of_employment', models.DateField()),
                ('status', models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive'), ('on_leave', 'On Leave'), ('retired', 'Retired')], default='active', max_length=10)),
                ('status_reason', models.TextField(blank=True, null=True)),
                ('retirement_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
