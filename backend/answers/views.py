from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from answers.models import Answers
from answers.permissions import ReadOnly
from answers.serializers import AnswersSerializer
from code_post.models import CodePost


class ListAnswersView(ListAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CreateAnswersView(CreateAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        post = CodePost.objects.get(pk=self.kwargs.get('post_pk'))
        serializer.save(post=post, author=self.request.user)


class RetrieveUpdateDestroyAnswersView(RetrieveUpdateDestroyAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [IsAdminUser | ReadOnly]

