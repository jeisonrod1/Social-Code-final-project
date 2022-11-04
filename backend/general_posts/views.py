from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from general_posts.models import GeneralPosts
from general_posts.permissions import ReadOnly
from general_posts.serializers import GeneralPostsSerializer


class ListCreateGeneralPostsView(ListCreateAPIView):
    queryset = GeneralPosts.objects.all()
    serializer_class = GeneralPostsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUpdateDestroyGeneralPostsView(RetrieveUpdateDestroyAPIView):
    queryset = GeneralPosts.objects.all()
    serializer_class = GeneralPostsSerializer
    permission_classes = [IsAdminUser | ReadOnly]
