from rest_framework import viewsets

from contacts.models.contact_schedule import ContactSchedule
from schedules.serializer      import ContactScheduleSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = ContactSchedule.objects.all()
    serializer_class = ContactScheduleSerializer
