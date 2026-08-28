import api from './api';

export const fetchAdminDashboard = async () => {
  const response = await api.get('/admin/dashboard');
  return response.data;
};

export const fetchAdminSchemes = async (params = {}) => {
  const response = await api.get('/admin/schemes', { params });
  return response.data;
};

export const createSchemeApi = async (schemeData) => {
  const response = await api.post('/admin/schemes', schemeData);
  return response.data;
};

export const updateSchemeApi = async (id, schemeData) => {
  const response = await api.put(`/admin/schemes/${id}`, schemeData);
  return response.data;
};

export const deleteSchemeApi = async (id) => {
  const response = await api.delete(`/admin/schemes/${id}`);
  return response.data;
};

export const updateSchemeStatusApi = async (id, status) => {
  const response = await api.patch(`/admin/schemes/${id}/status`, { status });
  return response.data;
};

export const verifySchemeApi = async (id) => {
  const response = await api.patch(`/admin/schemes/${id}/verify`);
  return response.data;
};
