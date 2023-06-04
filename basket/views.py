from django.shortcuts import render
from .models import ProductInBasket
from django.http import JsonResponse


def show_basket(request):
    session_key = request.session.session_key
    products_in_basket = ProductInBasket.objects.filter(session_key=session_key)
    return render(request, 'basket/basket.html', context={'products_in_basket': products_in_basket})

def delete_from_basket(request):
    ProductInBasket.objects.get(pk=request.POST.get('pk_product')).delete()
    return JsonResponse({})