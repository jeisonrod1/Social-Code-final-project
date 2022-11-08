from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render

from friend_request.models import FriendRequest


@login_required
def send_friend_request(request, userID):
    friend_request_requester = request.user
    friend_request_receiver =User.objects.get(id=userID)
    fiend_request, created = FriendRequest.objects.get_or_create(
        from_user=friend_request_requester, to_user=friend_request_receiver
    )
    if created:
        return HttpResponse('friend request sent')
    else:
        return HttpResponse('friend request was already sent')

