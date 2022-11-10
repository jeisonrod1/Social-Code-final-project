
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from badges.models import Badge
from badges.serializers import PostsBadgesSerializer





class Update(UpdateAPIView):
    serializer_class = PostsBadgesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Badge.objects.all()
    lookup_url_kwarg = 'id'

