from rest_framework import serializers
from django.contrib.auth import get_user_model
from answers.models import Answers
from comments.models import Comments

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']

class CommentsSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        model = Comments
        fields = ['id', 'wallet', 'username', 'avatar', 'user_level', 'points']

class AnswersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answers
        fields = '__all__'

    author = UserSerializer(read_only=True)
    replies = CommentsSerializer(read_only=True, many=True)