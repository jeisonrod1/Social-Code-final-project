
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser

from badges.models import Badge
from badges.serializers import PostsBadgesSerializer


class RetrieveUpdateDestroyBadgesView(RetrieveUpdateDestroyAPIView):
    serializer_class = PostsBadgesSerializer
    permission_classes = [IsAdminUser]
    queryset = Badge.objects.all()
    lookup_url_kwarg = 'id'

