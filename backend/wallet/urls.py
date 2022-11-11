from django.urls import path

from wallet.views import ListCreateWalletView, BuyBadge, GetCurrentWalletAmount, Payment

urlpatterns = [

    path('', ListCreateWalletView.as_view()),
    path('users/buy/', BuyBadge.as_view()),
    path('get/', GetCurrentWalletAmount.as_view()),
    path('get/payment/', Payment.as_view()),


]
