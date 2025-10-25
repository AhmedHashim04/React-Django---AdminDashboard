import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dashboardAPI = {
  // Health check
  healthCheck: () => api.get('/health/'),

  // Get dashboard overview
  getOverview: () => api.get('/overview/'),

  // Metrics CRUD operations
  getMetrics: () => api.get('/metrics/'),
  getMetric: (id) => api.get(`/metrics/${id}/`),
  createMetric: (data) => api.post('/metrics/', data),
  updateMetric: (id, data) => api.put(`/metrics/${id}/`, data),
  deleteMetric: (id) => api.delete(`/metrics/${id}/`),
};

export default api;
