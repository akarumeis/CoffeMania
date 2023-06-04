from django.shortcuts import render
from .models import * 

def show_registration(request):
    return render(request, "auth/reg.html")

def show_login(request):
    return render(request, "auth/login.html")
