from django.urls import path

from registration.views import UserRegistration
from registration.views import Validation

urlpatterns = [
    path('', UserRegistration.as_view()),
    path('validation/', Validation.as_view()),
]
