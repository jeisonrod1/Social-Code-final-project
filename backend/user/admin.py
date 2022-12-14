from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('date_joined',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password', 'avatar')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone', 'location', 'about_me', "company", "experience", "points",
                                      "friends", "following")}),
        # ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    # fields which are shown when looking at an list of instances
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)
