from rest_framework import serializers
from wallet.models import Wallet


class WalletSerializer(serializers.ModelSerializer):
    types = serializers.CharField(source='get_type_display')

    class Meta:
        model = Wallet
        fields = "__all__"

