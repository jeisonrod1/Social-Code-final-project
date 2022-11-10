from django.contrib.auth import get_user_model
from rest_framework import serializers

from wallet.serializers import CreateWalletSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    wallet = CreateWalletSerializer(many=True, read_only=True)

    class Meta:
        model = User
        exclude = ['password', 'last_login', "is_superuser", "is_staff", "is_active", "groups", "user_permissions"]


class GetUserFollowingSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['following']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['following'] = User.objects.filter(id__in=instance.following
                                                          .all().values_list('id', flat=True)) \
            .values_list('username', flat=True)

        return representation


class GetUserFollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['followers']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['followers'] = User.objects.filter(id__in=instance.followers
                                                          .all().values_list('id', flat=True)) \
            .values_list('username', flat=True)

        return representation
