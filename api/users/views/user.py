from rest_framework import generics, permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import status

from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView

from ..serializers import UserCreateSerializer, UserSerializer,UserSigninSerializer

class CreateUserGenericView(generics.GenericAPIView):
    serializer_class = UserCreateSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
                "user": UserCreateSerializer(user, context=self.get_serializer_context()).data},
            headers={
                "Authorization": AuthToken.objects.create(user)
                },
                status=status.HTTP_200_OK)

class SigninAPI(generics.GenericAPIView):
    serializer_class = UserSigninSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data},
            headers={
                "Authorization": AuthToken.objects.create(user)
                },
                status=status.HTTP_200_OK)
        else:
            return Response({}, status=status.HTTP_401_UNAUTHORIZED)
