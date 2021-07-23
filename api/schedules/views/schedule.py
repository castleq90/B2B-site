from rest_framework import viewsets
from rest_framework.response import Response

from ..models.schedule import Schedule
from ..serializer      import ScheduleSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer