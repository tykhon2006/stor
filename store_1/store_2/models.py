from django.db import models
from django.shortcuts import reverse


class Post(models.Model):
    title = models.CharField(max_length=150, db_index=True)
    # slug = models.SlugField(max_length=150, unique=True)
    body = models.TextField(blank=True, db_index=True)
    price = models.IntegerField(db_index=True, default=0)
    # date_pub = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to="images/", default="images/default.jpg")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail_url", kwargs={"pk": self.pk})
