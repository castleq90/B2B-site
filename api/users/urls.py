from django.urls import path, include
from .views.user import CreateUserGenericView

app_name = 'users'

urlpatterns = [
    path('signup/', CreateUserGenericView.as_view()),
    path('api-auth/', include('rest_framework.urls')),
]
