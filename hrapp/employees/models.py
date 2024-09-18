from django.db import models

class Employee(models.Model):
    ROLE_CHOICES = [
        ('manager', 'Manager'),
        ('developer', 'Developer'),
        ('designer', 'Designer'),
        ('qa', 'Quality Assurance'),
    ]
    
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('on_leave', 'On Leave'),
        ('retired', 'Retired'),
    ]
    
    name = models.CharField(max_length=100)
    state_of_origin = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15)
    department = models.CharField(max_length=50)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    cv = models.FileField(upload_to='cvs/', blank=True, null=True)  # Handles PDF files
    dob = models.DateField()
    date_of_employment = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')
    status_reason = models.TextField(blank=True, null=True)
    retirement_date = models.DateField(blank=True, null=True)
    
    def __str__(self):
        return self.name