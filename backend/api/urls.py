from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DashboardMetricViewSet, dashboard_overview, health_check

router = DefaultRouter()
router.register(r'metrics', DashboardMetricViewSet, basename='metrics')

urlpatterns = [
    path('', include(router.urls)),
    path('overview/', dashboard_overview, name='dashboard-overview'),
    path('health/', health_check, name='health-check'),
]
