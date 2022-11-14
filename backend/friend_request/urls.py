from django.urls import path

from friend_request.views import CreateRequestView, ListInvolvedRequestView, ListAcceptedRequestsView, RetrieveUpdateDestroyRequestView


# base Url: 'backend/friends/'
urlpatterns = [
    path('create/<int:id>', CreateRequestView.as_view()),
    path('my_pending/', ListInvolvedRequestView.as_view()),
    path('', ListAcceptedRequestsView.as_view()),
    path("change/<int:id>", RetrieveUpdateDestroyRequestView.as_view()),


    #path('', ListCreateCommentsView.as_view()),
    #path('<int:pk>/', RetrieveUpdateDestroyCommentsView.as_view()),
]