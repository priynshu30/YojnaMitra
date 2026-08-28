/**
 * YojnaMitra Eligibility Rules Engine
 * Evaluates demographic profile against scheme rules.
 * Never claims 100% guarantee; uses "संभावित रूप से पात्र".
 */

export const evaluateEligibility = (profile, scheme) => {
  const rules = scheme.eligibilityRules || {};
  let totalCriteria = 0;
  let passedCriteria = 0;
  const reasons = [];
  const missingRequirements = [];

  const age = Number(profile.age) || null;
  const income = profile.income !== undefined && profile.income !== null ? Number(profile.income) : null;
  const gender = (profile.gender || '').toLowerCase();
  const state = profile.state || '';
  const occupation = (profile.occupation || '').toLowerCase();
  const category = (profile.category || '').toUpperCase();
  const residenceType = (profile.residenceType || '').toLowerCase();
  const maritalStatus = (profile.maritalStatus || '').toLowerCase();
  const disabilityStatus = Boolean(profile.disabilityStatus);

  // 1. Age check
  if (rules.age && (rules.age.min > 0 || rules.age.max < 100)) {
    totalCriteria += 1;
    const min = rules.age.min || 0;
    const max = rules.age.max || 100;
    if (age !== null) {
      if (age >= min && age <= max) {
        passedCriteria += 1;
        reasons.push(`आपकी आयु (${age} वर्ष) निर्धारित पात्रता सीमा (${min}-${max} वर्ष) के अंतर्गत है।`);
      } else {
        missingRequirements.push(`आयु सीमा ${min} से ${max} वर्ष होनी चाहिए (आपकी दर्ज आयु: ${age} वर्ष)।`);
      }
    } else {
      missingRequirements.push(`आयु संबंधी विवरण आवश्यक है (${min}-${max} वर्ष)।`);
    }
  }

  // 2. Gender check
  if (rules.gender && rules.gender.length > 0 && !rules.gender.includes('all')) {
    totalCriteria += 1;
    const allowedGenders = rules.gender.map(g => g.toLowerCase());
    if (gender && allowedGenders.includes(gender)) {
      passedCriteria += 1;
      reasons.push(`लिंग पात्रता मानदंड पूरा होता है।`);
    } else if (gender) {
      missingRequirements.push(`यह योजना केवल ${rules.gender.join(', ')} के लिए लागू है।`);
    }
  }

  // 3. State check
  if (rules.states && rules.states.length > 0 && !rules.states.includes('All India')) {
    totalCriteria += 1;
    if (state && (rules.states.includes(state) || rules.states.includes('All India'))) {
      passedCriteria += 1;
      reasons.push(`आपका राज्य (${state}) इस योजना के अंतर्गत शामिल है।`);
    } else if (state) {
      missingRequirements.push(`यह योजना ${rules.states.join(', ')} के निवासियों के लिए है।`);
    }
  } else if (scheme.level === 'Central' || scheme.state === 'All India') {
    reasons.push(`यह केंद्र सरकार की अखिल भारतीय योजना है, सभी राज्य पात्र हैं।`);
  }

  // 4. Occupation / Beneficiary check
  if (rules.occupations && rules.occupations.length > 0) {
    totalCriteria += 1;
    const allowedOccupations = rules.occupations.map(o => o.toLowerCase());
    if (occupation && (allowedOccupations.includes(occupation) || allowedOccupations.includes('all') || allowedOccupations.includes('any'))) {
      passedCriteria += 1;
      reasons.push(`आपका व्यवसाय / वर्ग (${profile.occupation}) इस योजना के योग्य है।`);
    } else if (occupation) {
      missingRequirements.push(`यह योजना मुख्य रूप से ${rules.occupations.join(', ')} के लिए है।`);
    }
  }

  // 5. Income check
  if (rules.income && rules.income.max) {
    totalCriteria += 1;
    const maxIncome = rules.income.max;
    if (income !== null) {
      if (income <= maxIncome) {
        passedCriteria += 1;
        reasons.push(`पारिवारिक वार्षिक आय (₹${income.toLocaleString('en-IN')}) अधिकतम सीमा (₹${maxIncome.toLocaleString('en-IN')}) के भीतर है।`);
      } else {
        missingRequirements.push(`वार्षिक पारिवारिक आय ₹${maxIncome.toLocaleString('en-IN')} से कम होनी चाहिए (दर्ज: ₹${income.toLocaleString('en-IN')})।`);
      }
    } else {
      missingRequirements.push(`आय प्रमाण पत्र एवं ₹${maxIncome.toLocaleString('en-IN')} से कम आय आवश्यक है।`);
    }
  }

  // 6. Social Category check (SC/ST/OBC/General)
  if (rules.categories && rules.categories.length > 0 && !rules.categories.includes('ALL')) {
    totalCriteria += 1;
    const allowedCats = rules.categories.map(c => c.toUpperCase());
    if (category && allowedCats.includes(category)) {
      passedCriteria += 1;
      reasons.push(`सामाजिक श्रेणी (${category}) पात्रता मानदंड से मेल खाती है।`);
    } else if (category) {
      missingRequirements.push(`यह योजना ${rules.categories.join(', ')} श्रेणी के लिए आरक्षित / लक्षित है।`);
    }
  }

  // 7. Residence Type (Rural / Urban)
  if (rules.residenceType && rules.residenceType.length > 0 && !rules.residenceType.includes('all')) {
    totalCriteria += 1;
    if (residenceType && rules.residenceType.includes(residenceType)) {
      passedCriteria += 1;
      reasons.push(`निवास क्षेत्र (${residenceType === 'rural' ? 'ग्रामीण' : 'शहरी'}) मेल खाता है।`);
    } else if (residenceType) {
      missingRequirements.push(`यह योजना ${rules.residenceType.map(r => r === 'rural' ? 'ग्रामीण' : 'शहरी').join(', ')} क्षेत्र के लिए है।`);
    }
  }

  // 8. Disability check
  if (rules.disabilityOnly) {
    totalCriteria += 1;
    if (disabilityStatus) {
      passedCriteria += 1;
      reasons.push(`दिव्यांगता श्रेणी का मानदंड पूरा होता है।`);
    } else {
      missingRequirements.push(`यह योजना विशेष रूप से दिव्यांग नागरिकों के लिए है।`);
    }
  }

  // Calculate score and status
  const effectiveTotal = Math.max(totalCriteria, 1);
  const ratio = passedCriteria / effectiveTotal;
  let status = 'NOT_ELIGIBLE';
  let badgeText = 'पात्रता संदिग्ध';

  if (missingRequirements.length === 0 && passedCriteria >= Math.floor(effectiveTotal * 0.7)) {
    status = 'MATCH';
    badgeText = 'संभावित रूप से पात्र';
  } else if (missingRequirements.length <= 1 || ratio >= 0.5) {
    status = 'PARTIAL_MATCH';
    badgeText = 'आंशिक रूप से पात्र';
  } else {
    status = 'NOT_ELIGIBLE';
    badgeText = 'वर्तमान में अपात्र';
  }

  return {
    schemeId: scheme._id,
    schemeSlug: scheme.slug,
    schemeName: scheme.name,
    schemeNameHindi: scheme.nameHindi || scheme.name,
    category: scheme.category,
    level: scheme.level,
    state: scheme.state,
    department: scheme.department,
    benefitSummary: scheme.benefitSummary,
    shortDescription: scheme.shortDescription,
    officialSourceUrl: scheme.officialSourceUrl,
    officialApplicationUrl: scheme.officialApplicationUrl,
    lastVerifiedAt: scheme.lastVerifiedAt,
    status,
    badgeText,
    matchScore: Math.round(ratio * 100),
    reasons,
    missingRequirements,
    documents: scheme.documents || [],
  };
};
