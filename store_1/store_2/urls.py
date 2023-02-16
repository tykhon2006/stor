from django.urls import path
from .views import *

urlpatterns = [
    path('', post_lists, name="post_list_url"),
    path("post/<int:pk>/", post_detail, name="post_detail_url"),
    path("saveOrder", saveOrder, name="post_detail_url")
]