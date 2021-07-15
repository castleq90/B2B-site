from django.db import models

class User(models.Model):
    name         = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=13)
    email        = models.EmailField(max_length=100, unique=True)
    password     = models.TextField()

    class Meta:
        db_table = 'user'