from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from general_posts.models import GeneralPosts
from general_posts.serializers import GeneralPostsSerializer


class ListCreateGeneralPostsView(ListCreateAPIView):
    queryset = GeneralPosts.objects.all()
    serializer_class = GeneralPostsSerializer


class RetrieveUpdateDestroyGeneralPostsView(RetrieveUpdateDestroyAPIView):
    queryset = GeneralPosts.objects.all()
    serializer_class = GeneralPostsSerializer
