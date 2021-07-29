from rest_framework.exceptions import ValidationError
from contacts.models.contact import Contact
from rest_framework import fields, serializers
from .models.schedule import Schedule
from contacts.models.contact_schedule import ContactSchedule



# class ContactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Contact
#         fields = '__all__'
#         # fields = ['name','phone_number','email','company','department','responsibility','memo']

# class ContactScheduleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ContactSchedule
#         # fields = '__all__'
#         fields = ['schedule','contact']
    
#     def create(self, validated_data):
#         contact_data = validated_data.pop('contact')
#         contact = Contact.objects.create(**validated_data)
#         ContactSchedule.objects.create(contact=contact, schedule=validated_data['schedule'], **contact_data)
#         return contact

#     def to_representation(self, instance):
#         response = super().to_representation(instance)
#         response['contact'] = ContactSerializer(instance.contact).data
#         return response
        
# class ScheduleSerializer(serializers.ModelSerializer):
#     contactschedules = ContactScheduleSerializer(many=True, source="contactschedule_set")

#     class Meta:
#         model = Schedule
#         fields = ['title','date','contactschedules']

#     def create(self, validated_data):
#         contactschedules_data = validated_data.pop('contactschedule_set')
#         schedule = Schedule.objects.create(**validated_data)
#         for contactschedule_data in contactschedules_data:
#             ContactSchedule.objects.create(schedule=schedule, **contactschedule_data)
#         return schedule


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
        
    # def create(self, validated_data):
    #     self.Meta.model.create(**validated_data)

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        # fields = ['name','phone_number','email','company','department','responsibility','memo']
    # def create(self, validated_data):
    #     self.Meta.model.create(**validated_data)

class ContactScheduleSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer(read_only = False)
    contact = ContactSerializer(read_only=False)
    
    class Meta:
        model = ContactSchedule
        fields = '__all__'
        # fields = ['schedule','contact']

    # def create(self, validated_data):
    #     contactschedules_data = validated_data.pop('contactschedule')
    #     schedule = Schedule.objects.create(**validated_data)
    #     for contactschedule_data in contactschedules_data:
    #         ContactSchedule.objects.create(schedule=schedule, **contactschedule_data)
    #     return schedule

    def create(self, validated_data):
        # contactschedule_data = validated_data.pop("contactschedule")
        # self.Meta.model.objects.create(
        #     schedule = self.get_created_schedule_instance(**validated_data),
        #     **contactschedule_data)
        schedule_data = validated_data.pop("schedule")
        contact_data = validated_data.pop("contact")


        schedule = ScheduleSerializer(data=schedule_data)
        contact = ContactSerializer(data=contact_data)
        # print(schedule)
        # print(contact)
        if schedule.is_valid() and contact.is_valid():
            s = schedule.save()
            c = contact.save()

            return ContactSchedule.objects.create(contact=c, schedule=s)
    
    # def update(self,instance ,validated_data):
        
    #     schedule_data = validated_data.pop("schedule")
    #     contact_data = validated_data.pop("contact")

    #     schedule = ScheduleSerializer(data=schedule_data)
    #     contact = ContactSerializer(data=contact_data)
    #     instance.schedule = schedule.title(instance.title)
    #     instance.schedule = schedule.date(instance.date)
    #     instance.contact = contact.name(instance.name)
    #     instance.contact = contact.phone_number(instance.phone_number)
    #     instance.contact = contact.email(instance.email)
    #     instance.contact = contact.company(instance.company)
    #     instance.contact = contact.department(instance.department)
    #     instance.contact = contact.responsibility(instance.responsibility)
    #     instance.contact = contact.memo(instance.memo)




        # instance.schedule = schedule.get('title', instance.title)
        # instance.schedule = schedule.get('date', instance.date)
        # instance.contact = contact.get('name', instance.name)
        # instance.contact = contact.get('phone_number', instance.phone_number)
        # instance.contact = contact.get('email', instance.email)
        # instance.contact = contact.get('company', instance.company)
        # instance.contact = contact.get('department', instance.department)
        # instance.contact = contact.get('responsibility', instance.responsibility)
        # instance.contact = contact.get('memo', instance.memo)
        # instance.save()
        # return instance
        # raise ValidationError()
        # partial=True
    
    
    # def get_created_schedule_instance(self, validated_data):
    #     return self.schedule.create(**validated_data)