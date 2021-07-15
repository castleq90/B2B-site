from django.db import models

from .contact                      import Contact
from api.schedules.models.schedule import Schedule

class ContactSchedule(models.Model):
    contact  = models.ForeignKey(Contact, on_delete=models.CASCADE)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)

    class Meta:
        db_table = 'contact_schedule'