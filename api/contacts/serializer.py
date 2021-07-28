from rest_framework import serializers
from .models.contact import Contact


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'
        # fields = ['name','phone_number','email','company','department','responsibility','memo']