from django.contrib import admin
from django.urls import path, include
from portfolio import views

urlpatterns = [
    path("admin/", admin.site.urls),\
    path('', views.home, name='home'),
    path('projects/', views.projects, name='projects'),
    path("__reload__/", include("django_browser_reload.urls"))
]
