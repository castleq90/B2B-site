from rest_framework import viewsets
from rest_framework.response import Response

from ..models.contact import Contact
from ..serializer      import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer