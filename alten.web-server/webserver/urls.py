from django.contrib import admin
from django.urls import path, re_path, include
from server_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/v0/', include('api_v0.urls')),
    re_path(r'^tinymce/', include('tinymce.urls'))
]