from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly

from answers.models import Answers
from comments.models import Comments
from comments.permissions import ReadOnly
from comments.serializers import CommentsSerializer


class ListCommentsView(ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CreateCommentsView(CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        comment = Answers.objects.get(pk=self.kwargs.get('comment_pk'))
        serializer.save(target_comment=comment, author=self.request.user)


class RetrieveUpdateDestroyCommentsView(RetrieveUpdateDestroyAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [IsAdminUser | ReadOnly]

