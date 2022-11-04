from django.urls import path

from backend.registration.views import ActivateAccountView

urlpatterns = [
    path(r'^activate_account/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
         ActivateAccountView.as_view(), name='activate_account'),
]
