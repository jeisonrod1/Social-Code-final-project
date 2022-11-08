from rest_framework import serializers

from general_posts.models import GeneralPosts
from handler_posts.serializers import HandlerPostsSerializer


class GeneralPostsSerializer(serializers.ModelSerializer):
    handler = HandlerPostsSerializer(many=True)

    class Meta:
        model = GeneralPosts
        fields = '__all__'