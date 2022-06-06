from django.urls import path

from .views import AdocaList

urlpatterns = [
    path('', AdocaList.as_view())
]