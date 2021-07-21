from django.urls import path, include
from rest_framework import routers
from .views import schedule

router = routers.DefaultRouter()
router.register('schedules', schedule.ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
