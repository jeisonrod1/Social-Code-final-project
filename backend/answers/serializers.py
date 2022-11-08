from rest_framework import serializers

from answers.models import Answers
from handler_answers.serializers import HandlerAnswersSerializer


class AnswersSerializer(serializers.ModelSerializer):
    handler = HandlerAnswersSerializer(many=True)
    class Meta:
        model = Answers
        fields = '__all__'