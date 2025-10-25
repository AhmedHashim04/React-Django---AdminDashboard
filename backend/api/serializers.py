from rest_framework import serializers
from .models import DashboardMetric


class DashboardMetricSerializer(serializers.ModelSerializer):
    """Serializer for DashboardMetric model"""
    class Meta:
        model = DashboardMetric
        fields = ['id', 'name', 'value', 'category', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
