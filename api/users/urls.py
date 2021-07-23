from django.urls import path, include

from .views.user import CreateUserGenericView, SigninAPI

app_name = 'users'

urlpatterns = [
    path('signup/', CreateUserGenericView.as_view()),
    path('signin/', SigninAPI.as_view()),
]
