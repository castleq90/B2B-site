from rest_framework import viewsets
from rest_framework.response import Response
from contacts.models.contact_schedule import ContactSchedule

from schedules.models.schedule import Schedule
from schedules.serializer      import ContactScheduleSerializer, ScheduleSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer