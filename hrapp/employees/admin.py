from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'role', 'status', 'date_of_employment', 'retirement_date')
    search_fields = ('name', 'department')
    list_filter = ('status', 'role')