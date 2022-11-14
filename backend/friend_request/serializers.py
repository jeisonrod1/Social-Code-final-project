from django.contrib.auth import get_user_model
from rest_framework import serializers

from friend_request.models import FriendRequest

User = get_user_model()

class GettingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = '__all__'


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "avatar"]


class CreatingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = '__all__'

class UpdatingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = ['status']