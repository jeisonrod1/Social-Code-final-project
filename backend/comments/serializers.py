from rest_framework import serializers

from answers.serializers import AnswersSerializer
from comments.models import Comments



class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = '__all__'
    answers = AnswersSerializer(many=True)