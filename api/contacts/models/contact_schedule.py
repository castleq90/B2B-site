from django.db import models

class ContactSchedule(models.Model):
    contact  = models.ForeignKey('contacts.Contact', on_delete=models.CASCADE)
    schedule = models.ForeignKey('schedules.Schedule', on_delete=models.CASCADE)

    class Meta:
        db_table = 'contact_schedule'