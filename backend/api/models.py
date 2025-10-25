from django.db import models

# Create your models here.

class DashboardMetric(models.Model):
    """Model for storing dashboard metrics"""
    name = models.CharField(max_length=100)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}: {self.value}"

    class Meta:
        ordering = ['-updated_at']
