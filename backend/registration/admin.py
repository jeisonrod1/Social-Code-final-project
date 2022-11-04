from django.contrib import admin
from django.contrib.admin import ModelAdmin

from registration.models import Registration


class RegistrationAdmin(ModelAdmin):
    list_display = ['id', 'user', 'code']


admin.site.register(Registration, RegistrationAdmin)
