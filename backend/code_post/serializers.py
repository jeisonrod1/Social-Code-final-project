from rest_framework import serializers

from code_post.models import CodePost

from user.serializers import UserSerializer


class CodePostSerializer(serializers.ModelSerializer):

    class Meta:
        model = CodePost
        fields = '__all__'
        depth = 1

    user = UserSerializer



class CreateCodePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodePost
        fields = '__all__'