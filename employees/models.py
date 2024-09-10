from django.db import models

# Create your models here.
class Employee(models.Model):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('HR', 'HR'),
        ('Employee', 'Employee'),
    ]
    
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Resigned', 'Resigned'),
        ('Retired', 'Retired'),
        ('Sacked', 'Sacked'),
    ]
    
    name = models.CharField(max_length=255)
    state_of_origin = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    department = models.CharField(max_length=255)
    cv = models.FileField(upload_to='cvs/')
    profile_image = models.ImageField(upload_to='profile_images/')
    brief_story = models.TextField()
    dob = models.DateField()
    date_of_employment = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    status_reason = models.TextField(blank=True, null=True)
    retirement_date = models.DateField(blank=True, null=True)
    
    def __str__(self):
        return self.name
