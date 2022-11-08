from django.contrib.auth import get_user_model
from rest_framework import serializers

from friend_request.models import FriendRequest

User = get_user_model()

class GettingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = '__all__'

class CreatingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = ['friend_request_requester']

class UpdatingRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = ['status']