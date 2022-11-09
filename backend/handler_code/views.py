from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from handler_code.models import HandlerCode
from handler_code.serializers import HandlerCodeSerializer


class ListCreateHandlerCodeView(ListCreateAPIView):
    queryset = HandlerCode.objects.all()
    serializer_class = HandlerCodeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]



