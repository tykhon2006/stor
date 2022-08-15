from django.db import models
from django.shortcuts import reverse


class Post(models.Model):
    title = models.CharField(max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, unique=True)
    body = models.TextField(blank=True, db_index=True)
    date_pub = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to="images/", default="images/default_image.jpg")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post_detail_url", kwargs={"slug": self.slug})

    class Meta:
        ordering = ["-date_pub"]