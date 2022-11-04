from django.contrib.auth import get_user_model, login
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail
from django.shortcuts import redirect, render
from django.views import View
from requests import Response
from rest_framework.generics import GenericAPIView
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from registration.tokens import account_activation_token
from registration.models import Registration
from user.serializers import UserSerializer

User = get_user_model()

class ActivateAccountView(View):
    def get(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and account_activation_token.check_token(user, token):
            user.profile.email_confirmed = True
            user.save()
            login(request, user)
            return redirect('profile')
        else:
            # invalid link
            return render(request, 'registration/invalid.html')

class InvitationView(GenericAPIView):

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        send_mail(
            'Exclusive invitation for the Coders Hub',
            f'Hello there \n Please use this link {registration.code} to enter the gates of Valhalla',
            'django.development.testing@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False
        )
        return Response(status=200)

class RegistrationView(GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        new_user = User(email=user_email, username=user_email, is_active=False)
        new_user.save()
        registration = Registration(user=new_user)
        registration.save()




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
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)

        except ObjectDoesNotExist:
            return Response(status=404, data=f"{code} is not valid for this email: {email}")