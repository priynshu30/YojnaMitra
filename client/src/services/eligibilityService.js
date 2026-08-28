import api from './api';

export const checkEligibilityApi = async (profileData) => {
  const response = await api.post('/eligibility/check', profileData);
  return response.data;
};
