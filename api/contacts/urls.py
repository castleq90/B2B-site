from django.urls import path, include
from rest_framework import routers
from .views import contact

router = routers.DefaultRouter()
router.register('contact', contact.ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]