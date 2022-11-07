from django.urls import path

from user.views import ListUserView, RetrieveUserView, GetUserProfile, SearchUserView, \
ToggleFollowerUser, GetFollowersListView, GetFollowingListView

urlpatterns = [

    path('users/list/', ListUserView.as_view()),
    path('users/<int:user_id>/', RetrieveUserView.as_view()),
    path('users/me/', GetUserProfile.as_view()),
    path('users/search/', SearchUserView.as_view()),
    path('followers/toggle-follow/<int:user_id>/', ToggleFollowerUser.as_view()),
    path('followers/followers/', GetFollowersListView.as_view()),
    path('followers/following/', GetFollowingListView.as_view()),





]
