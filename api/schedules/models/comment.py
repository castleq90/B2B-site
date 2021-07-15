from django.db import models

from api.users.models.user import User
from .schedule             import Schedule

class Comment(models.Model):
    content  = models.TextField()
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    user     = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'comment'