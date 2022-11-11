from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from badges.models import Badge
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


class Payment(GenericAPIView):
    queryset = Badge.objects.all()
    serializer_class = UserSerializer

    def patch(self, request, *args, **kwargs):
        user = self.request.user
        points = user.points
        name = self.request.data.get('name')
        cost = Badge.objects.filter(name=name)
        cost = cost.cost
        amount = cost.amount
        cost = cost * amount
        points = points - cost
        serializer = UserSerializer(user, data=points, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class BuyBadge(GenericAPIView):
    serializer_class = BuyBadgeSerializer
    queryset = Wallet.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def patch(self, request, *args, **kwargs):
        user = self.request.user
        queryset = Wallet.objects.filter(user=user)
        name = self.request.data.get('name')
        queryset = queryset.filter(name=name).first()
        serializer = BuyBadgeSerializer(queryset, data=request.data, partial=True)
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










