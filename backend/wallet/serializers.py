from rest_framework import serializers

from wallet.models import Wallet


class CreateWalletSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')

    class Meta:
        model = Wallet
        fields = "__all__"


class BuyBadgeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wallet
        fields = "__all__"


class GetWalletSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wallet
        fields = "__all__"


