from rest_framework import serializers
from answers.models import Answers
from code_post.models import CodePost
from django.contrib.auth import get_user_model

from comments.models import Comments

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'wallet', 'username', 'avatar', 'user_level', 'points']

class CommentsSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        model = Comments
        fields = '__all__'


class AnswersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answers
        exclude = ['post', ]

    author = UserSerializer(read_only=True)
    replies = CommentsSerializer(read_only=True, many=True)

class CodePostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    postComments = AnswersSerializer(many=True, read_only=True)

    class Meta:
        model = CodePost
        fields = '__all__'


class CreateCodePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodePost
        fields = '__all__'
    author = UserSerializer(read_only=True)