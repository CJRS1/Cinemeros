from rest_framework.generics import CreateAPIView, ListCreateAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from .models import UsuarioModel,SalaModel,CineModel,AsientoModel
from .serializers import UsuarioSerializer,SalaSerializer,CineSerializer,AsientoSerializer

class RegistroUsuarioApiView(CreateAPIView):
    queryset = UsuarioModel.objects.all()
    serializer_class = UsuarioSerializer

    def post(self, request: Request):
        informacion = self.serializer_class(data=request.data)

        es_valida=informacion.is_valid()

        if not es_valida:
            return Response(data={
                'message':'Error al crear usuario',
                'content':informacion.errors
            },status=status.HTTP_400_BAD_REQUEST)
        
        else:
            nuevoUsuario = informacion.save()
            nuevoUsuarioSerializado = self.serializer_class(instance=nuevoUsuario)

            return Response(data={
                'message':'Usuario creado exitosamente, ya se puede logear',
                'content': nuevoUsuarioSerializado.data
            },status=status.HTTP_201_CREATED)

class RegistroCineApiView(CreateAPIView):
    queryset = UsuarioModel.objects.all()
    serializer_class = CineSerializer

    def post(self,request:Request):
        data = self.serializer_class(data=request.data)
        data.is_valid(raise_exception=True)
        nuevoCine=data.save()
        return Response(data={
            'message':'Cine creado exitosamente',
            'content': self.serializer_class(instance=nuevoCine).data
        })
    def get(self,request:Request):
        pass

class RegistroSalaApiView(CreateAPIView):
    queryset = UsuarioModel.objects.all()
    serializer_class = SalaSerializer

    def post(self,request:Request):
        data = self.serializer_class(data=request.data)
        data.is_valid(raise_exception=True)
        nuevoCine=data.save()
        return Response(data={
            'message':'Cine creado exitosamente',
            'content': self.serializer_class(instance=nuevoCine).data
        })
class RegistroAsientoApiView(CreateAPIView):
    queryset = UsuarioModel.objects.all()
    serializer_class = AsientoSerializer

    def post(self,request:Request):
        data = self.serializer_class(data=request.data)
        data.is_valid(raise_exception=True)
        nuevoCine=data.save()
        return Response(data={
            'message':'Cine creado exitosamente',
            'content': self.serializer_class(instance=nuevoCine).data
        })