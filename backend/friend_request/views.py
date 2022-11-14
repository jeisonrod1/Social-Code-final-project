from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.response import Response

from friend_request.models import FriendRequest
from friend_request.serializers import CreatingRequestSerializer, GettingRequestSerializer, UpdatingRequestSerializer, FriendsSerializer

User = get_user_model()
class CreateRequestView(CreateAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = CreatingRequestSerializer

    def perform_create(self, serializer):
        serializer.save(request=self.request.user, receiver=User.objects.get(pk=self.kwargs.get("id")))


class ListInvolvedRequestView(ListAPIView):
    serializer_class = GettingRequestSerializer
    queryset = FriendRequest.objects.all()
    lookup_field = "receiver"

    def get_queryset(self):
        return FriendRequest.objects.filter(receiver=self.request.user).filter(status="P")


class ListAcceptedRequestsView(ListAPIView):
    serializer_class = FriendsSerializer
    queryset = FriendRequest.objects.filter()

    def get_queryset(self):
        return User.objects.all().filter(Q(friend_request_requester__receiver=self.request.user) | Q(friend_request_receiver__request=self.request.user)).filter(friend_request_requester__status="A")


class RetrieveUpdateDestroyRequestView(RetrieveUpdateDestroyAPIView):
    def get_serializer_class(self):
        if self.request.method == 'PATCH':
            return UpdatingRequestSerializer
        return GettingRequestSerializer

    queryset = FriendRequest.objects.all()
    lookup_field = 'id'

