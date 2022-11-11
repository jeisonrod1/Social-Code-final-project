from django.urls import path

from wallet.views import ListCreateWalletView, BuyBadge, GetCurrentWalletAmount

urlpatterns = [

    path('', ListCreateWalletView.as_view()),
    path('users/<int:id>/', BuyBadge.as_view()),
    path('get/', GetCurrentWalletAmount.as_view()),

]
