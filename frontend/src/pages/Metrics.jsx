import { useState, useEffect } from 'react';
import { dashboardAPI } from '../services/api';
import './Metrics.css';

function Metrics() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      const response = await dashboardAPI.getMetrics();
      setMetrics(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load metrics. Make sure the Django backend is running on port 8000.');
      console.error('Error fetching metrics:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="metrics-page">
        <div className="loading">Loading metrics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="metrics-page">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchMetrics} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="metrics-page">
      <div className="page-header">
        <h1>All Metrics</h1>
        <p>Complete list of dashboard metrics</p>
      </div>

      <div className="metrics-table-container">
        <table className="metrics-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
              <th>Category</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.id}>
                <td>{metric.id}</td>
                <td>{metric.name}</td>
                <td className="metric-value">{metric.value}</td>
                <td>
                  <span className={`category-badge ${metric.category}`}>
                    {metric.category}
                  </span>
                </td>
                <td>{new Date(metric.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Metrics;
