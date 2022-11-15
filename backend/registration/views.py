from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response
from registration.models import Registration
from registration.serializers import RegistrationSerializer
from user.serializers import UserSerializer


User = get_user_model()


class UserRegistration(ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        new_user = User(email=user_email, is_active=False)
        new_user.save()
        registration = Registration(user=new_user)
        registration.save()
        send_mail(
            'Your registration code for Social-Code',
            f'{registration.code}',
            'social.code.2022@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )
        return Response('Email sent')


class Validation(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']

        try:
            check_validation = Registration.objects.get(code=code, user__email=email)
            check_validation.user.username = request.data['username']
            check_validation.user.first_name = request.data['first_name']
            check_validation.user.last_name = request.data['last_name']
            check_validation.user.set_password(request.data['password'])
            check_validation.password_confirm = request.data['password_confirm']
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)

        except ObjectDoesNotExist:
            return Response(status=404, data=f"{code} is not valid for this email: {email}")
