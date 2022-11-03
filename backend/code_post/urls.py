from django.urls import path

from code_post.views import ListCreateCodePostView, RetrieveUpdateDestroyCodePostView

urlpatterns = [
    path('', ListCreateCodePostView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyCodePostView.as_view()),
]
