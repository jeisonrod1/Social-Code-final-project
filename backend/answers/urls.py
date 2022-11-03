from django.urls import path

from answers.views import ListCreateAnswersView, RetrieveUpdateDestroyAnswersView

urlpatterns = [
    path('', ListCreateAnswersView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyAnswersView.as_view()),
]