from rest_framework.generics import ListCreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly


from wallet.models import Wallet
from wallet.serializers import CreateWalletSerializer, BuyBadgeSerializer, GetWalletSerializer


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


class GetCurrentWalletAmount(ListAPIView):
    serializer_class = GetWalletSerializer
    queryset = Wallet.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Wallet.objects.filter(user=self.request.user.id)
        return queryset










