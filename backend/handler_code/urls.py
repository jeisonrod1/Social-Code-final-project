from django.urls import path

from handler_code.views import ListCreateHandlerCodeView


urlpatterns = [

    path('handler/code/', ListCreateHandlerCodeView.as_view()),





]
