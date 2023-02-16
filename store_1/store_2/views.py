from django.shortcuts import render
from django.http import HttpResponse
from .models import Post, Order
from django.db.models import Q


def post_lists(request):
    search_query = request.GET.get("search", "")
    if search_query:
        posts = Post.objects.filter(
            Q(title__icontains=search_query)
            |
            Q(body__icontains=search_query)
        )
    else:
        posts = Post.objects.all()
    return render(request, "store/index.html", context={"posts": posts})


def post_detail(request, pk):
    post = Post.objects.get(pk=pk)
    return render(request, "store/post_detail.html", context={"post": post})

def saveOrder(request):
    product = Post.objects.get(pk=request.POST["productId"])
    order = Order()
    order.name = request.POST["username"] 
    order.email = request.POST["userEmail"] 
    order.product = product
    order.save()
    return render(request, "store/ordered.html", context={"product": product})

