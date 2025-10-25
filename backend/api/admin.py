from django.contrib import admin
from .models import DashboardMetric

# Register your models here.

@admin.register(DashboardMetric)
class DashboardMetricAdmin(admin.ModelAdmin):
    list_display = ['name', 'value', 'category', 'updated_at']
    list_filter = ['category', 'created_at']
    search_fields = ['name', 'category']
