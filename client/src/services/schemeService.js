import api from './api';
import {
  FALLBACK_CATEGORIES,
  FALLBACK_STATES,
  filterFallbackSchemes,
  getFallbackSchemeBySlug
} from '../data/fallbackData';

export const fetchSchemes = async (params = {}) => {
  try {
    const response = await api.get('/schemes', { params, timeout: 5000 });
    // Verify response is valid JSON object with array data
    if (response && response.data && Array.isArray(response.data.data)) {
      return response.data;
    }
    return filterFallbackSchemes(params);
  } catch (error) {
    console.warn('[YojnaMitra Client] API unreachable, using local verified dataset:', error.message);
    return filterFallbackSchemes(params);
  }
};

export const fetchSchemeBySlug = async (slug) => {
  try {
    const response = await api.get(`/schemes/${slug}`, { timeout: 5000 });
    if (response && response.data && response.data.data) {
      return response.data;
    }
    return { success: true, data: getFallbackSchemeBySlug(slug) };
  } catch (error) {
    console.warn('[YojnaMitra Client] Fetching scheme from fallback data:', error.message);
    return { success: true, data: getFallbackSchemeBySlug(slug) };
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('/schemes/categories', { timeout: 5000 });
    if (response && response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
      return response.data;
    }
    return { success: true, data: FALLBACK_CATEGORIES };
  } catch (error) {
    return { success: true, data: FALLBACK_CATEGORIES };
  }
};

export const fetchStates = async () => {
  try {
    const response = await api.get('/schemes/states', { timeout: 5000 });
    if (response && response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
      return response.data;
    }
    return { success: true, data: FALLBACK_STATES };
  } catch (error) {
    return { success: true, data: FALLBACK_STATES };
  }
};
