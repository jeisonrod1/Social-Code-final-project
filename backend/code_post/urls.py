from django.urls import path

from code_post.views import ListCreateCodePostView, RetrieveUpdateDestroyCodePostView, SearchPostsView, ListFriendsPostView

urlpatterns = [
    path('', ListCreateCodePostView.as_view()),
    path('friends/', ListFriendsPostView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyCodePostView.as_view()),
    path('test/', RetrieveUpdateDestroyCodePostView.as_view()),
    path('search/', SearchPostsView.as_view()),
]
