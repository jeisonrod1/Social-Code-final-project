from rest_framework import serializers

from code_post.models import CodePost
from comments.serializers import CommentsSerializer

from user.serializers import UserSerializer



class CodePostSerializer(serializers.ModelSerializer):

    class Meta:
        model = CodePost
        fields = "__all__"

    user = UserSerializer(read_only=True)
    answersToComments = CommentsSerializer(many=True, read_only=True)


class CreateCodePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodePost
        fields = '__all__'