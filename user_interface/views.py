from django.shortcuts import render
# Create your views here.

def show_contact_page(request):
    return render(request, 'user_interface/contact_page.html')


def show_main_page(request):
    return render(request, 'user_interface/main_page.html')
