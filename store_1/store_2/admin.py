from django.contrib import admin
from .models import Post, Order

admin.site.register(Post)

class OrderAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "product"]

admin.site.register(Order, OrderAdmin)

