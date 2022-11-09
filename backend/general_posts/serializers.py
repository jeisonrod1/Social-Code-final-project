from rest_framework import serializers

from general_posts.models import GeneralPosts



class GeneralPostsSerializer(serializers.ModelSerializer):

    class Meta:
        model = GeneralPosts
        fields = '__all__'