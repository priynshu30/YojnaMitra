import { getAllSchemes, getSchemeBySlug } from '../services/schemeDataStore.js';

export const getSchemes = async (req, res) => {
  try {
    const { search, category, level, state, beneficiary, sort, page, limit } = req.query;
    const result = await getAllSchemes({
      search,
      category,
      level,
      state,
      beneficiary,
      sort,
      page,
      limit,
      includeUnpublished: false
    });

    res.json({
      success: true,
      data: result.schemes,
      pagination: result.pagination
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजनाएँ लोड करने में त्रुटि हुई (Error fetching schemes).', error: error.message });
  }
};

export const getSchemeDetails = async (req, res) => {
  try {
    const { slug } = req.params;
    const scheme = await getSchemeBySlug(slug);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: 'मांगी गई योजना उपलब्ध नहीं है (Scheme not found).'
      });
    }

    res.json({
      success: true,
      data: scheme
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना विवरण लोड करने में त्रुटि हुई.', error: error.message });
  }
};

export const getCategories = async (req, res) => {
  const categories = [
    { id: 'Education', name: 'शिक्षा ও छात्रवृत्ति', nameEn: 'Education', icon: 'GraduationCap', count: 18, desc: 'स्कॉलरशिप, उच्च शिक्षा व शुल्क प्रतिपूर्ति योजनाएँ' },
    { id: 'Agriculture', name: 'कृषि व किसान कल्याण', nameEn: 'Agriculture', icon: 'Sprout', count: 24, desc: 'पीएम किसान, फसल बीमा, कृषि इनपुट व उपकरण सब्सिडी' },
    { id: 'Employment', name: 'रोजगार व श्रम', nameEn: 'Employment', icon: 'Briefcase', count: 15, desc: 'मनरेगा, अप्रेंटिसशिप, रोजगार मेले व श्रमिक लाभ' },
    { id: 'Women & Child', name: 'महिला व बाल विकास', nameEn: 'Women & Child', icon: 'Heart', count: 22, desc: 'सुकन्या समृद्धि, मातृत्व पोषण, कन्या सुमंगला' },
    { id: 'Housing', name: 'आवास व शहरी विकास', nameEn: 'Housing', icon: 'Home', count: 12, desc: 'पीएम आवास योजना (ग्रामीण/शहरी) पक्का मकान' },
    { id: 'Health', name: 'स्वास्थ्य व चिकित्सा', nameEn: 'Health', icon: 'Activity', count: 14, desc: 'आयुष्मान भारत ₹5 लाख कैशलेस स्वास्थ्य सुरक्षा' },
    { id: 'Business', name: 'व्यवसाय व स्वरोजगार', nameEn: 'Business', icon: 'Building2', count: 19, desc: 'मुद्रा ऋण, पीएमईजीपी, स्टार्टअप इंडिया सहायता' },
    { id: 'Social Welfare', name: 'सामाजिक सुरक्षा व पेंशन', nameEn: 'Social Welfare', icon: 'ShieldCheck', count: 16, desc: 'अटल पेंशन, वृद्धावस्था, दिव्यांग एवं विधवा पेंशन' },
    { id: 'Skills', name: 'कौशल विकास व प्रशिक्षण', nameEn: 'Skills', icon: 'Award', count: 11, desc: 'पीएमकेवीवाई, स्किल इंडिया डिजिटल व एनएसक्यूएफ' },
    { id: 'Financial Assistance', name: 'वित्तीय सहायता व ऋण', nameEn: 'Financial Assistance', icon: 'Coins', count: 17, desc: 'पीएम स्वनिधि, डीबीटी, लघु बचत व ब्याज छूट' }
  ];

  res.json({
    success: true,
    data: categories
  });
};

export const getStates = async (req, res) => {
  const states = [
    "All India",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  res.json({
    success: true,
    data: states
  });
};
