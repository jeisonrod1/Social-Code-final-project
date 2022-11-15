from django.urls import path

from comments.views import CreateCommentsView, RetrieveUpdateDestroyCommentsView, ListCommentsView

# backend/comments/

urlpatterns = [
    path('', ListCommentsView.as_view()),
    path('create/<int:comment_pk>/', CreateCommentsView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyCommentsView.as_view()),
]