from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, 
    BaseUserManager,
    PermissionsMixin
)

class UserManager(BaseUserManager):
    
    def create_user(self, name, phone_number, email, password=None, **extra_fields):
        
        if not name:
            raise ValueError('must have user name')
        if not phone_number:
            raise ValueError('must have user phone_number')
        if not email:
            raise ValueError('must have user email')

        user = self.model(
            name = name,
            phone_number = phone_number,
            email = self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using = self.db)

        return user

    def create_super_user(self, email, password):
        user = self.create_user(email = email, password = password)
        user.is_staff = True
        user.is_superuser =True
        user.is_admin = True
        user.save(using=self.db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    name         = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=13)
    email        = models.EmailField(max_length=255, unique=True)
    password     = models.TextField()
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    