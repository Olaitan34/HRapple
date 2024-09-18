from rest_framework import viewsets
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the HRapple homepage!")

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
