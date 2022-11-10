from rest_framework import serializers

from badges.serializers import BadgesSerializer
from general_posts.models import GeneralPosts


class GeneralPostsSerializer(serializers.ModelSerializer):
    userGeneralPost = serializers.SlugRelatedField(read_only=True, slug_field='username')
    badges = BadgesSerializer(many=True)
    class Meta:
        model = GeneralPosts
        fields = '__all__'

