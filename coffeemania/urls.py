
from django.contrib import admin
from django.urls import path 
from user_interface.views import show_contact_page, show_main_page
from shop.views import show_shop
from basket.views import show_basket
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', show_main_page, name = 'main_page'),
    path('menu/', show_shop, name = 'menu_page'),
    path('contact/', show_contact_page, name = 'contact_page'),
    path('basket/', show_basket, name = 'basket_page'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)