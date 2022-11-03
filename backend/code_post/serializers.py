from rest_framework import serializers

from code_post.models import CodePost


class CodePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodePost
        fields = '__all__'