from django.db import models

class Comment(models.Model):
    content  = models.TextField()
    schedule = models.ForeignKey('schedules.Schedule', on_delete=models.CASCADE)
    user     = models.ForeignKey('users.User', on_delete=models.CASCADE)

    class Meta:
        db_table = 'comment'