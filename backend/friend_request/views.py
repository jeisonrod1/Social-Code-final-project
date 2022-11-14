from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from friend_request.models import FriendRequest
from friend_request.serializers import CreatingRequestSerializer, GettingRequestSerializer, UpdatingRequestSerializer

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
    serializer_class = GettingRequestSerializer
    queryset = FriendRequest.objects.all()

    def get_queryset(self):
        return FriendRequest.objects.filter(Q(status="A"), Q(request=self.request.user) | Q(receiver=self.request.user))


class RetrieveUpdateDestroyRequestView(RetrieveUpdateDestroyAPIView):
    def get_serializer_class(self):
        if self.request.method == 'PATCH':
            return UpdatingRequestSerializer
        return GettingRequestSerializer

    queryset = FriendRequest.objects.all()
    lookup_field = 'id'


