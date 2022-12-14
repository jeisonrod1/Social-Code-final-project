from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from django.db.models import Q
from code_post.models import CodePost
from code_post.permissions import ReadOnly
from code_post.serializers import CodePostSerializer, CreateCodePostSerializer


class ListCreateCodePostView(ListCreateAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ListFriendsPostView(ListAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return CodePost.objects.filter(Q(author__friend_request_requester__receiver=self.request.user) | Q(author__friend_request_receiver__request=self.request.user)).filter(author__friend_request_requester__status="A")


class RetrieveUpdateDestroyCodePostView(RetrieveUpdateDestroyAPIView):
    queryset = CodePost.objects.all()
    serializer_class = CodePostSerializer
    permission_classes = [IsAdminUser | ReadOnly]


class FilteredCodePosts(ListAPIView):
    serializer_class = CreateCodePostSerializer
    lookup_field = "id"

    def get_queryset(self):
        return CodePost.objects.filter(user=self.request.user)


class FriendsCodePosts(ListAPIView):
    serializer_class = CreateCodePostSerializer

    def get_queryset(self):
        friends = self.request.user.logged_in_user_is_friends_all()
        friends_posts = CodePost.objects.filter(user__in=friends)
        return friends_posts


class FollowedCodePosts(ListAPIView):
    serializer_class = CreateCodePostSerializer

    def get_queryset(self):
        friends = self.request.user.logged_in_user_is_following.all()
        followed_posts = CodePost.objects.filter(user__in=friends)
        return followed_posts


class LikedPosts(ListAPIView):
    serializer_class = CreateCodePostSerializer

    def get_queryset(self):
        return CodePost.objects.filter(likes=self.request.user)


class SearchPostsView(ListAPIView):
    serializer_class = CodePostSerializer
    permission_classes = [ReadOnly]

    def get_queryset(self):
        params = self.request.query_params.get("search")
        queryset = CodePost.objects.all().filter(tags__icontains=params).order_by('-created')
        return queryset

