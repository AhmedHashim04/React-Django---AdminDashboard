from django.core.management.base import BaseCommand
from api.models import DashboardMetric


class Command(BaseCommand):
    help = 'Create sample dashboard metrics'

    def handle(self, *args, **options):
        # Clear existing data
        DashboardMetric.objects.all().delete()

        # Create sample metrics
        sample_metrics = [
            {'name': 'Total Sales', 'value': 125000.00, 'category': 'revenue'},
            {'name': 'New Customers', 'value': 342, 'category': 'customers'},
            {'name': 'Active Users', 'value': 1250, 'category': 'users'},
            {'name': 'Conversion Rate', 'value': 3.45, 'category': 'performance'},
            {'name': 'Average Order Value', 'value': 85.50, 'category': 'revenue'},
            {'name': 'Customer Satisfaction', 'value': 4.5, 'category': 'satisfaction'},
            {'name': 'Support Tickets', 'value': 23, 'category': 'support'},
            {'name': 'Response Time', 'value': 2.3, 'category': 'performance'},
        ]

        for metric_data in sample_metrics:
            DashboardMetric.objects.create(**metric_data)

        self.stdout.write(
            self.style.SUCCESS(
                f'Successfully created {len(sample_metrics)} sample metrics'
            )
        )
