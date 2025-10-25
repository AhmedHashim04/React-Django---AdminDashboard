import './MetricCard.css';

function MetricCard({ name, value, category }) {
  const getCategoryColor = (category) => {
    const colors = {
      revenue: '#10b981',
      customers: '#3b82f6',
      users: '#8b5cf6',
      performance: '#f59e0b',
      satisfaction: '#ec4899',
      support: '#6366f1',
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="metric-card" style={{ borderLeftColor: getCategoryColor(category) }}>
      <div className="metric-category" style={{ color: getCategoryColor(category) }}>
        {category}
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-name">{name}</div>
    </div>
  );
}

export default MetricCard;
