from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from answers.models import Answers
from answers.serializers import AnswersSerializer


class ListCreateAnswersView(ListCreateAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer


class RetrieveUpdateDestroyAnswersView(RetrieveUpdateDestroyAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerializer
