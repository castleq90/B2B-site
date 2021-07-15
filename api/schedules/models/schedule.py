from django.db import models

class Schedule(models.Model):
    title = models.CharField(max_length=100)
    date  = models.DateTimeField()

    class Meta:
        db_table = 'schedule'