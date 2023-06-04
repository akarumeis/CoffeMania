
from django.contrib import admin
from django.urls import path 
from user_interface.views import show_contact_page, show_main_page
from shop.views import show_shop, show_product
from basket.views import *
from django.conf.urls.static import static
from authenticate.views import *
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', show_main_page, name = 'main_page'),
    path('menu/', show_shop, name = 'menu_page'),
    path('contact/', show_contact_page, name = 'contact_page'),
    path('basket/', show_basket, name = 'basket_page'),
    path('menu/<product_pk>', show_product, name = 'product'),
    path('delete_from_basket', delete_from_basket, name = 'delete_from_basket'),
    path('registration/', show_registration, name = 'reg_page'),
    path('login/', show_login, name = 'login_page'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)