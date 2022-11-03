from rest_framework import serializers

from answers.models import Answers


class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = '__all__'