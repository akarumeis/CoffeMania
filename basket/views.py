from django.shortcuts import render

# Create your views here.

def show_basket(request):
    return render(request, 'basket/basket.html')