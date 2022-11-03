from django.urls import path

from comments.views import ListCreateCommentsView, RetrieveUpdateDestroyCommentsView

urlpatterns = [
    path('', ListCreateCommentsView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyCommentsView.as_view()),
]