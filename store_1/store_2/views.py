from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
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


def post_detail(request, slug):
    post = Post.objects.get(slug__iexact=slug)
    return render(request, "store/post_detail.html", context={"post": post})
