from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from user.serializers import UserSerializer

from user.permissions import ReadOnly

from user.serializers import GetUserFollowersSerializer, GetUserFollowingSerializer

User = get_user_model()


class ListUserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUserView(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [ReadOnly]
    lookup_url_kwarg = 'user_id'


class GetUserProfile(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user.id
        instance = self.get_queryset()
        instance = instance.filter(id=user)
        serializer = UserSerializer(instance, many=True)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = UserSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.request.user
        instance.delete()
        return Response(status=204)


class SearchUserView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [ReadOnly]

    def get_queryset(self):
        params = self.request.query_params.get("search")
        queryset = User.objects.all().filter(username__icontains=params).order_by('-date_joined')
        return queryset

class ToggleFollowerUser(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    lookup_url_kwarg = 'user_id'

    def patch(self, request, *args, **kwargs):
        user_models = self.request.user
        user = self.request.user
        user_models = UserSerializer(user_models)
        user_id = kwargs.get('user_id')
        user_following = user_id in user_models.data.get('following')
        if user_following:
            user.following.remove(user_id)
        else:
            user.following.add(user_id)
        return Response(self.get_serializer(user).data)

class GetFollowersListView(ListAPIView):
    serializer_class = GetUserFollowersSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = User.objects.all().filter(id=user.id)
        return queryset

class GetFollowingListView(ListAPIView):
    serializer_class = GetUserFollowingSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = User.objects.all().filter(id=user.id)
        return queryset


