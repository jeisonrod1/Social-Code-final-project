from django.contrib.auth.models import User
from django.db.models import Q
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from friend_request.models import FriendRequest
from friend_request.serializers import CreatingRequestSerializer, GettingRequestSerializer, UpdatingRequestSerializer


class CreateRequestView(CreateAPIView):
    lookup_url_kwarg = 'user_id'
    queryset = FriendRequest.objects.all()
    serializer_class = CreatingRequestSerializer

    def post(self, request, *args, **kwargs):
        target = self.kwargs["user_id"]
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(friend_request_requester = request.user, friend_request_receiver = User.objects.get(pk=target))
        return Response(serializer.data)

class ListInvolvedRequestView(ListAPIView):
    serializer_class = GettingRequestSerializer

    def get_queryset(self):
        return FriendRequest.objects.filter(Q(friend_request_requester=self.request.user) | Q(friend_request_receiver=self.request.user ))

class ListInvolvedAcceptRequestView(ListAPIView):
    serializer_class = GettingRequestSerializer

    def get_queryset(self):
        return FriendRequest.objects.filter(Q(status="A"), Q(friend_request_requester=self.request.user) | Q(friend_request_receiver=self.request.user))


class RetrieveUpdateDestroyRequestView(RetrieveUpdateDestroyAPIView):
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return UpdatingRequestSerializer
        return GettingRequestSerializer

    queryset = FriendRequest.objects.all()
    lookup_field = 'id'


