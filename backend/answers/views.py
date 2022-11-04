from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from answers.models import Answers
from answers.permissions import ReadOnly
from answers.serializers import AnswersSerializer


class ListCreateAnswersView(ListCreateAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUpdateDestroyAnswersView(RetrieveUpdateDestroyAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
    permission_classes = [IsAdminUser | ReadOnly]
