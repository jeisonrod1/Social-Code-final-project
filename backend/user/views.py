from django.contrib.auth import get_user_model
from django.shortcuts import render

User = get_user_model
def validate_registration(email, data):
    user = User.objects.get(email=email)
    user.set_password(data['password'])
    user.save()