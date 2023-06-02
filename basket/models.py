from django.db import models
from shop.models import *


class ProductInBasket(models.Model):
    session_key = models.CharField(max_length=32)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user_note = models.TextField(blank=True)
