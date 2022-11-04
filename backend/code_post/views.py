from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from code_post.models import CodePost
from code_post.permissions import ReadOnly
from code_post.serializers import CodePostSerializer


class ListCreateCodePostView(ListCreateAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class RetrieveUpdateDestroyCodePostView(RetrieveUpdateDestroyAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
    permission_classes = [IsAdminUser | ReadOnly]
