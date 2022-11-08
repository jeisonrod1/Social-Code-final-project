from rest_framework import serializers

from badges.serializers import BadgesSerializer
from handler_users.models import HandlerUsers


class HandlerPostsSerializer(serializers.ModelSerializer):
    badges = BadgesSerializer()

    class Meta:
        model = HandlerUsers
        fields = ["badges", "amount"]