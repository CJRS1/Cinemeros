from django.urls import path
from .views import *


urlpatterns=[
    path('registro/',RegistroUsuarioApiView.as_view()),
    path('cines/',RegistroCineApiView.as_view()),
    path('salas/',RegistroSalaApiView.as_view()),
    path('asientos/',RegistroAsientoApiView.as_view()),
]