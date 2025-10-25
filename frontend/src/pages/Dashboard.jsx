import { useState, useEffect } from 'react';
import { dashboardAPI } from '../services/api';
import MetricCard from '../components/MetricCard';
import './Dashboard.css';

function Dashboard() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await dashboardAPI.getOverview();
      setOverview(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load dashboard data. Make sure the Django backend is running on port 8000.');
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchDashboardData} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Real-time metrics from your Django backend</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Metrics</h3>
          <div className="stat-value">{overview?.total_metrics || 0}</div>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <div className="stat-value">{overview?.total_categories || 0}</div>
        </div>
      </div>

      <div className="section">
        <h2>Recent Metrics</h2>
        <div className="metrics-grid">
          {overview?.recent_metrics?.map((metric) => (
            <MetricCard
              key={metric.id}
              name={metric.name}
              value={metric.value}
              category={metric.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
