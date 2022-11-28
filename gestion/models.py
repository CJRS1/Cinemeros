from django.db import models

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .authManager import UsuarioManager
# Create your models here.

class UsuarioModel(AbstractBaseUser,PermissionsMixin):
    id = models.AutoField(primary_key=True,unique=True, null=False)
    nombre = models.CharField(max_length=15,null=False)
    apellido = models.CharField(max_length=15,null=False)
    correo = models.EmailField(max_length=50,unique=True,null=False)
    password=models.TextField(null=False)
    tipoUsuario=models.CharField(max_length=13,choices=[
        ('ADMIN','ADMINISTRADOS'),
        ('USER','USUARIO')
    ],db_column='tipo_usuario')
    is_staff = models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    createdAt=models.DateTimeField(auto_now_add=True,db_column='created_at')
    objecs = UsuarioManager()

    USERNAME_FIELD='correo'

    REQUIRED_FIELDS=['nombre','apellido','tipoUsuario']

    class Meta: 
        db_table = 'usuarios'


class CineModel(models.Model):
    id = models.AutoField(primary_key=True,null=False,unique=True)
    direccion = models.CharField(max_length=50,null=False)
    salas = models.IntegerField(unique=True)
    fechaCreacion = models.DateTimeField(auto_now_add=True,db_column='fecha_creacion')
    id_sala = models.CharField(max_length=15, unique=True)

    class Meta:
        db_table='cines'

class SalaModel(models.Model):
    id_sala = models.CharField(max_length=15,unique=True)
    cantasientos = models.IntegerField()
    id_asiento = models.CharField(max_length=2,unique=True)
    duracion = models.TimeField(null=False)
    pelicula = models.CharField(max_length=50)

    class Meta:
        db_table='salas'

class AsientoModel(models.Model):
    id_asiento = models.CharField(max_length=2,unique=True)
    disponibilidad = models.BooleanField(default=True)
    
    class Meta:
        db_table='asientos'