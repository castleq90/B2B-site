from rest_framework import serializers

from .models.schedule import Schedule
from contacts.models.contact import Contact
from contacts.models.contact_schedule import ContactSchedule

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactScheduleSerializer(serializers.ModelSerializer):

    schedule = ScheduleSerializer(read_only = False)
    contact = ContactSerializer(read_only=False)
    
    class Meta:
        model = ContactSchedule
        fields = '__all__'

    def create(self, validated_data):
        schedule_data = validated_data.pop("schedule")
        contact_data = validated_data.pop("contact")

        schedule = ScheduleSerializer(data=schedule_data)
        contact = ContactSerializer(data=contact_data)

        if schedule.is_valid() and contact.is_valid():
            s = schedule.save()
            c = contact.save()

            return ContactSchedule.objects.create(contact=c, schedule=s)