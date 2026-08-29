/**
 * YojnaMitra — Client-Side Resilient Fallback Data
 * =================================================
 * Provides complete official schemes, categories, and state lists
 * so the frontend functions 100% reliably even on static deployments (Vercel)
 * or when the backend server is starting up / unreachable.
 */

export const FALLBACK_CATEGORIES = [
  { id: 'Education', name: 'शिक्षा व छात्रवृत्ति', nameEn: 'Education & Scholarship', icon: 'GraduationCap', count: 18, desc: 'स्कॉलरशिप, उच्च शिक्षा व शुल्क प्रतिपूर्ति योजनाएँ' },
  { id: 'Agriculture', name: 'कृषि व किसान कल्याण', nameEn: 'Agriculture & Farmers Welfare', icon: 'Sprout', count: 24, desc: 'पीएम किसान, फसल बीमा, कृषि इनपुट व उपकरण सब्सिडी' },
  { id: 'Employment', name: 'रोजगार व श्रम', nameEn: 'Employment & Livelihood', icon: 'Briefcase', count: 15, desc: 'मनरेगा, अप्रेंटिसशिप, रोजगार मेले व श्रमिक लाभ' },
  { id: 'Women & Child', name: 'महिला व बाल विकास', nameEn: 'Women & Child Development', icon: 'Heart', count: 22, desc: 'सुकन्या समृद्धि, मातृत्व पोषण, कन्या सुमंगला' },
  { id: 'Housing', name: 'आवास व शहरी विकास', nameEn: 'Housing & Shelter', icon: 'Home', count: 12, desc: 'पीएम आवास योजना (ग्रामीण/शहरी) पक्का मकान' },
  { id: 'Health', name: 'स्वास्थ्य व चिकित्सा', nameEn: 'Health & Medical', icon: 'Activity', count: 14, desc: 'आयुष्मान भारत ₹5 लाख कैशलेस स्वास्थ्य सुरक्षा' },
  { id: 'Business', name: 'व्यवसाय व स्वरोजगार', nameEn: 'Business & Entrepreneurship', icon: 'Building2', count: 19, desc: 'मुद्रा ऋण, पीएमईजीपी, स्टार्टअप इंडिया सहायता' },
  { id: 'Social Welfare', name: 'सामाजिक सुरक्षा व पेंशन', nameEn: 'Social Welfare & Pension', icon: 'ShieldCheck', count: 16, desc: 'अटल पेंशन, वृद्धावस्था, दिव्यांग एवं विधवा पेंशन' },
  { id: 'Skills', name: 'कौशल विकास व प्रशिक्षण', nameEn: 'Skill Development & Training', icon: 'Award', count: 11, desc: 'पीएमकेवीवाई, स्किल इंडिया डिजिटल व एनएसक्यूएफ' },
  { id: 'Financial Assistance', name: 'वित्तीय सहायता व ऋण', nameEn: 'Financial Assistance & Credit', icon: 'Coins', count: 17, desc: 'पीएम स्वनिधि, डीबीटी, लघु बचत व ब्याज छूट' }
];

export const FALLBACK_STATES = [
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

export const FALLBACK_SCHEMES = [
  {
    _id: "scheme_1",
    id: "scheme_1",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    nameHindi: "प्रधानमंत्री किसान सम्मान निधि योजना (PM-KISAN)",
    slug: "pm-kisan-samman-nidhi",
    shortDescription: "Direct income support of ₹6,000 per year in three equal installments to all landholding farmer families across India.",
    shortDescriptionHindi: "सभी पात्र भूमिधारक किसान परिवारों को ₹6,000 प्रति वर्ष की प्रत्यक्ष वित्तीय सहायता 3 समान किस्तों में सीधे बैंक खाते में प्रदान की जाती है।",
    fullDescription: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme to augment the income of all landholding farmers' families in the country to enable them to take care of expenses related to agriculture and allied activities as well as domestic needs. Under the Scheme an amount of ₹6,000/- per year is released by the Central Government directly into the bank accounts of eligible farmers in three equal installments of ₹2,000/- each every 4 months through Direct Benefit Transfer (DBT).",
    fullDescriptionHindi: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) भारत सरकार की एक महत्वपूर्ण योजना है, जिसके अंतर्गत देश के सभी छोटे और सीमांत किसान परिवारों को प्रतिवर्ष ₹6,000 की वित्तीय सहायता बैंक खाते में सीधे (DBT) अंतरित की जाती है। यह राशि ₹2,000 की तीन बराबर किश्तों में दी जाती है।",
    category: "Agriculture",
    subCategory: "Direct Income Support",
    level: "Central",
    state: "All India",
    department: "Ministry of Agriculture and Farmers Welfare, Govt of India",
    benefits: [
      "₹6,000 annually in 3 equal installments of ₹2,000 each",
      "Direct Benefit Transfer (DBT) into verified Aadhaar-linked bank account",
      "Financial assistance for seed, fertilizer, and agricultural inputs"
    ],
    benefitSummary: "₹6,000 प्रति वर्ष (₹2,000 की 3 किस्तों में सीधे बैंक खाते में)",
    eligibilityRules: {
      age: { min: 18, max: 100 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["farmer", "किसान", "agriculture", "all"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["rural", "all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "कृषि योग्य भूमि का स्वामित्व होना अनिवार्य",
      "संस्थागत भूमि धारक पात्र नहीं हैं",
      "संवैधानिक पदधारक अथवा आयकर दाता परिवार अपात्र हैं"
    ],
    documents: [
      { name: "Aadhaar Card (आधार कार्ड)", description: "Mandatory for identity verification and DBT link", isMandatory: true },
      { name: "Land Ownership Records (खतौनी / जमाबंदी / ROR)", description: "Proof of cultivable landholding in farmer's name", isMandatory: true },
      { name: "Aadhaar-Linked Bank Account Passbook", description: "Active bank account with NPCI Aadhaar seeding", isMandatory: true },
      { name: "Active Mobile Number", description: "Linked with Aadhaar for e-KYC OTP verification", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Online Registration on PM-KISAN Portal", description: "Visit the official PM-KISAN website (pmkisan.gov.in) and click on 'New Farmer Registration'." },
      { step: 2, title: "Enter Aadhaar & State Details", description: "Provide Aadhaar number, mobile number, and select your state/district/sub-district." },
      { step: 3, title: "Fill Land and Bank Details", description: "Enter Khata number, Khasra number, land area, and bank account details." },
      { step: 4, title: "State Level Verification & Approval", description: "Application is verified by state nodal officer and patwari before DBT fund release." }
    ],
    importantDates: {
      startDate: "01-12-2018",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmkisan.gov.in",
    officialApplicationUrl: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    sourceName: "Official PM-KISAN Portal, Department of Agriculture & Farmers Welfare",
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["agriculture", "farmer", "dbt", "kisan", "financial-support", "central"],
    faq: [
      { question: "क्या बटाईदार या किराये पर खेती करने वाले किसान पात्र हैं?", answer: "नहीं, योजना के दिशा-निर्देशों के अनुसार भूमि का वैध स्वामित्व (Landholding) किसान के नाम होना आवश्यक है।" },
      { question: "e-KYC कैसे पूरी करें?", answer: "PM-KISAN पोर्टल पर 'e-KYC' विकल्प पर जाकर आधार संख्या दर्ज करें और पंजीकृत मोबाइल पर प्राप्त OTP द्वारा सत्यापित करें।" }
    ]
  },
  {
    _id: "scheme_2",
    id: "scheme_2",
    name: "National Scholarship Portal — Post-Matric Scholarship for Higher Education",
    nameHindi: "राष्ट्रीय छात्रवृत्ति पोर्टल — पोस्ट-मैट्रिक उच्च शिक्षा छात्रवृत्ति",
    slug: "nsp-post-matric-scholarship",
    shortDescription: "Financial assistance covering tuition fees and maintenance allowance for post-secondary and higher education students.",
    shortDescriptionHindi: "10वीं कक्षा के बाद उच्च शिक्षा (डिप्लोमा, स्नातक, स्नातकोत्तर) के लिए शिक्षण शुल्क और रखरखाव भत्ता सहायता।",
    fullDescription: "The Post-Matric Scholarship scheme provides financial assistance to students belonging to economically weaker and reserved categories studying at post-matriculation or post-secondary stage to enable them to complete their education. Scholarships cover full or partial tuition fees along with non-refundable compulsory fees and a monthly maintenance allowance directly disbursed to the student's Aadhaar-seeded bank account.",
    fullDescriptionHindi: "पोस्ट-मैट्रिक छात्रवृत्ति योजना उच्च शिक्षण संस्थानों में अध्ययनरत योग्य छात्र-छात्राओं को वित्तीय सहायता प्रदान करती है ताकि आर्थिक तंगी के कारण उनकी पढ़ाई न रुके। इसमें प्रवेश शुल्क, ट्यूशन फीस और मासिक रखरखाव भत्ता सम्मिलित होता है।",
    category: "Education",
    subCategory: "Higher Education Scholarship",
    level: "Central",
    state: "All India",
    department: "Ministry of Social Justice & Empowerment / Ministry of Education",
    benefits: [
      "Up to ₹20,000 to ₹50,000 per academic year covering course fees",
      "Monthly maintenance allowance up to ₹1,200/month for hostellers and ₹550/month for day scholars",
      "Additional assistance for study tours, book grants, and thesis typing"
    ],
    benefitSummary: "₹15,000 से ₹50,000 प्रति वर्ष शिक्षण शुल्क प्रतिपूर्ति + रखरखाव भत्ता",
    eligibilityRules: {
      age: { min: 15, max: 35 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["student", "विद्यार्थी", "learner", "all"],
      categories: ["SC", "ST", "OBC", "GENERAL", "EWS", "ALL"],
      income: { max: 250000 },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "कक्षा 10वीं उत्तीर्ण और मान्यता प्राप्त कॉलेज/विश्वविद्यालय में नियमित नामांकित",
      "पारिवारिक वार्षिक आय ₹2,50,000 से अधिक न हो",
      "पिछली परीक्षा में न्यूनतम 50% या उत्तीर्ण अंक"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Student's Aadhaar card", isMandatory: true },
      { name: "Income Certificate (आय प्रमाण पत्र)", description: "Issued by competent revenue authority (Tehsildar/SDM)", isMandatory: true },
      { name: "Previous Year Marksheet (अंकतालिका)", description: "10th/12th/Last semester mark sheet", isMandatory: true },
      { name: "Current College Fee Receipt & Bonafide Certificate", description: "Issued by principal/dean of institution", isMandatory: true },
      { name: "Bank Account Passbook (Aadhaar Seeded)", description: "Student's self bank account", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "One-Time Registration (OTR) on NSP", description: "Visit scholarships.gov.in and generate NSP OTR using Aadhaar and Mobile OTP." },
      { step: 2, title: "Select State & Scholarship Scheme", description: "Log in with credentials and choose Post-Matric scheme according to your category." },
      { step: 3, title: "Upload Academic and Income Documents", description: "Upload scanned copies of marksheets, fee receipt, and income certificate." },
      { step: 4, title: "Institute Verification (INO) & State Merit", description: "Institute Nodal Officer verifies credentials online, followed by state approval." }
    ],
    importantDates: {
      startDate: "01-07-2024",
      endDate: "30-11-2024",
      applicationStatus: "Application Active"
    },
    officialSourceUrl: "https://scholarships.gov.in",
    officialApplicationUrl: "https://scholarships.gov.in/fresh/newstdRegfrmInstruction",
    sourceName: "National Scholarship Portal, Ministry of Education",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["education", "scholarship", "students", "post-matric", "nsp", "college"],
    faq: [
      { question: "क्या प्राइवेट कॉलेज के छात्र भी आवेदन कर सकते हैं?", answer: "हाँ, यदि प्राइवेट संस्थान AICTE/UGC/राज्य बोर्ड से मान्यता प्राप्त है और NSP पर सूचीबद्ध है।" }
    ]
  },
  {
    _id: "scheme_3",
    id: "scheme_3",
    name: "Pradhan Mantri Awas Yojana — Gramin (PMAY-G)",
    nameHindi: "प्रधानमंत्री आवास योजना — ग्रामीण (PMAY-G)",
    slug: "pmay-gramin-housing",
    shortDescription: "Financial grant of ₹1.20 Lakh (plains) to ₹1.30 Lakh (hilly areas) along with 90 days MGNREGA wages for building a pucca house.",
    shortDescriptionHindi: "ग्रामीण क्षेत्रों में बेघर एवं कच्चे मकानों में रहने वाले परिवारों को पक्का मकान बनाने हेतु ₹1.20 लाख से ₹1.30 लाख की सीधी सहायता।",
    fullDescription: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G) aims to provide a pucca house with basic amenities to all houseless households and households living in kutcha and dilapidated houses in rural areas. The cost of house construction is shared between Central and State Government.",
    fullDescriptionHindi: "प्रधानमंत्री आवास योजना (ग्रामीण) का उद्देश्य ग्रामीण भारत के निर्धन परिवारों को गुणवत्तापूर्ण पक्का मकान उपलब्ध कराना है। लाभार्थी को आवास निर्माण हेतु तीन किस्तों में सहायता राशि सीधे बैंक खाते में दी जाती है।",
    category: "Housing",
    subCategory: "Rural Housing Assistance",
    level: "Central",
    state: "All India",
    department: "Ministry of Rural Development, Govt of India",
    benefits: [
      "Financial assistance of ₹1,20,000 (Plain areas) / ₹1,30,000 (Hilly/NE areas)",
      "90 to 95 days of unskilled labor wages under MGNREGA (~₹20,000 additional)",
      "₹12,000 assistance for toilet construction under Swachh Bharat Mission (Grameen)"
    ],
    benefitSummary: "₹1,20,000 से ₹1,30,000 पक्का आवास निर्माण अनुदान + मनरेगा मजदूरी",
    eligibilityRules: {
      age: { min: 18, max: 80 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["all", "farmer", "labourer", "worker", "any"],
      categories: ["ALL", "SC", "ST", "OBC", "GENERAL"],
      income: { max: 180000 },
      residenceType: ["rural"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "ग्रामीण क्षेत्र का निवासी होना अनिवार्य",
      "परिवार के पास देश में कहीं भी पक्का मकान नहीं होना चाहिए",
      "SECC 2011 सूची / Awas+ सर्वेक्षण में नाम सम्मिलित होना"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Aadhaar of head of household and family members", isMandatory: true },
      { name: "Bank Account Details", description: "Active bank passbook with Aadhaar link", isMandatory: true },
      { name: "MGNREGA Job Card Number", description: "Required for receiving labor wage component", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Identification via Gram Sabha & Awas+", description: "Beneficiaries are shortlisted from Gram Panchayat verified priority lists." },
      { step: 2, title: "Geo-tagging of Existing Kutcha Site", description: "Gram Rojgar Sahayak takes geo-tagged photograph of the current site." },
      { step: 3, title: "Registration on AwaasSoft Portal", description: "Block Development Office registers beneficiary with Aadhaar and bank details." },
      { step: 4, title: "Stage-Wise DBT Fund Release", description: "Funds released in 3 stages: Foundation level, Lintel level, and Final completion." }
    ],
    importantDates: {
      startDate: "20-11-2016",
      endDate: "31-03-2029",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmayg.nic.in",
    officialApplicationUrl: "https://awaassoft.nic.in",
    sourceName: "Ministry of Rural Development Official Portal",
    lastVerifiedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["housing", "pmay", "rural", "awas", "gramin", "central"],
    faq: [
      { question: "क्या पक्का मकान वाले परिवार आवेदन कर सकते हैं?", answer: "नहीं, यह योजना केवल बेघर अथवा शून्य, 1 या 2 कच्चे कमरों वाली छत के नीचे रहने वाले परिवारों के लिए है।" }
    ]
  },
  {
    _id: "scheme_4",
    id: "scheme_4",
    name: "Pradhan Mantri Mudra Yojana (PMMY) — Micro Business Loans",
    nameHindi: "प्रधानमंत्री मुद्रा योजना (PMMY) — सूक्ष्म व्यवसाय एवं उद्यमिता ऋण",
    slug: "pm-mudra-yojana-business-loan",
    shortDescription: "Collateral-free business loans up to ₹10 Lakh across Shishu, Kishore, and Tarun categories for non-farm enterprises.",
    shortDescriptionHindi: "सूक्ष्म एवं छोटे व्यवसायों, दुकानदारों और नए उद्यमियों के लिए बिना किसी गारंटी के ₹50,000 से ₹10 लाख का सस्ता ऋण।",
    fullDescription: "Pradhan Mantri MUDRA Yojana (PMMY) is a flagship scheme to fund the unfunded by bringing such enterprises to the formal financial system and extending affordable credit to them. It enables a small borrower to borrow from all Public Sector Banks, Regional Rural Banks, Small Finance Banks, MFIs and NBFCs for non-farm income generating activities up to ₹10 Lakh without providing any collateral security.",
    fullDescriptionHindi: "प्रधानमंत्री मुद्रा योजना के तहत विनिर्माण, प्रसंस्करण, व्यापार या सेवा क्षेत्र से जुड़े गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को तीन श्रेणियों — 'शिशु' (₹50,000 तक), 'किशोर' (₹50,000 से ₹5 लाख तक) तथा 'तरुण' (₹5 लाख से ₹10 लाख तक) में बिना बंधक (collateral-free) ऋण दिया जाता है।",
    category: "Business",
    subCategory: "Collateral Free Loans",
    level: "Central",
    state: "All India",
    department: "Department of Financial Services, Ministry of Finance, Govt of India",
    benefits: [
      "No collateral or security required to avail loan",
      "Zero processing fee for Shishu and Kishore loans",
      "Flexible repayment tenure from 3 to 5 years",
      "Mudra Debit Card provided for working capital cash credit limit"
    ],
    benefitSummary: "बिना गारंटी ₹50,000 से ₹10 लाख तक का रियायती व्यवसाय ऋण",
    eligibilityRules: {
      age: { min: 18, max: 65 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["business", "व्यवसायी", "self-employed", "entrepreneur", "shopkeeper", "all"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "भारतीय नागरिक होना चाहिए",
      "व्यवसाय गैर-कृषि आय सृजन (दुकान, सेवा, विनिर्माण, कारीगर) से संबंधित हो",
      "किसी भी बैंक या वित्तीय संस्थान में ऋण का डिफाल्टर न हो"
    ],
    documents: [
      { name: "Identity & Address Proof (Aadhaar / Voter ID / Passport)", description: "Valid KYC documents", isMandatory: true },
      { name: "Bank Statement (Last 6 Months)", description: "Current or savings bank statement", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Apply on JanSamarth Portal", description: "Visit jansamarth.in and choose 'Pradhan Mantri Mudra Yojana'." },
      { step: 2, title: "Select Loan Category", description: "Enter required loan amount, business plan, and personal KYC." },
      { step: 3, title: "Select Preferred Lending Bank", description: "Choose public/private bank near your business location." },
      { step: 4, title: "In-Principle Sanction & Disbursal", description: "Bank reviews proposal, conducts verification, and disburses loan." }
    ],
    importantDates: {
      startDate: "08-04-2015",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.mudra.org.in",
    officialApplicationUrl: "https://www.jansamarth.in/home",
    sourceName: "MUDRA Ltd / Department of Financial Services",
    lastVerifiedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["business", "mudra", "loan", "entrepreneur", "msme", "shishu", "kishore"],
    faq: [
      { question: "क्या मुद्रा लोन के लिए किसी गारंटी की जरूरत होती है?", answer: "नहीं, मुद्रा ऋण पूरी तरह से बिना किसी गारंटी (Collateral-free) के दिया जाता है।" }
    ]
  },
  {
    _id: "scheme_5",
    id: "scheme_5",
    name: "Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    nameHindi: "आयुष्मान भारत — प्रधानमंत्री जन आरोग्य योजना (AB-PMJAY)",
    slug: "ayushman-bharat-pmjay-health",
    shortDescription: "Cashless health insurance coverage of ₹5 Lakh per family per year for secondary and tertiary healthcare hospitalizations.",
    shortDescriptionHindi: "पात्र परिवारों को देश भर के सूचीबद्ध सरकारी एवं निजी अस्पतालों में प्रतिवर्ष ₹5 लाख तक का निःशुल्क कैशलेस इलाज।",
    fullDescription: "Ayushman Bharat PM-JAY is the world's largest government-funded healthcare scheme. It provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India. The scheme is completely cashless and paperless at the point of service, covering over 1,900 medical procedures including oncology, cardiology, neurosurgery, and pre-existing diseases from day one.",
    fullDescriptionHindi: "आयुष्मान भारत योजना के तहत देश के 12 करोड़ से अधिक गरीब और कमजोर परिवारों को ₹5 लाख तक का वार्षिक स्वास्थ्य बीमा सुरक्षा कवर मिलता है। 70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिकों को भी इस योजना में शामिल किया गया है।",
    category: "Health",
    subCategory: "Health Insurance & Hospitalization",
    level: "Central",
    state: "All India",
    department: "National Health Authority (NHA), Ministry of Health & Family Welfare",
    benefits: [
      "₹5,00,000 annual cashless coverage per eligible family",
      "Covers 1,949 medical procedures, medicines, diagnostics, and ICU charges",
      "Pre and post-hospitalization expenses up to 15 days included",
      "No restriction on family size, age, or gender"
    ],
    benefitSummary: "प्रति परिवार ₹5,00,000 प्रति वर्ष तक का निःशुल्क कैशलेस अस्पताल उपचार",
    eligibilityRules: {
      age: { min: 0, max: 120 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["all", "labourer", "worker", "farmer", "homemaker", "any"],
      categories: ["ALL"],
      income: { max: 250000 },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "SECC 2011 ग्रामीण/शहरी वंचित सूची अथवा राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) राशन कार्ड धारक",
      "70 वर्ष या उससे अधिक आयु के सभी वरिष्ठ नागरिक (नवीनतम विस्तार)",
      "परिवार के किसी सदस्य द्वारा संगठित क्षेत्र में ईएसआई/सीजीएचएस लाभ न लिया जा रहा हो"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Mandatory for biometrics and identity", isMandatory: true },
      { name: "Ration Card / NFSA Food Security Card", description: "Family identity and member verification", isMandatory: true },
      { name: "Active Mobile Number", description: "For Ayushman Card OTP e-KYC", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Check Eligibility on Beneficiary Portal", description: "Visit beneficiary.nha.gov.in and log in with your mobile number." },
      { step: 2, title: "Search Family by Ration Card / Aadhaar", description: "Search by state, scheme (PMJAY), and enter Ration card or Family ID." },
      { step: 3, title: "Complete e-KYC using Aadhaar OTP / Iris", description: "Verify identity and capture live facial photo." },
      { step: 4, title: "Instant Download of Ayushman PVC Card", description: "Download Ayushman Card and present at any empaneled hospital helpdesk." }
    ],
    importantDates: {
      startDate: "23-09-2018",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmjay.gov.in",
    officialApplicationUrl: "https://beneficiary.nha.gov.in",
    sourceName: "National Health Authority (NHA), Govt of India",
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["health", "ayushman", "pmjay", "hospital", "cashless", "insurance"],
    faq: [
      { question: "क्या पहले से मौजूद बीमारियों का इलाज भी कवर होता है?", answer: "हाँ, आयुष्मान भारत योजना में पहले दिन से ही सभी पुरानी और गंभीर बीमारियां (Pre-existing diseases) कवर होती हैं।" }
    ]
  },
  {
    _id: "scheme_6",
    id: "scheme_6",
    name: "Sukanya Samriddhi Yojana (SSY)",
    nameHindi: "सुकन्या समृद्धि योजना (SSY) — बालिका समृद्धि बचत योजना",
    slug: "sukanya-samriddhi-yojana",
    shortDescription: "High-interest government-backed small savings scheme for girl child with tax exemption under Section 80C.",
    shortDescriptionHindi: "बालिकाओं के उज्ज्वल भविष्य और उच्च शिक्षा हेतु 8.2% की उच्चतम ब्याज दर वाली सरकार समर्थित बचत योजना (कर मुक्त)।",
    fullDescription: "Sukanya Samriddhi Account is a Government of India-backed savings scheme targeted at parents of girl children. The scheme encourages parents to build a fund for future education and marriage expenses of their female child with 8.2% interest rate and Section 80C tax exemption.",
    fullDescriptionHindi: "सुकन्या समृद्धि योजना 'बेटी बचाओ, बेटी पढ़ाओ' अभियान का एक घटक है। इसके अंतर्गत 10 वर्ष से कम आयु की बालिकाओं के नाम पर डाकघर या बैंक में खाता खोला जा सकता है। इसमें 8.2% वार्षिक चक्रवृद्धि ब्याज मिलता है।",
    category: "Women & Child",
    subCategory: "Girl Child Savings",
    level: "Central",
    state: "All India",
    department: "Ministry of Finance / Department of Posts, Govt of India",
    benefits: [
      "Highest government small savings interest rate (8.2% per annum)",
      "Triple tax benefit (80C exemption on deposit, interest, and maturity)",
      "Low minimum annual deposit of only ₹250"
    ],
    benefitSummary: "8.2% वार्षिक ब्याज दर + पूर्ण आयकर छूट (80C) + 21 वर्ष पर परिपक्वता",
    eligibilityRules: {
      age: { min: 0, max: 10 },
      gender: ["female"],
      states: ["All India"],
      occupations: ["all", "student", "any"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "बालिका की आयु खाता खोलने के समय 10 वर्ष से कम होनी चाहिए",
      "खाता माता-पिता या कानूनी अभिभावक द्वारा खोला जा सकता है",
      "एक परिवार में अधिकतम 2 बालिकाओं का खाता खोला जा सकता है"
    ],
    documents: [
      { name: "Birth Certificate of Girl Child (जन्म प्रमाण पत्र)", description: "Issued by Registrar of Births", isMandatory: true },
      { name: "Identity & Address Proof of Guardian", description: "Aadhaar / PAN of parent/guardian", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Collect Form from Post Office or Bank", description: "Collect SSY account opening form from nearest Post Office or Bank branch." },
      { step: 2, title: "Attach Birth Certificate and Guardian KYC", description: "Fill details and attach required identity proof." },
      { step: 3, title: "Deposit Minimum ₹250", description: "Deposit initial opening amount." }
    ],
    importantDates: {
      startDate: "22-01-2015",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.indiapost.gov.in",
    officialApplicationUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    sourceName: "Department of Posts / Ministry of Finance",
    lastVerifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["women", "child", "girl-child", "sukanya", "savings", "tax-saving", "central"],
    faq: [
      { question: "खाता कब परिपक्व होता है?", answer: "खाता खोलने की तिथि से 21 वर्ष पूरे होने पर अथवा 18 वर्ष की आयु के बाद बालिका के विवाह के समय परिपक्व होता है।" }
    ]
  },
  {
    _id: "scheme_7",
    id: "scheme_7",
    name: "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)",
    nameHindi: "मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)",
    slug: "up-mukhyamantri-kanya-sumangala-yojana",
    shortDescription: "State financial assistance of ₹25,000 released in 6 milestone stages from birth to graduation for girl children in UP.",
    shortDescriptionHindi: "उत्तर प्रदेश सरकार द्वारा बालिकाओं को जन्म से लेकर स्नातक तक की शिक्षा हेतु 6 चरणों में कुल ₹25,000 की वित्तीय सहायता।",
    fullDescription: "Mukhyamantri Kanya Sumangala Yojana is a flagship scheme of the Government of Uttar Pradesh to prevent female foeticide, promote girl child education, and provide financial security up to ₹25,000 across six stages from birth to graduation.",
    fullDescriptionHindi: "उत्तर प्रदेश सरकार द्वारा संचालित कन्या सुमंगला योजना बेटियों के स्वास्थ्य और उच्च शिक्षा को बढ़ावा देने के लिए एक सामाजिक सुरक्षा योजना है जिसमें ₹25,000 की कुल सहायता डीबीटी से दी जाती है।",
    category: "Women & Child",
    subCategory: "State Girl Child Education",
    level: "State",
    state: "Uttar Pradesh",
    department: "Department of Women and Child Development, Government of Uttar Pradesh",
    benefits: [
      "Stage 1 (At birth): ₹5,000 grant",
      "Stage 2 (Complete vaccination): ₹2,000 grant",
      "Stage 3 (Class 1 admission): ₹3,000 grant",
      "Stage 4 (Class 6 admission): ₹3,000 grant",
      "Stage 5 (Class 9 admission): ₹5,000 grant",
      "Stage 6 (Degree / Diploma admission): ₹7,000 grant"
    ],
    benefitSummary: "कुल ₹25,000 की नकद सहायता 6 चरणों में (जन्म से स्नातक तक)",
    eligibilityRules: {
      age: { min: 0, max: 25 },
      gender: ["female"],
      states: ["Uttar Pradesh", "UP"],
      occupations: ["all", "student", "any"],
      categories: ["ALL"],
      income: { max: 300000 },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "उत्तर प्रदेश का स्थायी निवासी (मूल निवास प्रमाण पत्र आवश्यक)",
      "परिवार की वार्षिक आय अधिकतम ₹3,00,000 तक होनी चाहिए",
      "एक परिवार से अधिकतम 2 पुत्रियों को लाभ अनुमन्य"
    ],
    documents: [
      { name: "UP Domicile / Residence Certificate (मूल निवास प्रमाण पत्र)", description: "Issued by UP Revenue Department", isMandatory: true },
      { name: "Family Income Certificate (आय प्रमाण पत्र)", description: "Annual income below ₹3 Lakh", isMandatory: true },
      { name: "Girl Child Birth Certificate & Aadhaar", description: "Birth registration certificate", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Register on MKSY Portal", description: "Visit mksy.up.gov.in and register citizen profile." },
      { step: 2, title: "Apply for Specific Milestone Stage", description: "Upload proof of current stage (Birth, Vaccination, Admission)." }
    ],
    importantDates: {
      startDate: "01-04-2019",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://mksy.up.gov.in",
    officialApplicationUrl: "https://mksy.up.gov.in/women_welfare/citizen/guest_user.php",
    sourceName: "Women Welfare Department, Govt of Uttar Pradesh",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["up", "uttar-pradesh", "kanya-sumangala", "girl-child", "state-scheme"],
    faq: [
      { question: "क्या परिवार की आय सीमा तय है?", answer: "हाँ, परिवार की वार्षिक आय ₹3,00,000 से अधिक नहीं होनी चाहिए।" }
    ]
  },
  {
    _id: "scheme_8",
    id: "scheme_8",
    name: "PM SVANidhi — Micro-Credit Scheme for Street Vendors",
    nameHindi: "पीएम स्वनिधि योजना — स्ट्रीट वेंडर्स आत्मनिर्भर निधि",
    slug: "pm-svanidhi-street-vendors",
    shortDescription: "Working capital loan starting from ₹10,000 up to ₹50,000 with 7% interest subsidy and cashback on digital transactions for street vendors.",
    shortDescriptionHindi: "रेहड़ी-पटरी, ठेला लगाने वाले छोटे फुटपाथ व्यापारियों के लिए ₹10,000 से ₹50,000 तक का सस्ता कार्यशील पूंजी ऋण व 7% ब्याज सब्सिडी।",
    fullDescription: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) provides affordable working capital loan up to ₹10,000 (Tranche 1), ₹20,000 (Tranche 2) and ₹50,000 (Tranche 3) with 7% interest subsidy directly credited into bank accounts.",
    fullDescriptionHindi: "पीएम स्वनिधि योजना शहरी एवं अर्ध-शहरी क्षेत्रों के रेहड़ी-पटरी विक्रेताओं को किफायती पूंजी उपलब्ध कराती है। समय पर ऋण चुकाने पर 7% ब्याज सब्सिडी सीधे खाते में मिलती है।",
    category: "Financial Assistance",
    subCategory: "Street Vendor Micro Credit",
    level: "Central",
    state: "All India",
    department: "Ministry of Housing and Urban Affairs, Govt of India",
    benefits: [
      "1st Tranche loan up to ₹10,000 without collateral",
      "2nd Tranche loan up to ₹20,000 on timely repayment",
      "3rd Tranche loan up to ₹50,000",
      "7% annual interest subsidy deposited quarterly"
    ],
    benefitSummary: "₹10,000 से ₹50,000 तक का संपार्श्विक मुक्त कार्यशील पूंजी ऋण + 7% ब्याज सब्सिडी",
    eligibilityRules: {
      age: { min: 18, max: 70 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["business", "व्यवसायी", "vendor", "hawker", "self-employed", "all"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["urban", "all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "शहरी या आसपास के इलाकों में वेंडिंग करने वाले स्ट्रीट वेंडर्स",
      "नगर निकाय द्वारा जारी वेंडिंग प्रमाण पत्र या LoR धारक"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Linked with active mobile for OTP", isMandatory: true },
      { name: "Certificate of Vending (CoV) / LoR", description: "Issued by Municipal Corporation", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Visit PMSVANidhi Portal", description: "Go to pmsvanidhi.mohua.gov.in and log in with Aadhaar mobile OTP." },
      { step: 2, title: "Select Preferred Bank & Submit", description: "Choose lending bank branch and submit application." }
    ],
    importantDates: {
      startDate: "01-06-2020",
      endDate: "31-12-2024",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmsvanidhi.mohua.gov.in",
    officialApplicationUrl: "https://pmsvanidhi.mohua.gov.in/Home/ApplyLetterOfRecommendation",
    sourceName: "Ministry of Housing and Urban Affairs (MoHUA)",
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["svanidhi", "vendor", "street-vendor", "loan", "urban", "micro-credit"],
    faq: [
      { question: "क्या किसी गारंटी की जरूरत है?", answer: "नहीं, यह ऋण पूरी तरह संपार्श्विक मुक्त (Collateral Free) है।" }
    ]
  },
  {
    _id: "scheme_9",
    id: "scheme_9",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    nameHindi: "प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)",
    slug: "pm-kaushal-vikas-yojana-skill",
    shortDescription: "Free skill training, industry-recognized certification, stipend support, and placement assistance for unemployed youth.",
    shortDescriptionHindi: "बेरोजगार युवाओं को निःशुल्क उद्योग-उन्मुख कौशल प्रशिक्षण, सरकारी प्रमाण पत्र तथा रोजगार एवं स्वरोजगार सहायता।",
    fullDescription: "PMKVY 4.0 is the flagship scheme of the Ministry of Skill Development and Entrepreneurship (MSDE) implemented by NSDC providing free training in emerging tech, AI, drone, healthcare and manufacturing sectors.",
    fullDescriptionHindi: "प्रधानमंत्री कौशल विकास योजना 4.0 के अंतर्गत युवाओं को आधुनिक तकनीक, ड्रोन टेक्नोलॉजी, आर्टिफिशियल इंटेलिजेंस व हैंडीक्राफ्ट्स जैसे 40+ क्षेत्रों में निःशुल्क प्रशिक्षण दिया जाता है।",
    category: "Skills",
    subCategory: "Youth Skill Certification",
    level: "Central",
    state: "All India",
    department: "Ministry of Skill Development and Entrepreneurship (MSDE) / NSDC",
    benefits: [
      "100% Free NSQF-aligned skill training and assessment",
      "Government-recognized Skill India Digital Passport Certificate",
      "Conveyance allowance / stipend during training"
    ],
    benefitSummary: "निःशुल्क कौशल प्रशिक्षण + स्किल इंडिया प्रमाण पत्र + अप्रेंटिसशिप सहायता",
    eligibilityRules: {
      age: { min: 15, max: 45 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["student", "विद्यार्थी", "नौकरीपेशा", "unemployed", "all", "any"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "भारतीय नागरिक (आयु 15 से 45 वर्ष)",
      "स्कूल/कॉलेज छोड़ चुके (Drop-out) या रोजगार की तलाश में युवा"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Identity proof", isMandatory: true },
      { name: "Highest Education Marksheet", description: "10th/12th mark sheet", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Register on Skill India Digital Hub", description: "Visit skillindiadigital.gov.in with Aadhaar." },
      { step: 2, title: "Choose Training Centre & Sector", description: "Select desired skill course." }
    ],
    importantDates: {
      startDate: "01-04-2023",
      endDate: "31-03-2026",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.pmkvyofficial.org",
    officialApplicationUrl: "https://www.skillindiadigital.gov.in",
    sourceName: "National Skill Development Corporation (NSDC)",
    lastVerifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["skill", "pmkvy", "youth", "training", "nsdc", "job"],
    faq: [
      { question: "क्या कोई कोर्स फीस लगती है?", answer: "नहीं, पूरी ट्रेनिंग 100% निःशुल्क है।" }
    ]
  },
  {
    _id: "scheme_10",
    id: "scheme_10",
    name: "PM Surya Ghar: Muft Bijli Yojana",
    nameHindi: "पीएम सूर्य घर: मुफ्त बिजली योजना",
    slug: "pm-surya-ghar-muft-bijli-yojana",
    shortDescription: "Up to 300 units of free electricity per month for 1 crore households with direct DBT subsidy up to ₹78,000 for rooftop solar systems.",
    shortDescriptionHindi: "छत पर सोलर पैनल लगाने के लिए ₹78,000 तक की प्रत्यक्ष सब्सिडी तथा हर महीने 300 यूनिट तक मुफ्त बिजली।",
    fullDescription: "PM Surya Ghar: Muft Bijli Yojana is a government initiative launched to provide up to 300 units of free electricity every month to 1 crore households in India by installing rooftop solar systems with direct subsidies credited to beneficiary bank accounts.",
    fullDescriptionHindi: "पीएम सूर्य घर मुफ्त बिजली योजना का उद्देश्य देश के 1 करोड़ घरों की छतों पर सोलर पैनल लगाकर 300 यूनिट तक मुफ्त बिजली उपलब्ध कराना और अतिरिक्त बिजली बेचकर आय अर्जित करने का अवसर देना है।",
    category: "Housing",
    subCategory: "Rooftop Solar & Clean Energy",
    level: "Central",
    state: "All India",
    department: "Ministry of New and Renewable Energy (MNRE), Govt of India",
    benefits: [
      "₹30,000 subsidy for 1 kW solar system",
      "₹60,000 subsidy for 2 kW solar system",
      "₹78,000 maximum subsidy for 3 kW and higher systems",
      "Up to 300 units free solar electricity every month"
    ],
    benefitSummary: "₹78,000 तक प्रत्यक्ष सब्सिडी + 300 यूनिट प्रति माह मुफ्त बिजली",
    eligibilityRules: {
      age: { min: 18, max: 100 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["all", "any"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "आवेदक भारतीय नागरिक होना चाहिए",
      "आवेदक के नाम पर वैध घरेलू बिजली कनेक्शन (Electricity Connection) होना चाहिए",
      "मकान की छत सौर पैनल स्थापना के लिए उपयुक्त होनी चाहिए"
    ],
    documents: [
      { name: "Electricity Bill (नवीनतम बिजली बिल)", description: "Electricity connection consumer ID proof", isMandatory: true },
      { name: "Aadhaar Card", description: "Identity proof of consumer", isMandatory: true },
      { name: "Bank Account Passbook / Cancelled Cheque", description: "For direct DBT subsidy credit", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Register on National Solar Portal", description: "Visit pmsuryaghar.gov.in and select state, Discom company, and Consumer Account Number." },
      { step: 2, title: "Apply for Rooftop Solar", description: "Submit application with requested solar capacity (1kW, 2kW, 3kW)." },
      { step: 3, title: "Installation by Registered Vendor", description: "Choose empaneled vendor from the portal for installation." },
      { step: 4, title: "Net Metering & Subsidy Credit", description: "Discom installs net meter and subsidy is credited directly to bank within 30 days." }
    ],
    importantDates: {
      startDate: "13-02-2024",
      endDate: "31-03-2027",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmsuryaghar.gov.in",
    officialApplicationUrl: "https://pmsuryaghar.gov.in/consumerRegistration",
    sourceName: "Ministry of New and Renewable Energy (MNRE)",
    lastVerifiedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "PUBLISHED",
    tags: ["solar", "surya-ghar", "electricity", "subsidy", "renewable", "housing", "central"],
    faq: [
      { question: "सब्सिडी कितने दिनों में खाते में आती है?", answer: "नेट मीटरिंग और निरीक्षण पूरा होने के 30 दिनों के भीतर सब्सिडी सीधे बैंक खाते में डीबीटी द्वारा आ जाती है।" }
    ]
  }
];

/**
 * Filter fallback schemes purely on client-side
 */
export function filterFallbackSchemes({
  search = '',
  category = '',
  level = '',
  state = '',
  beneficiary = '',
  sort = 'verified',
  page = 1,
  limit = 9
} = {}) {
  let filtered = [...FALLBACK_SCHEMES];

  if (category && category !== 'All') {
    filtered = filtered.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (level && level !== 'All') {
    filtered = filtered.filter(s => s.level.toLowerCase() === level.toLowerCase());
  }

  if (state && state !== 'All India' && state !== 'All') {
    filtered = filtered.filter(s => s.state === state || s.state === 'All India' || s.level === 'Central');
  }

  if (beneficiary && beneficiary !== 'all') {
    filtered = filtered.filter(s => {
      const occ = (s.eligibilityRules?.occupations || []).map(o => o.toLowerCase());
      return occ.length === 0 || occ.includes(beneficiary.toLowerCase()) || occ.includes('all') || occ.includes('any');
    });
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(s =>
      (s.name && s.name.toLowerCase().includes(q)) ||
      (s.nameHindi && s.nameHindi.toLowerCase().includes(q)) ||
      (s.shortDescription && s.shortDescription.toLowerCase().includes(q)) ||
      (s.shortDescriptionHindi && s.shortDescriptionHindi.toLowerCase().includes(q)) ||
      (s.department && s.department.toLowerCase().includes(q)) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  if (sort === 'newest') {
    filtered.sort((a, b) => new Date(b.lastVerifiedAt || 0) - new Date(a.lastVerifiedAt || 0));
  } else if (sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => new Date(b.lastVerifiedAt || 0) - new Date(a.lastVerifiedAt || 0));
  }

  const total = filtered.length;
  const numLimit = Number(limit) || 9;
  const numPage = Number(page) || 1;
  const skip = (numPage - 1) * numLimit;
  const pagedSchemes = filtered.slice(skip, skip + numLimit);

  return {
    success: true,
    data: pagedSchemes,
    pagination: {
      total,
      page: numPage,
      pages: Math.ceil(total / numLimit) || 1,
      limit: numLimit
    }
  };
}

/**
 * Get fallback scheme by slug
 */
export function getFallbackSchemeBySlug(slug) {
  const s = slug ? slug.toLowerCase() : '';
  const scheme = FALLBACK_SCHEMES.find(item =>
    item.slug === s || item._id === s || item.id === s
  );
  return scheme || FALLBACK_SCHEMES[0];
}
