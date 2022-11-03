from django.urls import path

from general_posts.views import ListCreateGeneralPostsView, RetrieveUpdateDestroyGeneralPostsView

urlpatterns = [
    path('', ListCreateGeneralPostsView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyGeneralPostsView.as_view()),
]