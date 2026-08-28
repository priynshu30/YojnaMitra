import { getRawAllSchemesForEvaluation } from '../services/schemeDataStore.js';
import { evaluateEligibility } from '../services/eligibilityEngine.js';

export const checkEligibility = async (req, res) => {
  try {
    const profile = req.body;

    if (!profile || typeof profile !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'कृपया वैध प्रोफ़ाइल विवरण प्रदान करें (Invalid profile data).'
      });
    }

    const schemes = await getRawAllSchemesForEvaluation();

    const evaluated = schemes.map(scheme => evaluateEligibility(profile, scheme));

    // Sort by match score descending
    evaluated.sort((a, b) => b.matchScore - a.matchScore);

    const highMatch = evaluated.filter(s => s.status === 'MATCH');
    const possibleMatch = evaluated.filter(s => s.status === 'PARTIAL_MATCH');
    const notEligible = evaluated.filter(s => s.status === 'NOT_ELIGIBLE');

    res.json({
      success: true,
      meta: {
        totalEvaluated: evaluated.length,
        totalEligible: highMatch.length + possibleMatch.length,
        highMatchCount: highMatch.length,
        possibleMatchCount: possibleMatch.length,
        notEligibleCount: notEligible.length,
        disclaimer: 'यह परिणाम आपके द्वारा दी गई जानकारी के आधार पर है। अंतिम पात्रता संबंधित सरकारी विभाग द्वारा निर्धारित की जाती है।'
      },
      profile,
      data: {
        highMatch,
        possibleMatch,
        notEligible
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'पात्रता मूल्यांकन में त्रुटि हुई (Error evaluating eligibility).',
      error: error.message
    });
  }
};
