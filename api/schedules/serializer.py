from contacts.models.contact import Contact
from rest_framework import serializers
from .models.schedule import Schedule
from contacts.models.contact_schedule import ContactSchedule



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        # fields = ['name','phone_number','email','company','department','responsibility','memo']

class ContactScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSchedule
        # fields = '__all__'
        fields = ['schedule','contact']
    
    def create(self, validated_data):
        contact_data = validated_data.pop('contact')
        contact = Contact.objects.create(**validated_data)
        ContactSchedule.objects.create(contact=contact, schedule=validated_data['schedule'], **contact_data)
        return contact

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['contact'] = ContactSerializer(instance.contact).data
        return response
        
class ScheduleSerializer(serializers.ModelSerializer):
    contactschedules = ContactScheduleSerializer(many=True, source="contactschedule_set")

    class Meta:
        model = Schedule
        fields = ['title','date','contactschedules']

    def create(self, validated_data):
        contactschedules_data = validated_data.pop('contactschedule_set')
        schedule = Schedule.objects.create(**validated_data)
        for contactschedule_data in contactschedules_data:
            ContactSchedule.objects.create(schedule=schedule, **contactschedule_data)