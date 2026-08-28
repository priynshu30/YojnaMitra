import api from './api';

export const fetchSchemes = async (params = {}) => {
  const response = await api.get('/schemes', { params });
  return response.data;
};

export const fetchSchemeBySlug = async (slug) => {
  const response = await api.get(`/schemes/${slug}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get('/schemes/categories');
  return response.data;
};

export const fetchStates = async () => {
  const response = await api.get('/schemes/states');
  return response.data;
};
