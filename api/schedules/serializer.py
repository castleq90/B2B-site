from contacts.models.contact import Contact
from rest_framework import serializers
from .models.schedule import Schedule
from contacts.models.contact_schedule import ContactSchedule



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactScheduleSerializer(serializers.ModelSerializer):
    contact = ContactSerializer(read_only = True)
    class Meta:
        model = ContactSchedule
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    contactschedule_set = ContactScheduleSerializer(read_only=True, many=True)

    class Meta:
        model = Schedule
        fields = '__all__'