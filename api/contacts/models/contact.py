from django.db import models

class Contact(models.Model):
    name           = models.CharField(max_length=45)
    phone_number   = models.CharField(max_length=13)
    email          = models.EmailField(max_length=100, unique=True)
    company        = models.CharField(max_length=45)
    department     = models.CharField(max_length=45)
    responsibility = models.CharField(max_length=45)
    memo           = models.TextField()

    class Meta:
        db_table = 'contact'