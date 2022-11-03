from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from comments.models import Comments
from comments.serializers import CommentsSerializer


class ListCreateCommentsView(ListCreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer


class RetrieveUpdateDestroyCommentsView(RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

