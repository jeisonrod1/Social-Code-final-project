from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly

from comments.models import Comments
from comments.permissions import ReadOnly
from comments.serializers import CommentsSerializer


class ListCreateCommentsView(ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUpdateDestroyCommentsView(RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAdminUser | ReadOnly]

