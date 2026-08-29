import api from './api';
import { FALLBACK_SCHEMES } from '../data/fallbackData';

export const checkEligibilityApi = async (profileData) => {
  try {
    const response = await api.post('/eligibility/check', profileData, { timeout: 5000 });
    if (response && response.data && Array.isArray(response.data.eligibleSchemes)) {
      return response.data;
    }
    return evaluateFallbackEligibility(profileData);
  } catch (error) {
    console.warn('[YojnaMitra] Eligibility API fallback:', error.message);
    return evaluateFallbackEligibility(profileData);
  }
};

function evaluateFallbackEligibility(profile) {
  const age = Number(profile.age) || 25;
  const gender = (profile.gender || 'all').toLowerCase();
  const state = profile.state || 'All India';
  const occupation = (profile.occupation || 'all').toLowerCase();
  const category = (profile.category || 'ALL').toUpperCase();
  const income = profile.annualIncome !== undefined && profile.annualIncome !== '' ? Number(profile.annualIncome) : null;
  const residenceType = (profile.residenceType || 'all').toLowerCase();
  const isSpeciallyAbled = Boolean(profile.isSpeciallyAbled);

  const eligibleSchemes = [];
  const potentiallyEligibleSchemes = [];

  FALLBACK_SCHEMES.forEach(scheme => {
    const rules = scheme.eligibilityRules || {};
    let isEligible = true;
    const reasons = [];

    // Age check
    if (rules.age) {
      if (rules.age.min !== undefined && age < rules.age.min) {
        isEligible = false;
        reasons.push(`न्यूनतम आयु ${rules.age.min} वर्ष आवश्यक`);
      }
      if (rules.age.max !== undefined && age > rules.age.max) {
        isEligible = false;
        reasons.push(`अधिकतम आयु ${rules.age.max} वर्ष तक`);
      }
    }

    // Gender check
    if (rules.gender && !rules.gender.includes('all')) {
      if (!rules.gender.map(g => g.toLowerCase()).includes(gender)) {
        isEligible = false;
        reasons.push(`यह योजना केवल ${rules.gender.join(', ')} के लिए है`);
      }
    }

    // State check
    if (rules.states && !rules.states.includes('All India')) {
      if (state !== 'All India' && !rules.states.map(s => s.toLowerCase()).includes(state.toLowerCase())) {
        isEligible = false;
        reasons.push(`यह केवल ${rules.states.join(', ')} के निवासियों के लिए है`);
      }
    }

    // Income check
    if (rules.income && rules.income.max !== null && income !== null) {
      if (income > rules.income.max) {
        isEligible = false;
        reasons.push(`वार्षिक आय ₹${rules.income.max.toLocaleString('en-IN')} से कम होनी चाहिए`);
      }
    }

    // Residence check
    if (rules.residenceType && !rules.residenceType.includes('all')) {
      if (residenceType !== 'all' && !rules.residenceType.includes(residenceType)) {
        isEligible = false;
        reasons.push(`यह योजना ${rules.residenceType.join('/')} क्षेत्रों के लिए है`);
      }
    }

    if (isEligible) {
      eligibleSchemes.push(scheme);
    } else if (reasons.length <= 1) {
      potentiallyEligibleSchemes.push({ ...scheme, failureReasons: reasons });
    }
  });

  return {
    success: true,
    totalEligible: eligibleSchemes.length,
    eligibleSchemes,
    potentiallyEligibleSchemes: potentiallyEligibleSchemes.slice(0, 4)
  };
}
