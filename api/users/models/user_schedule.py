from django.db import models

from .user                         import User
from api.schedules.models.schedule import Schedule

class UserSchedule(models.Model):
    user     = models.ForeignKey(User, on_delete=models.CASCADE)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_schedule'