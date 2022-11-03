from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from code_post.models import CodePost
from code_post.serializers import CodePostSerializer


class ListCreateCodePostView(ListCreateAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer

class RetrieveUpdateDestroyCodePostView(RetrieveUpdateDestroyAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
