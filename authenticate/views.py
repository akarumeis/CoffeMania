from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import * 

def show_registration(request):
    return render(request, "auth/reg.html")

def show_login(request):
    return render(request, "auth/login.html")




def register_user(request):
    error = {}
    user_data = request.POST
    try:
        user = User.objects.create_user(first_name=user_data['fullname'],username=user_data['phone'], password=user_data['password'])
        user.save()

        login(request, user)
    except IntegrityError:
        error['error']  = "Такий користувач вже існує"
    return JsonResponse(error)


def login_user(request):
    error= {}

    user_data = request.POST
    user = authenticate(request, username=user_data['phone'], password=user_data['password'])
    
    if user != None:
        error['error'] = ''
        login(request, user)
    else:
        error['error'] = 'Номер телефону або пароль не вірні'
    return JsonResponse(error)
