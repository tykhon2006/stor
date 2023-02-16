from django.db import models
from django.shortcuts import reverse


class Post(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    body = models.TextField(blank=True, db_index=True)
    price = models.IntegerField(db_index=True, default=0)
    image = models.ImageField(upload_to="images/", default="images/default.jpg")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail_url", kwargs={"pk": self.pk})
    
class Order(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    product = models.ForeignKey(Post, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse("post_detail_url", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.name
