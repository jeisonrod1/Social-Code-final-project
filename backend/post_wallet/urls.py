from django.urls import path

from badges.views import RetrieveUpdateDestroyBadgesView

urlpatterns = [

    path('users/<int:id>/', RetrieveUpdateDestroyBadgesView.as_view()),

]