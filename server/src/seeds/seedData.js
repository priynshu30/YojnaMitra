export const demoSchemes = [
  {
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    nameHindi: "प्रधानमंत्री किसान सम्मान निधि योजना (PM-KISAN)",
    slug: "pm-kisan-samman-nidhi",
    shortDescription: "Direct income support of ₹6,000 per year in three equal installments to all landholding farmer families across India.",
    shortDescriptionHindi: "सभी पात्र भूमिधारक किसान परिवारों को ₹6,000 प्रति वर्ष की प्रत्यक्ष वित्तीय सहायता 3 समान किस्तों में प्रदान की जाती है।",
    fullDescription: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme to augment the income of all landholding farmers' families in the country to enable them to take care of expenses related to agriculture and allied activities as well as domestic needs. Under the Scheme an amount of ₹6,000/- per year is released by the Central Government directly into the bank accounts of the eligible farmers in three equal installments of ₹2,000/- each every 4 months through Direct Benefit Transfer (DBT).",
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
      occupations: ["farmer", "किसान", "agriculture"],
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
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["agriculture", "farmer", "dbt", "kisan", "financial-support", "central"],
    faq: [
      { question: "क्या बटाईदार या किराये पर खेती करने वाले किसान पात्र हैं?", answer: "नहीं, योजना के दिशा-निर्देशों के अनुसार भूमि का वैध स्वामित्व (Landholding) किसान के नाम होना आवश्यक है।" },
      { question: "e-KYC कैसे पूरी करें?", answer: "PM-KISAN पोर्टल पर 'e-KYC' विकल्प पर जाकर आधार संख्या दर्ज करें और पंजीकृत मोबाइल पर प्राप्त OTP द्वारा सत्यापित करें, या नजदीकी CSC केंद्र पर बायोमेट्रिक e-KYC करवाएं।" }
    ]
  },
  {
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
      occupations: ["student", "विद्यार्थी", "learner"],
      categories: ["SC", "ST", "OBC", "GENERAL", "EWS"],
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
      { name: "Caste/Category Certificate (जाति प्रमाण पत्र)", description: "If applying under SC/ST/OBC/EWS category", isMandatory: false },
      { name: "Previous Year Marksheet (अंकतालिका)", description: "10th/12th/Last semester mark sheet", isMandatory: true },
      { name: "Current College Fee Receipt & Bonafide Certificate", description: "Issued by principal/dean of institution", isMandatory: true },
      { name: "Bank Account Passbook (Aadhaar Seeded)", description: "Student's self bank account", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "One-Time Registration (OTR) on NSP", description: "Visit scholarships.gov.in and generate NSP OTR using Aadhaar and Face Auth / Mobile OTP." },
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
    sourceName: "National Scholarship Portal, Ministry of Electronics & IT / Education",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["education", "scholarship", "students", "post-matric", "nsp", "college"],
    faq: [
      { question: "क्या प्राइवेट कॉलेज के छात्र भी आवेदन कर सकते हैं?", answer: "हाँ, यदि प्राइवेट संस्थान AICTE/UGC/राज्य बोर्ड से मान्यता प्राप्त है और NSP पर सूचीबद्ध है।" },
      { question: "क्या एक साथ दो सरकारी छात्रवृत्ति ले सकते हैं?", answer: "नहीं, एक शैक्षणिक वर्ष में केवल एक ही सरकारी छात्रवृत्ति का लाभ लिया जा सकता है।" }
    ]
  },
  {
    name: "Pradhan Mantri Awas Yojana — Gramin (PMAY-G)",
    nameHindi: "प्रधानमंत्री आवास योजना — ग्रामीण (PMAY-G)",
    slug: "pmay-gramin-housing",
    shortDescription: "Financial grant of ₹1.20 Lakh (plains) to ₹1.30 Lakh (hilly areas) along with 90 days MGNREGA wages for building a pucca house.",
    shortDescriptionHindi: "ग्रामीण क्षेत्रों में बेघर एवं कच्चे मकानों में रहने वाले परिवारों को पक्का मकान बनाने हेतु ₹1.20 लाख से ₹1.30 लाख की सीधी सहायता।",
    fullDescription: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G) aims to provide a pucca house with basic amenities to all houseless households and households living in kutcha and dilapidated houses in rural areas. The cost of house construction is shared between Central and State Government. In addition to financial grant of ₹1.20 Lakh in plains, beneficiaries also get 90/95 person-days of unskilled labor under MGNREGA and ₹12,000 for toilet construction under SBM-G.",
    fullDescriptionHindi: "प्रधानमंत्री आवास योजना (ग्रामीण) का उद्देश्य ग्रामीण भारत के निर्धन परिवारों को गुणवत्तापूर्ण पक्का मकान उपलब्ध कराना है। लाभार्थी को आवास निर्माण हेतु तीन किस्तों में सहायता राशि सीधे बैंक खाते में दी जाती है, साथ ही शौचालय निर्माण व मनरेगा मजदूरी का अतिरिक्त लाभ भी मिलता है।",
    category: "Housing",
    subCategory: "Rural Housing Assistance",
    level: "Central",
    state: "All India",
    department: "Ministry of Rural Development, Govt of India",
    benefits: [
      "Financial assistance of ₹1,20,000 (Plain areas) / ₹1,30,000 (Hilly/NE/Difficult areas)",
      "90 to 95 days of unskilled labor wages under MGNREGA (~₹20,000 additional)",
      "₹12,000 assistance for toilet construction under Swachh Bharat Mission (Grameen)",
      "LPG connection support under PM Ujjwala Yojana"
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
      { name: "MGNREGA Job Card Number", description: "Required for receiving labor wage component", isMandatory: true },
      { name: "Land / Plot Ownership document or Gram Panchayat No Objection", description: "Proof of site where house is to be built", isMandatory: true }
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
    lastVerifiedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["housing", "pmay", "rural", "awas", "gramin", "central"],
    faq: [
      { question: "क्या योजना के तहत ऋण भी उपलब्ध है?", answer: "हाँ, यदि लाभार्थी मकान बड़ा बनाना चाहता है तो वह वित्तीय संस्थानों से ₹70,000 तक का रियायती ब्याज दर पर ऋण ले सकता है।" },
      { question: "क्या पक्का मकान वाले परिवार आवेदन कर सकते हैं?", answer: "नहीं, यह योजना केवल बेघर अथवा शून्य, 1 या 2 कच्चे कमरों वाली छत के नीचे रहने वाले परिवारों के लिए है।" }
    ]
  },
  {
    name: "Pradhan Mantri Mudra Yojana (PMMY) — Micro Business Loans",
    nameHindi: "प्रधानमंत्री मुद्रा योजना (PMMY) — सूक्ष्म व्यवसाय एवं उद्यमिता ऋण",
    slug: "pm-mudra-yojana-business-loan",
    shortDescription: "Collateral-free business loans up to ₹10 Lakh (extended up to ₹20 Lakh) across Shishu, Kishore, and Tarun categories for non-farm enterprises.",
    shortDescriptionHindi: "सूक्ष्म एवं छोटे व्यवसायों, दुकानदारों और नए उद्यमियों के लिए बिना किसी गारंटी के ₹50,000 से ₹10 लाख (तरुण प्लस में ₹20 लाख तक) का ऋण।",
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
      { name: "Business Registration / Udyam Certificate", description: "Udyam Aadhar or trade license (for Kishore/Tarun loans)", isMandatory: false },
      { name: "Bank Statement (Last 6 Months)", description: "Current or savings bank statement", isMandatory: true },
      { name: "Project Report / Business Quotation", description: "Itemized machinery or stock estimation", isMandatory: false }
    ],
    applicationProcess: [
      { step: 1, title: "Apply on JanSamarth / Udyamimitra Portal", description: "Visit jansamarth.in or udyamimitra.in and choose 'Pradhan Mantri Mudra Yojana'." },
      { step: 2, title: "Select Loan Category (Shishu / Kishore / Tarun)", description: "Enter required loan amount, business plan, and personal KYC." },
      { step: 3, title: "Select Preferred Lending Bank / NBFC", description: "Choose public/private bank near your business location." },
      { step: 4, title: "In-Principle Sanction & Disbursal", description: "Bank reviews proposal, conducts field verification, and disburses loan." }
    ],
    importantDates: {
      startDate: "08-04-2015",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.mudra.org.in",
    officialApplicationUrl: "https://www.jansamarth.in/home",
    sourceName: "MUDRA Ltd / Department of Financial Services",
    lastVerifiedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["business", "mudra", "loan", "entrepreneur", "msme", "shishu", "kishore"],
    faq: [
      { question: "क्या मुद्रा लोन के लिए किसी गारंटी या गारंटर की जरूरत होती है?", answer: "नहीं, भारतीय रिजर्व बैंक के दिशा-निर्देशों के अनुसार मुद्रा ऋण पूरी तरह से बिना किसी संपार्श्विक सुरक्षा (Collateral-free) के दिया जाता है।" },
      { question: "ब्याज दर क्या होती है?", answer: "ब्याज दर विभिन्न बैंकों और आवेदक की क्रेडिट प्रोफ़ाइल के अनुसार 8.5% से 12% प्रति वर्ष के बीच बदलती है।" }
    ]
  },
  {
    name: "Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    nameHindi: "आयुष्मान भारत — प्रधानमंत्री जन आरोग्य योजना (AB-PMJAY)",
    slug: "ayushman-bharat-pmjay-health",
    shortDescription: "Cashless health insurance coverage of ₹5 Lakh per family per year for secondary and tertiary healthcare hospitalizations.",
    shortDescriptionHindi: "पात्र परिवारों को देश भर के सूचीबद्ध सरकारी एवं निजी अस्पतालों में प्रतिवर्ष ₹5 लाख तक का निःशुल्क कैशलेस इलाज।",
    fullDescription: "Ayushman Bharat PM-JAY is the world's largest government-funded healthcare scheme. It provides a health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India. The scheme is completely cashless and paperless at the point of service, covering over 1,900 medical procedures including oncology, cardiology, neurosurgery, and pre-existing diseases from day one.",
    fullDescriptionHindi: "आयुष्मान भारत योजना के तहत देश के 12 करोड़ से अधिक गरीब और कमजोर परिवारों (लगभग 55 करोड़ नागरिकों) को ₹5 लाख तक का वार्षिक स्वास्थ्य बीमा सुरक्षा कवर मिलता है। हाल ही में 70 वर्ष से अधिक आयु के सभी वरिष्ठ नागरिकों को भी इस योजना में शामिल किया गया है।",
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
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["health", "ayushman", "pmjay", "hospital", "cashless", "insurance"],
    faq: [
      { question: "क्या पहले से मौजूद बीमारियों का इलाज भी कवर होता है?", answer: "हाँ, आयुष्मान भारत योजना में पहले दिन से ही सभी पुरानी और गंभीर बीमारियां (Pre-existing diseases) कवर होती हैं।" },
      { question: "क्या अस्पताल में कोई शुल्क देना होता है?", answer: "नहीं, योजना के तहत दवा, जांच, डॉक्टर परामर्श और बेड शुल्क पूरी तरह निःशुल्क और कैशलेस है।" }
    ]
  },
  {
    name: "Sukanya Samriddhi Yojana (SSY)",
    nameHindi: "सुकन्या समृद्धि योजना (SSY) — बालिका समृद्धि बचत योजना",
    slug: "sukanya-samriddhi-yojana",
    shortDescription: "High-interest government-backed small savings scheme for girl child with tax exemption under Section 80C.",
    shortDescriptionHindi: "बालिकाओं के उज्ज्वल भविष्य और उच्च शिक्षा हेतु 8.2% की उच्चतम ब्याज दर वाली सरकार समर्थित बचत योजना (कर मुक्त)।",
    fullDescription: "Sukanya Samriddhi Account is a Government of India-backed savings scheme targeted at the parents of girl children. The scheme encourages parents to build a fund for the future education and marriage expenses for their female child. Accounts can be opened in any Post Office or commercial bank branch from the birth of girl child till she turns 10 years old with a minimum deposit of ₹250 per year.",
    fullDescriptionHindi: "सुकन्या समृद्धि योजना 'बेटी बचाओ, बेटी पढ़ाओ' अभियान का एक घटक है। इसके अंतर्गत 10 वर्ष से कम आयु की बालिकाओं के नाम पर डाकघर या अधिकृत बैंक में खाता खोला जा सकता है। इसमें वर्तमान में 8.2% वार्षिक चक्रवृद्धि ब्याज मिलता है और EEE (छूट-छूट-छूट) टैक्स लाभ प्राप्त होता है।",
    category: "Women & Child",
    subCategory: "Girl Child Savings",
    level: "Central",
    state: "All India",
    department: "Ministry of Finance / Department of Posts, Govt of India",
    benefits: [
      "Highest government small savings interest rate (currently 8.2% per annum compounding)",
      "Triple tax benefit: Exemption on investment (80C), interest earned, and maturity proceeds",
      "Low minimum annual deposit of only ₹250 (up to ₹1,50,000 maximum)",
      "Partial withdrawal allowed up to 50% for higher education after child reaches age 18"
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
      "एक परिवार में अधिकतम 2 बालिकाओं (जुड़वा/ट्रिपलेट के मामले में 3) का खाता खोला जा सकता है"
    ],
    documents: [
      { name: "Birth Certificate of Girl Child (बालिका का जन्म प्रमाण पत्र)", description: "Issued by Municipal Corporation/Registrar of Births", isMandatory: true },
      { name: "Identity & Address Proof of Guardian", description: "Aadhaar / PAN / Passport of parent/guardian", isMandatory: true },
      { name: "Passport size photographs", description: "Photos of child and guardian", isMandatory: true },
      { name: "Medical certificate in case of twin/triplet birth", description: "Only if opening more than 2 accounts", isMandatory: false }
    ],
    applicationProcess: [
      { step: 1, title: "Obtain SSY Account Opening Form", description: "Download form online or collect from any Post Office or authorized bank (SBI, PNB, BoB, etc.)." },
      { step: 2, title: "Attach Birth and KYC Documents", description: "Fill details of child and guardian, attaching birth certificate and Aadhaar." },
      { step: 3, title: "Deposit Initial Amount", description: "Deposit initial amount (minimum ₹250) via cash, cheque, or demand draft." },
      { step: 4, title: "Passbook Issuance", description: "Branch issues Sukanya Samriddhi Passbook with account number and interest tracker." }
    ],
    importantDates: {
      startDate: "22-01-2015",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.indiapost.gov.in",
    officialApplicationUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    sourceName: "Department of Posts / Ministry of Finance",
    lastVerifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["women", "child", "girl-child", "sukanya", "savings", "tax-saving", "central"],
    faq: [
      { question: "खाते की परिपक्वता (Maturity) कब होती है?", answer: "खाता खोलने की तिथि से 21 वर्ष पूर्ण होने पर, अथवा 18 वर्ष की आयु के बाद बालिका के विवाह के समय खाता परिपक्व हो जाता है।" },
      { question: "क्या न्यूनतम राशि न जमा करने पर जुर्माना लगता है?", answer: "यदि किसी वर्ष न्यूनतम ₹250 जमा नहीं होते हैं, तो ₹50 प्रति वर्ष के दंड शुल्क के साथ खाता पुनर्जीवित किया जा सकता है।" }
    ]
  },
  {
    name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    nameHindi: "प्रधानमंत्री मातृ वंदना योजना (PMMVY)",
    slug: "pm-matru-vandana-yojana",
    shortDescription: "Maternity financial assistance of ₹5,000 for first child and ₹6,000 for second girl child for pregnant women and lactating mothers.",
    shortDescriptionHindi: "गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को बेहतर पोषण एवं मजदूरी क्षतिपूर्ति हेतु ₹5,000 से ₹6,000 की नकद सहायता।",
    fullDescription: "Pradhan Mantri Matru Vandana Yojana (PMMVY) is a centrally sponsored Direct Benefit Transfer scheme under Mission Shakti. It provides partial compensation for wage loss during pregnancy and child birth so that women can take adequate rest and improve maternal nutrition. The scheme provides ₹5,000 in two installments for the first living child and an incentive of ₹6,000 in single installment if the second child is a girl.",
    fullDescriptionHindi: "प्रधानमंत्री मातृ वंदना योजना का उद्देश्य गर्भवती महिलाओं को गर्भावस्था और प्रसव के दौरान पोषण संबंधी आवश्यकताओं को पूरा करने तथा प्रसव पूर्व/पश्चात जांच को प्रोत्साहित करने हेतु आर्थिक संबल प्रदान करना है।",
    category: "Women & Child",
    subCategory: "Maternity Benefit",
    level: "Central",
    state: "All India",
    department: "Ministry of Women and Child Development, Govt of India",
    benefits: [
      "₹5,000 for 1st child (₹3,000 on ANC registration + ₹2,000 on birth and immunizations)",
      "₹6,000 in single installment on birth of 2nd girl child",
      "Direct DBT transfer to mother's Aadhaar-linked bank account",
      "Institutional delivery encouragement and child vaccination linkage"
    ],
    benefitSummary: "₹5,000 (प्रथम संतान) एवं ₹6,000 (द्वितीय कन्या संतान) पोषण सहायता राशि",
    eligibilityRules: {
      age: { min: 19, max: 45 },
      gender: ["female"],
      states: ["All India"],
      occupations: ["homemaker", "गृहिणी", "worker", "labourer", "all"],
      categories: ["ALL"],
      income: { max: 800000 },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "गर्भवती महिलाएं एवं स्तनपान कराने वाली माताएं (19 वर्ष या अधिक आयु)",
      "केंद्रीय/राज्य सरकार या सार्वजनिक उपक्रमों में नियमित कार्यरत महिलाएं पात्र नहीं हैं",
      "माता-शिशु संरक्षण (MCP) कार्ड में पंजीकरण अनिवार्य"
    ],
    documents: [
      { name: "Mother and Child Protection (MCP) Card", description: "Issued by Anganwadi/PHC with LMP and ANC records", isMandatory: true },
      { name: "Aadhaar Card of Mother and Husband", description: "For identity and Aadhaar seeding verification", isMandatory: true },
      { name: "Bank Account Passbook of Mother", description: "Individual bank account with DBT enabled", isMandatory: true },
      { name: "Child Birth Certificate and Vaccination Record", description: "Required for second installment / girl child claim", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Online Registration on PMMVY Portal", description: "Visit pmmvy.wcd.gov.in or approach local Anganwadi Worker (AWW) / ASHA." },
      { step: 2, title: "Submit Form 1A with MCP Card Details", description: "Register pregnancy within 570 days of Last Menstrual Period (LMP)." },
      { step: 3, title: "Claim 2nd Installment after Birth", description: "Submit child birth certificate and proof of primary vaccinations (BCG, OPV, DPT)." },
      { step: 4, title: "Direct Benefit Transfer", description: "Approved amount credited directly into mother's verified bank account." }
    ],
    importantDates: {
      startDate: "01-01-2017",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmmvy.wcd.gov.in",
    officialApplicationUrl: "https://pmmvy.wcd.gov.in/citizen-login",
    sourceName: "Ministry of Women and Child Development Portal",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["women", "maternity", "pmmvy", "pregnant", "mother", "nutrition", "central"],
    faq: [
      { question: "क्या आंगनवाड़ी केंद्र से आवेदन कराया जा सकता है?", answer: "हाँ, नजदीकी आंगनवाड़ी कार्यकर्ता (AWW) या आशा कार्यकर्ता के माध्यम से निःशुल्क ऑनलाइन फॉर्म भरवाया जा सकता है।" }
    ]
  },
  {
    name: "PM SVANidhi — Micro-Credit Scheme for Street Vendors",
    nameHindi: "पीएम स्वनिधि योजना — स्ट्रीट वेंडर्स आत्मनिर्भर निधि",
    slug: "pm-svanidhi-street-vendors",
    shortDescription: "Working capital loan starting from ₹10,000 up to ₹50,000 with 7% interest subsidy and cashback on digital transactions for street vendors.",
    shortDescriptionHindi: "रेहड़ी-पटरी, ठेला लगाने वाले छोटे फुटपाथ व्यापारियों के लिए ₹10,000 से ₹50,000 तक का सस्ता कार्यशील पूंजी ऋण व 7% ब्याज सब्सिडी।",
    fullDescription: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) is a special micro-credit facility scheme launched by Ministry of Housing and Urban Affairs to empower street vendors, hawkers, and informal micro-traders whose livelihoods were impacted. Vendors can access an initial working capital collateral-free loan of up to ₹10,000. On timely repayment, they become eligible for 2nd tranche of ₹20,000 and 3rd tranche of up to ₹50,000 with 7% interest subsidy.",
    fullDescriptionHindi: "पीएम स्वनिधि योजना शहरी एवं अर्ध-शहरी क्षेत्रों के रेहड़ी-पटरी विक्रेताओं को औपचारिक बैंकिंग प्रणाली से जोड़कर किफायती पूंजी उपलब्ध कराती है। समय पर ऋण अदायगी पर 7% की ब्याज सब्सिडी सीधे बैंक खाते में जमा होती है और डिजिटल लेनदेन पर ₹1,200 प्रति वर्ष तक कैशबैक मिलता है।",
    category: "Financial Assistance",
    subCategory: "Street Vendor Micro Credit",
    level: "Central",
    state: "All India",
    department: "Ministry of Housing and Urban Affairs, Govt of India",
    benefits: [
      "1st Tranche loan up to ₹10,000 (1 year tenure)",
      "2nd Tranche loan up to ₹20,000 (18 months tenure) on timely repayment",
      "3rd Tranche loan up to ₹50,000 (36 months tenure)",
      "7% annual interest subsidy credited directly to bank account quarterly",
      "Monthly cashback up to ₹100 on digital payment transactions"
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
      "शहरी या आसपास के ग्रामीण इलाकों में वेंडिंग करने वाले स्ट्रीट वेंडर्स / रेहड़ी पटरी वाले",
      "शहरी स्थानीय निकाय (ULB) द्वारा जारी वेंडिंग प्रमाण पत्र (CoV) या पहचान पत्र धारक",
      "Letter of Recommendation (LoR) प्राप्त वेंडर"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Linked with active mobile for OTP", isMandatory: true },
      { name: "Certificate of Vending (CoV) / Identity Card / LoR", description: "Issued by Municipal Corporation / Nagar Palika", isMandatory: true },
      { name: "Bank Account Passbook / Statement", description: "Active bank account", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Check Vending Status on Portal", description: "Visit pmsvanidhi.mohua.gov.in and search your vending survey number or LoR." },
      { step: 2, title: "Apply Online via Mobile OTP", description: "Fill mobile number linked to Aadhaar and enter bank account information." },
      { step: 3, title: "Select Preferred Lending Institution", description: "Choose public/private bank or micro-finance branch." },
      { step: 4, title: "Instant Approval and Disbursal", description: "Bank verifies application and disburses loan directly to bank account within 7 days." }
    ],
    importantDates: {
      startDate: "01-06-2020",
      endDate: "31-12-2024",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://pmsvanidhi.mohua.gov.in",
    officialApplicationUrl: "https://pmsvanidhi.mohua.gov.in/Home/ApplyLetterOfRecommendation",
    sourceName: "Ministry of Housing and Urban Affairs (MoHUA)",
    lastVerifiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["svanidhi", "vendor", "street-vendor", "loan", "urban", "micro-credit"],
    faq: [
      { question: "यदि मेरे पास वेंडिंग प्रमाण पत्र नहीं है तो क्या करूं?", answer: "आप पीएम स्वनिधि पोर्टल पर 'Letter of Recommendation (LoR)' के लिए ऑनलाइन आवेदन कर सकते हैं, जिसे नगर पालिका/नगर निगम द्वारा सत्यापित किया जाएगा।" }
    ]
  },
  {
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    nameHindi: "प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)",
    slug: "pm-kaushal-vikas-yojana-skill",
    shortDescription: "Free skill training, industry-recognized certification, stipend support, and placement assistance for unemployed youth.",
    shortDescriptionHindi: "बेरोजगार युवाओं को निःशुल्क उद्योग-उन्मुख कौशल प्रशिक्षण, सरकारी प्रमाण पत्र तथा रोजगार एवं स्वरोजगार सहायता।",
    fullDescription: "PMKVY is the flagship scheme of the Ministry of Skill Development and Entrepreneurship (MSDE) implemented by the National Skill Development Corporation (NSDC). PMKVY 4.0 focuses on new-age industry courses like AI, Robotics, Mechatronics, IoT, 3D printing, and Drone technology along with traditional sectors. All training costs are 100% borne by the government, and candidates receive certification mapped to the National Skills Qualification Framework (NSQF).",
    fullDescriptionHindi: "प्रधानमंत्री कौशल विकास योजना 4.0 के अंतर्गत युवाओं को आधुनिक तकनीक, ड्रोन टेक्नोलॉजी, आर्टिफिशियल इंटेलिजेंस, सोलर एनर्जी, ऑटोमोटिव व हैंडीक्राफ्ट्स जैसे 40+ क्षेत्रों में निःशुल्क प्रशिक्षण देकर रोजगार के अवसर उपलब्ध कराए जाते हैं।",
    category: "Skills",
    subCategory: "Youth Skill Certification",
    level: "Central",
    state: "All India",
    department: "Ministry of Skill Development and Entrepreneurship (MSDE) / NSDC",
    benefits: [
      "100% Free NSQF-aligned skill training and assessment",
      "Government-recognized Skill India Certificate & Digital Skill Passport",
      "Conveyance allowance / stipend during training for eligible candidates",
      "Job melas and apprenticeship placement assistance"
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
      "स्कूल/कॉलेज छोड़ चुके (Drop-out) या रोजगार की तलाश में युवा",
      "वैध आधार कार्ड एवं बैंक खाता धारक"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Identity proof", isMandatory: true },
      { name: "Educational Qualification Marksheet (10th/12th/Graduation/School Leaving)", description: "Proof of highest education", isMandatory: true },
      { name: "Bank Account Passbook", description: "For stipend/assessment reimbursement", isMandatory: true },
      { name: "Passport size photograph", description: "For candidate ID and badge", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Register on Skill India Digital Hub", description: "Visit skillindiadigital.gov.in and create user profile with Aadhaar e-KYC." },
      { step: 2, title: "Search Course & Training Centre", description: "Find nearby PMKVY training centres and preferred skill sector." },
      { step: 3, title: "Enrol and Attend Course", description: "Complete classroom and on-the-job practical training hours." },
      { step: 4, title: "Assessment & NSDC Certification", description: "Take practical assessment and receive NSQF certificate." }
    ],
    importantDates: {
      startDate: "01-04-2023",
      endDate: "31-03-2026",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.pmkvyofficial.org",
    officialApplicationUrl: "https://www.skillindiadigital.gov.in",
    sourceName: "National Skill Development Corporation (NSDC) / MSDE",
    lastVerifiedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["skill", "pmkvy", "youth", "training", "nsdc", "job", "employment"],
    faq: [
      { question: "क्या प्रशिक्षण के लिए कोई फीस देनी होती है?", answer: "नहीं, PMKVY के तहत प्रशिक्षण, अध्ययन सामग्री और मूल्यांकन की पूरी फीस भारत सरकार द्वारा वहन की जाती है।" }
    ]
  },
  {
    name: "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)",
    nameHindi: "मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)",
    slug: "up-mukhyamantri-kanya-sumangala-yojana",
    shortDescription: "State financial assistance of ₹25,000 released in 6 milestone stages from birth to graduation for girl children in UP.",
    shortDescriptionHindi: "उत्तर प्रदेश सरकार द्वारा बालिकाओं को जन्म से लेकर स्नातक तक की शिक्षा हेतु 6 चरणों में कुल ₹25,000 की वित्तीय सहायता।",
    fullDescription: "Mukhyamantri Kanya Sumangala Yojana is a flagship scheme of the Government of Uttar Pradesh to prevent female foeticide, establish equal sex ratio, promote girl child education, and provide financial security. The financial assistance has been enhanced to ₹25,000 distributed conditionally across six stages: at birth (₹5,000), completion of vaccination (₹2,000), admission in Class 1 (₹3,000), Class 6 (₹3,000), Class 9 (₹5,000), and admission in 2-year diploma or undergraduate degree (₹7,000).",
    fullDescriptionHindi: "उत्तर प्रदेश सरकार द्वारा संचालित कन्या सुमंगला योजना बेटियों के स्वास्थ्य और उच्च शिक्षा को बढ़ावा देने के लिए एक सामाजिक सुरक्षा योजना है। इसके अंतर्गत बालिका के जन्म से लेकर उच्च शिक्षा तक के 6 महत्वपूर्ण पड़ावों पर डीबीटी के माध्यम से सहायता राशि दी जाती है।",
    category: "Women & Child",
    subCategory: "State Girl Child Education",
    level: "State",
    state: "Uttar Pradesh",
    department: "Department of Women and Child Development, Government of Uttar Pradesh",
    benefits: [
      "Stage 1 (At birth): ₹5,000 grant",
      "Stage 2 (Complete vaccination within 1 yr): ₹2,000 grant",
      "Stage 3 (Class 1 admission): ₹3,000 grant",
      "Stage 4 (Class 6 admission): ₹3,000 grant",
      "Stage 5 (Class 9 admission): ₹5,000 grant",
      "Stage 6 (Degree / 2-yr Diploma admission): ₹7,000 grant"
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
      "एक परिवार से अधिकतम 2 पुत्रियों को लाभ अनुमन्य (जुड़वा होने पर 3)"
    ],
    documents: [
      { name: "UP Domicile / Residence Certificate (मूल निवास प्रमाण पत्र)", description: "Issued by UP Revenue Department", isMandatory: true },
      { name: "Family Income Certificate (आय प्रमाण पत्र)", description: "Annual income below ₹3 Lakh", isMandatory: true },
      { name: "Girl Child Birth Certificate & Aadhaar", description: "Birth registration certificate", isMandatory: true },
      { name: "School / College Admission Receipt & Bonafide", description: "For Stages 3 to 6", isMandatory: true },
      { name: "Aadhaar-Linked Bank Account Passbook of Parent / Child", description: "UP bank branch", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Citizen Registration on MKSY Portal", description: "Visit mksy.up.gov.in and register as a citizen applicant." },
      { step: 2, title: "Add Beneficiary Girl Child Details", description: "Provide girl child name, birth details, and parents' Aadhaar." },
      { step: 3, title: "Apply for Specific Stage (1 to 6)", description: "Select the stage corresponding to child's current age or education and upload documents." },
      { step: 4, title: "Verification by BDO / SDM & DBT Disbursal", description: "Local block/district administration verifies and approves funds directly to bank account." }
    ],
    importantDates: {
      startDate: "01-04-2019",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://mksy.up.gov.in",
    officialApplicationUrl: "https://mksy.up.gov.in/women_welfare/citizen/guest_user.php",
    sourceName: "Women Welfare Department, Govt of Uttar Pradesh",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["up", "uttar-pradesh", "kanya-sumangala", "girl-child", "state-scheme", "education"],
    faq: [
      { question: "यदि किसी परिवार में 2 से अधिक पुत्रियां हैं तो क्या नियम है?", answer: "योजना के नियम अनुसार एक परिवार से अधिकतम 2 पुत्रियों को ही लाभ मिल सकता है। यदि दूसरी डिलीवरी में जुड़वा बेटियां होती हैं तो तीनों पात्र होंगी।" }
    ]
  },
  {
    name: "Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)",
    nameHindi: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी योजना (मनरेगा)",
    slug: "mgnrega-rural-employment",
    shortDescription: "Legal guarantee of 100 days of wage employment in a financial year to rural adult household members willing to do unskilled manual work.",
    shortDescriptionHindi: "ग्रामीण क्षेत्रों के प्रत्येक परिवार को एक वित्तीय वर्ष में 100 दिनों के अकुशल शारीरिक रोजगार की कानूनी गारंटी व प्रत्यक्ष मजदूरी भुगतान।",
    fullDescription: "MGNREGA is a landmark social security measure that aims to guarantee the 'right to work'. It provides at least 100 days of guaranteed wage employment in every financial year to every rural household whose adult members volunteer to do unskilled manual work. Wages are fixed by each state government and disbursed directly into bank/post office accounts via National Electronic Fund Management System (NeFMS).",
    fullDescriptionHindi: "महात्मा गांधी नरेगा योजना ग्रामीण परिवारों की आजीविका सुरक्षा बढ़ाने के लिए लागू की गई है। इसके अंतर्गत जल संरक्षण, वृक्षारोपण, ग्रामीण मार्ग निर्माण और भूमि सुधार जैसे स्थानीय विकास कार्यों में 100 दिनों का रोजगार कानूनी अधिकार के रूप में मिलता है।",
    category: "Employment",
    subCategory: "Guaranteed Rural Wage Employment",
    level: "Central",
    state: "All India",
    department: "Ministry of Rural Development, Govt of India",
    benefits: [
      "Guaranteed 100 days of wage employment per financial year",
      "Unemployment allowance payable if work is not provided within 15 days of demand",
      "Direct weekly/fortnightly wage transfer into bank/post office account",
      "Worksites within 5 km of village with crèche, drinking water, and first-aid amenities"
    ],
    benefitSummary: "100 दिनों का कानूनी रोजगार गारंटी + राज्यवार निर्धारित दैनिक मजदूरी (₹234 - ₹374/दिन)",
    eligibilityRules: {
      age: { min: 18, max: 75 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["labourer", "worker", "farmer", "all", "any"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["rural"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "ग्रामीण क्षेत्र का स्थायी निवासी",
      "आयु 18 वर्ष या उससे अधिक",
      "अकुशल शारीरिक कार्य (Unskilled manual work) करने के लिए तत्पर"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Identity proof and ABPS (Aadhaar Based Payment System)", isMandatory: true },
      { name: "Ration Card / Voter ID", description: "Proof of residence in Gram Panchayat", isMandatory: true },
      { name: "Bank / Post Office Savings Account Passbook", description: "Aadhaar seeded individual or joint account", isMandatory: true },
      { name: "Passport size photograph", description: "For Job Card issuance", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Submit Job Card Application to Gram Panchayat", description: "Apply orally or in written form to the Gram Panchayat Sachiv or Gram Rojgar Sahayak." },
      { step: 2, title: "Verification and Free Job Card Issuance", description: "Panchayat issues laminated Job Card within 15 days of application without any fee." },
      { step: 3, title: "Submit Written Demand for Work", description: "Submit work demand application indicating desired period (minimum 14 continuous days)." },
      { step: 4, title: "Work Allocation & Direct Payment", description: "Work allocated within 5 km radius; wages credited to bank within 15 days of muster roll." }
    ],
    importantDates: {
      startDate: "02-02-2006",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://nrega.nic.in",
    officialApplicationUrl: "https://nrega.nic.in/MGNREGA_new/Nrega_home.aspx",
    sourceName: "Ministry of Rural Development Official Portal",
    lastVerifiedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["employment", "mgnrega", "rural", "job-card", "wages", "central"],
    faq: [
      { question: "यदि 15 दिन में काम नहीं मिला तो क्या होगा?", answer: "अधिनियम की धारा 7(1) के अनुसार, यदि आवेदन के 15 दिनों के भीतर काम उपलब्ध नहीं कराया जाता है, तो आवेदक दैनिक बेरोजगारी भत्ता पाने का हकदार होता है।" }
    ]
  },
  {
    name: "Atal Pension Yojana (APY) — Guaranteed Social Security Pension",
    nameHindi: "अटल पेंशन योजना (APY) — गारंटीकृत सामाजिक सुरक्षा पेंशन",
    slug: "atal-pension-yojana",
    shortDescription: "Government-guaranteed monthly pension of ₹1,000 to ₹5,000 after age 60 for unorganized sector workers.",
    shortDescriptionHindi: "असंगठित क्षेत्र के श्रमिकों और नागरिकों के लिए 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह की आजीवन सरकारी पेंशन।",
    fullDescription: "Atal Pension Yojana (APY) is a periodic pension scheme administered by the Pension Fund Regulatory and Development Authority (PFRDA) under the National Pension System (NPS) architecture. It addresses the longevity risks among workers in the unorganized sector and encourages them to voluntarily save for their retirement. Under the APY, subscribers receive a minimum guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000 from the age of 60 years.",
    fullDescriptionHindi: "अटल पेंशन योजना असंगठित क्षेत्र के कामगारों के लिए भारत सरकार द्वारा समर्थित एक पेंशन योजना है। 18 से 40 वर्ष की आयु का कोई भी नागरिक छोटी मासिक बचत करके 60 वर्ष की आयु के उपरांत आजीवन मासिक पेंशन प्राप्त कर सकता है। ग्राहक की मृत्यु के बाद पति/पत्नी को आजीवन पेंशन और उसके बाद नामित (Nominee) को मूल संचित निधि वापस की जाती है।",
    category: "Social Welfare",
    subCategory: "Retirement Pension",
    level: "Central",
    state: "All India",
    department: "Pension Fund Regulatory and Development Authority (PFRDA) / Ministry of Finance",
    benefits: [
      "Guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 post-60 years",
      "Same pension amount continues to spouse after subscriber's demise",
      "Return of full accumulated pension corpus to nominee upon demise of both",
      "Low monthly contribution starting from ₹42/month depending on joining age"
    ],
    benefitSummary: "60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 प्रति माह आजीवन गारंटीकृत पेंशन",
    eligibilityRules: {
      age: { min: 18, max: 40 },
      gender: ["all"],
      states: ["All India"],
      occupations: ["all", "labourer", "worker", "farmer", "business", "homemaker", "any"],
      categories: ["ALL"],
      income: { max: null },
      residenceType: ["all"],
      disabilityOnly: false
    },
    eligibilitySummary: [
      "भारतीय नागरिक (आयु 18 से 40 वर्ष)",
      "बचत बैंक खाता या डाकघर बचत खाता होना अनिवार्य",
      "आयकर दाता (Income Tax Payee) नहीं होना चाहिए (01-10-2022 से प्रभावी नियम)"
    ],
    documents: [
      { name: "Aadhaar Card", description: "Mandatory for KYC and pension registration", isMandatory: true },
      { name: "Savings Bank Account / Post Office Account", description: "Auto-debit for monthly/quarterly contribution", isMandatory: true },
      { name: "Active Mobile Number", description: "For pension confirmation SMS alerts", isMandatory: true }
    ],
    applicationProcess: [
      { step: 1, title: "Visit Bank Branch or NetBanking Portal", description: "Access your bank's Internet/Mobile banking APY section or visit bank branch with Aadhaar." },
      { step: 2, title: "Choose Pension Slab (₹1,000 to ₹5,000)", description: "Select desired pension amount and contribution frequency (monthly/quarterly/half-yearly)." },
      { step: 3, title: "Provide Nominee and Spouse Details", description: "Enter Aadhaar and name of nominee for pension transfer continuity." },
      { step: 4, title: "Permanent Retirement Account Number (PRAN) Generation", description: "PRAN card and acknowledgement slip generated instantly." }
    ],
    importantDates: {
      startDate: "09-05-2015",
      endDate: "Ongoing",
      applicationStatus: "Always Open"
    },
    officialSourceUrl: "https://www.npscra.nsdl.co.in",
    officialApplicationUrl: "https://enps.nsdl.com/eNPS/ApySubRegistration.html",
    sourceName: "PFRDA / NSDL CRA Official Portal",
    lastVerifiedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    status: "PUBLISHED",
    tags: ["pension", "apy", "social-welfare", "retirement", "unorganized-sector", "central"],
    faq: [
      { question: "क्या बीच में पेंशन राशि बढ़ाई या घटाई जा सकती है?", answer: "हाँ, वित्तीय वर्ष में एक बार ग्राहक अपनी चुनी हुई पेंशन स्लैब (₹1,000 से ₹5,000 के बीच) को बढ़ा या घटा सकता है।" }
    ]
  }
];
