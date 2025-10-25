from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import DashboardMetric
from .serializers import DashboardMetricSerializer


class DashboardMetricViewSet(viewsets.ModelViewSet):
    """
    API endpoint for dashboard metrics
    """
    queryset = DashboardMetric.objects.all()
    serializer_class = DashboardMetricSerializer


@api_view(['GET'])
def dashboard_overview(request):
    """
    API endpoint to get dashboard overview statistics
    """
    metrics = DashboardMetric.objects.all()
    
    # Calculate summary statistics
    total_metrics = metrics.count()
    categories = metrics.values('category').distinct().count()
    
    # Get recent metrics
    recent_metrics = DashboardMetricSerializer(
        metrics[:5], 
        many=True
    ).data
    
    overview = {
        'total_metrics': total_metrics,
        'total_categories': categories,
        'recent_metrics': recent_metrics,
    }
    
    return Response(overview)


@api_view(['GET'])
def health_check(request):
    """
    Simple health check endpoint
    """
    return Response({
        'status': 'healthy',
        'message': 'Dashboard API is running'
    })
