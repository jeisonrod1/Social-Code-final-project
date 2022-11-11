from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from user.serializers import UserSerializer
from wallet.models import Wallet
from wallet.serializers import CreateWalletSerializer, BuyBadgeSerializer, GetWalletSerializer
User = get_user_model()


class ListCreateWalletView(ListCreateAPIView):
    serializer_class = CreateWalletSerializer
    queryset = Wallet.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BuyBadge(UpdateAPIView):
    serializer_class = BuyBadgeSerializer
    queryset = Wallet.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'id'


class Payment(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = UserSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class GetCurrentWalletAmount(ListAPIView):
    serializer_class = GetWalletSerializer
    queryset = Wallet.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        a = self.request.data.get('name')
        queryset = Wallet.objects.filter(user=user)
        queryset = queryset.filter(name=a)
        return queryset










