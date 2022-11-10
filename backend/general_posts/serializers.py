from rest_framework import serializers

from badges.serializers import BadgesSerializer
from general_posts.models import GeneralPosts
from user.serializers import UserSerializer


class GeneralPostsSerializer(serializers.ModelSerializer):
    userGeneralPost = UserSerializer(many=True)
    badges = BadgesSerializer(many=True)
    class Meta:
        model = GeneralPosts
        fields = '__all__'

