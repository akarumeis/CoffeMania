from django.shortcuts import render
from .models import ProductInBasket
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session


def show_basket(request):
    # Получаем ключ сеанса пользователя
    session_key = request.session.session_key

    try:
        # Получаем сеанс пользователя
        session = Session.objects.get(session_key=request.session.session_key)
        # Получаем идентификатор пользователя из сеанса
        user_id = session.get_decoded().get('_auth_user_id')
        # Получаем все продукты в корзине для указанного пользователя
        products_in_basket = ProductInBasket.objects.filter(
            user=User.objects.get(id=user_id))

    except:
        # Если не удалось получить сеанс или идентификатор пользователя, получаем все продукты в корзине для текущего ключа сеанса
        products_in_basket = ProductInBasket.objects.filter(
            session_key=session_key)

    return render(request, 'basket/basket.html', context={'products_in_basket': products_in_basket})


def delete_from_basket(request):
    # Получаем идентификатор продукта, который нужно удалить из корзины
    product_id = request.POST.get('pk_product')
    # Удаляем продукт из корзины
    ProductInBasket.objects.get(pk=product_id).delete()
    return JsonResponse({})


def change_amount(request):
    operation = request.POST.get('operation')
    product = ProductInBasket.objects.get(pk = request.POST.get('product_pk'))
    if product.amount == 1 and operation == '-1':
        pass
    else:
        product.amount = product.amount + int(operation)
        product.save()
         
    return JsonResponse({})