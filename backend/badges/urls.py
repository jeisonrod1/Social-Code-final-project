from django.urls import path

from badges.views import Update

urlpatterns = [

    path('users/list/<int:id>/', Update.as_view()),

]