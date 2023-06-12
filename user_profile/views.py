from django.shortcuts import render

# Create your views here.
def show_user_profile(request):
    return render(request, 'user_profile/user_profile.html')