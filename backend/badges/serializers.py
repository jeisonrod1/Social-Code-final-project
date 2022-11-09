from rest_framework import serializers
from badges.models import Badge


class BadgesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = "__all__"

class PostsBadgesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = "__all__"


class UserBadgesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ['name', 'icon', 'price', 'user_badges']

