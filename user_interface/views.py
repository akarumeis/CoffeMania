from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session

# Create your views here.

def show_contact_page(request):
    return render(request, 'user_interface/contact_page.html')


def show_main_page(request):
    return render(request, 'user_interface/main_page.html')
