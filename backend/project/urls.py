from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


from rest_framework_simplejwt import views

from project import settings

schema_view = get_schema_view(
   openapi.Info(
      title="Django API",
      default_version='v1',
      description="Description of your Django App",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="learn@propulsionacademy.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,  # Set to False restrict access to protected endpoints
   permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

    path('codepost/', include('code_post.urls')),
    path('answers/', include('answers.urls')),
    path('comments/', include('comments.urls')),
    path('generalposts/', include('general_posts.urls')),

# JWT
    path('token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
