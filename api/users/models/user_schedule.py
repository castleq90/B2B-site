from django.db import models

class UserSchedule(models.Model):
    user     = models.ForeignKey('users.User', on_delete=models.CASCADE)
    schedule = models.ForeignKey('schedules.Schedule', on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_schedule'