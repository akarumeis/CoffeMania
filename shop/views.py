from django.shortcuts import render
from .models import *
# Create your views here.
def show_shop(request):
    context = {}
    all_products = Product.objects.all()
    context['all_products'] = all_products
    return render(request, 'shop/shop.html', context=context)
