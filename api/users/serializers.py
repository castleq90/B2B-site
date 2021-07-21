from django.contrib.auth import get_user_model, authenticate
from django.db.models import fields

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields =["name", "email", "phone_number", "password"]
        extra_kwargs = {
            'password' : {'write_only':True}
        }

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('passwword')
        user = super().update(instance, validated_data)
        
        if password:
            user.set_password(password)
            user.save()

        return user