from django.shortcuts import render, get_object_or_404
from .models import *
from basket.models import ProductInBasket


def show_shop(request):
    all_products = Product.objects.all()
    return render(request, 'shop/shop.html', context={'all_products':all_products})


def show_product(request, product_pk):
    if request.method == 'POST':
        session_key = request.session.session_key
        if not session_key:
            request.session.cycle_key()
            session_key = request.session.session_key
        product = Product.objects.get(pk = product_pk)
        username = request.POST.get('username')
        phone_number = request.POST.get('phone_number')
        addres = request.POST.get('addres')
        user_note = request.POST.get('user-note')
        user_note = f"Клієнт - {username}\n Номер телефону - {phone_number}\n Адресса - {addres}\n Побожання - {user_note}"
        product_in_basket = ProductInBasket.objects.create(session_key=session_key, product=product, user_note=user_note)
        product_in_basket.save()
    product = get_object_or_404(Product, pk=product_pk)
    return render(request, 'product/product.html', context={'product':product})