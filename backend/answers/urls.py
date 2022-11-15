from django.urls import path

from answers.views import ListAnswersView, RetrieveUpdateDestroyAnswersView, CreateAnswersView

urlpatterns = [
    path('', ListAnswersView.as_view()),
    path('create/<int:post_pk>', CreateAnswersView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyAnswersView.as_view()),
]