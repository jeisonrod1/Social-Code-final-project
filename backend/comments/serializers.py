from rest_framework import serializers

from comments.models import Comments
from handler_comments.serializers import HandlerCommentsSerializer


class CommentsSerializer(serializers.ModelSerializer):
    handler = HandlerCommentsSerializer(many=True)

    class Meta:
        model = Comments
        fields = '__all__'