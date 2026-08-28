import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Calendar,
  MapPin,
  Briefcase,
  IndianRupee,
  Layers,
  Heart,
  Home,
  Accessibility,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { checkEligibilityApi } from '../../services/eligibilityService';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

const EligibilityWizardPage = () => {
  const { lang } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const [submitting, setSubmitting] = useState(false);

  // Form State initialized with defaults or logged-in user profile
  const [formData, setFormData] = useState({
    age: user?.profile?.age || 28,
    gender: user?.profile?.gender || 'male',
    state: user?.profile?.state || 'Uttar Pradesh',
    occupation: user?.profile?.occupation || 'farmer',
    income: user?.profile?.income || 180000,
    category: user?.profile?.category || 'OBC',
    maritalStatus: user?.profile?.maritalStatus || 'married',
    residenceType: user?.profile?.residenceType || 'rural',
    disabilityStatus: user?.profile?.disabilityStatus || false,
    extraDetail: ''
  });

  const stateList = [
    "All India", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
    "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const res = await checkEligibilityApi(formData);
      navigate('/results', {
        state: {
          evaluatedData: res.data,
          meta: res.meta,
          profile: formData
        }
      });
    } catch (error) {
      console.error('Error submitting eligibility form:', error);
      // Fallback navigation with profile in state
      navigate('/results', { state: { profile: formData } });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Top Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'पात्रता विज़ार्ड' : 'Eligibility Calculator'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
          {lang === 'hi' ? 'अपनी योग्यता एवं पात्रता जानें' : 'Check Your Eligibility'}
        </h1>
        <p className="text-xs sm:text-sm text-brand-textMuted max-w-lg mx-auto">
          {lang === 'hi'
            ? 'सही जानकारी भरें ताकि हमारा रूल्स इंजन आपके लिए सबसे उपयुक्त योजनाएँ खोज सके।'
            : 'Fill in your details to allow our engine to accurately compute matching welfare schemes.'}
        </p>
      </div>

      {/* Wizard Container Card */}
      <div className="bg-white rounded-3xl border border-brand-border shadow-elevated p-6 sm:p-10 space-y-8 relative">
        
        {/* Progress Header */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-brand-green">
              {lang === 'hi' ? `कदम ${currentStep} / ${totalSteps}` : `Step ${currentStep} of ${totalSteps}`}
            </span>
            <span className="text-brand-textMuted">
              {Math.round((currentStep / totalSteps) * 100)}% {lang === 'hi' ? 'पूर्ण' : 'Completed'}
            </span>
          </div>

          <div className="w-full h-2 bg-brand-warmBg rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-green transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Dynamic Question Step Body */}
        <div className="min-h-[280px] flex flex-col justify-between">
          
          {/* Step 1: Age */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Calendar className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'आयु विवरण' : 'Age Detail'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आपकी वर्तमान आयु (Age) कितनी है?' : 'What is your current age in years?'}
              </h2>
              <div className="pt-2">
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                    className="w-full h-2 bg-brand-warmBg rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <span className="px-4 py-2 rounded-xl bg-brand-greenLight border border-brand-green/30 text-brand-green font-bold text-lg min-w-[80px] text-center">
                    {formData.age} {lang === 'hi' ? 'वर्ष' : 'Yrs'}
                  </span>
                </div>
                <p className="text-xs text-brand-textMuted mt-3">
                  {lang === 'hi' ? 'योजनाओं की पात्रता आयु सीमा (जैसे 18-35 वर्ष, 60+ वरिष्ठ नागरिक) के आधार पर तय होती है।' : 'Age helps verify schemes with specific brackets (students, youth, senior citizens).'}
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Gender */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <User className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'लिंग' : 'Gender'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आपका लिंग क्या है?' : 'What is your gender?'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'male', hi: 'पुरुष (Male)', en: 'Male' },
                  { id: 'female', hi: 'महिला (Female)', en: 'Female' },
                  { id: 'other', hi: 'अन्य (Other / Transgender)', en: 'Other' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: g.id })}
                    className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                      formData.gender === g.id
                        ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                        : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                    }`}
                  >
                    {lang === 'hi' ? g.hi : g.en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: State */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'निवास स्थान' : 'Residence State'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आप किस राज्य / केंद्र शासित प्रदेश के निवासी हैं?' : 'Select your residence State / UT:'}
              </h2>
              <div className="pt-2">
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-brand-border bg-white text-sm font-semibold text-brand-navy focus:outline-none focus:border-brand-green"
                >
                  {stateList.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <p className="text-xs text-brand-textMuted mt-2">
                  {lang === 'hi' ? 'राज्य चुनने से उस राज्य की विशेष कल्याणकारी योजनाएँ भी शामिल हो जाएँगी।' : 'Selecting your state includes exclusive state-specific welfare initiatives.'}
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Occupation */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Briefcase className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'व्यवसाय व पेशा' : 'Occupation'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आपकी प्राथमिक आजीविका / व्यवसाय क्या है?' : 'What is your primary occupation?'}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'farmer', hi: 'किसान (Farmer)', en: 'Farmer' },
                  { id: 'student', hi: 'विद्यार्थी (Student)', en: 'Student' },
                  { id: 'worker', hi: 'श्रमिक / कर्मचारी (Worker)', en: 'Worker' },
                  { id: 'business', hi: 'व्यवसायी / व्यापारी (Trader)', en: 'Business' },
                  { id: 'homemaker', hi: 'गृहिणी (Homemaker)', en: 'Homemaker' },
                  { id: 'unemployed', hi: 'बेरोजगार (Unemployed)', en: 'Unemployed' },
                ].map((occ) => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, occupation: occ.id })}
                    className={`p-3.5 rounded-2xl border text-center font-bold text-xs sm:text-sm transition-all ${
                      formData.occupation === occ.id
                        ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                        : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                    }`}
                  >
                    {lang === 'hi' ? occ.hi : occ.en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Annual Income */}
          {currentStep === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <IndianRupee className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'पारिवारिक आय' : 'Annual Income'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'वार्षिक पारिवारिक आय (Annual Family Income)?' : 'What is your approximate family annual income?'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { val: 100000, hi: '₹1,00,000 से कम (Below ₹1 Lakh)', en: 'Below ₹1 Lakh' },
                  { val: 180000, hi: '₹1.0L से ₹2.5 लाख (Below ₹2.5L)', en: '₹1.0L to ₹2.5L' },
                  { val: 300000, hi: '₹2.5L से ₹5.0 लाख (Below ₹5L)', en: '₹2.5L to ₹5.0L' },
                  { val: 800000, hi: '₹5.0 लाख से अधिक (Above ₹5L)', en: 'Above ₹5.0L' },
                ].map((inc) => (
                  <button
                    key={inc.val}
                    type="button"
                    onClick={() => setFormData({ ...formData, income: inc.val })}
                    className={`p-4 rounded-2xl border text-left font-bold text-xs sm:text-sm transition-all ${
                      formData.income === inc.val
                        ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                        : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                    }`}
                  >
                    {lang === 'hi' ? inc.hi : inc.en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Social Category */}
          {currentStep === 6 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'सामाजिक श्रेणी' : 'Social Category'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आपकी सामाजिक श्रेणी (Category) क्या है?' : 'Select your social category:'}
              </h2>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'GENERAL', label: 'सामान्य (General)' },
                  { id: 'OBC', label: 'अन्य पिछड़ा वर्ग (OBC)' },
                  { id: 'SC', label: 'अनुसूचित जाति (SC)' },
                  { id: 'ST', label: 'अनुसूचित जनजाति (ST)' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: c.id })}
                    className={`p-3.5 rounded-2xl border text-center font-bold text-xs sm:text-sm transition-all ${
                      formData.category === c.id
                        ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                        : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Marital Status */}
          {currentStep === 7 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Heart className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'वैवाहिक स्थिति' : 'Marital Status'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आपकी वैवाहिक स्थिति क्या है?' : 'What is your marital status?'}
              </h2>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'unmarried', hi: 'अविवाहित (Single)', en: 'Unmarried' },
                  { id: 'married', hi: 'विवाहित (Married)', en: 'Married' },
                  { id: 'widowed', hi: 'विधवा / विधुर (Widowed)', en: 'Widowed' },
                  { id: 'divorced', hi: 'तलाकशुदा / परित्यक्ता', en: 'Divorced' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, maritalStatus: m.id })}
                    className={`p-3.5 rounded-2xl border text-center font-bold text-xs sm:text-sm transition-all ${
                      formData.maritalStatus === m.id
                        ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                        : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                    }`}
                  >
                    {lang === 'hi' ? m.hi : m.en}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Residence Area (Rural / Urban) */}
          {currentStep === 8 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Home className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'निवास क्षेत्र' : 'Area'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'आप किस क्षेत्र में निवास करते हैं?' : 'Do you live in a rural or urban area?'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, residenceType: 'rural' })}
                  className={`p-5 rounded-2xl border text-left font-bold transition-all ${
                    formData.residenceType === 'rural'
                      ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                      : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                  }`}
                >
                  <div className="text-base mb-1">🌾 {lang === 'hi' ? 'ग्रामीण क्षेत्र (Rural Area)' : 'Rural Area'}</div>
                  <div className="text-xs text-brand-textMuted font-normal">ग्राम पंचायत, कृषि क्षेत्र, कस्बा</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, residenceType: 'urban' })}
                  className={`p-5 rounded-2xl border text-left font-bold transition-all ${
                    formData.residenceType === 'urban'
                      ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                      : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                  }`}
                >
                  <div className="text-base mb-1">🏙️ {lang === 'hi' ? 'शहरी क्षेत्र (Urban Area)' : 'Urban Area'}</div>
                  <div className="text-xs text-brand-textMuted font-normal">नगर पालिका, नगर निगम क्षेत्र</div>
                </button>
              </div>
            </div>
          )}

          {/* Step 9: Disability Status */}
          {currentStep === 9 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <Accessibility className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'दिव्यांगता स्थिति' : 'Disability Status'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">
                {lang === 'hi' ? 'क्या आपके पास दिव्यांगता (PwD) प्रमाण पत्र है?' : 'Do you hold a benchmark disability certificate (PwD)?'}
              </h2>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, disabilityStatus: false })}
                  className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                    !formData.disabilityStatus
                      ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                      : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                  }`}
                >
                  {lang === 'hi' ? 'नहीं (No)' : 'No'}
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, disabilityStatus: true })}
                  className={`p-4 rounded-2xl border text-center font-bold text-sm transition-all ${
                    formData.disabilityStatus
                      ? 'border-brand-green bg-brand-greenLight text-brand-green ring-2 ring-brand-green shadow-xs'
                      : 'border-brand-border bg-white text-brand-navy hover:border-brand-green/40'
                  }`}
                >
                  {lang === 'hi' ? 'हाँ (Yes, 40%+ दिव्यांगता)' : 'Yes (40%+ Benchmark)'}
                </button>
              </div>
            </div>
          )}

          {/* Step 10: Dynamic Branch Question based on occupation */}
          {currentStep === 10 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-brand-green">
                <HelpCircle className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{lang === 'hi' ? 'विशिष्ट जानकारी' : 'Specific Profile Detail'}</span>
              </div>
              
              {formData.occupation === 'farmer' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                    {lang === 'hi' ? 'क्या आपके परिवार के नाम कृषि भूमि (Landholding) का स्वामित्व है?' : 'Do you own cultivable agricultural land?'}
                  </h2>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'land_owner' })}
                      className="p-3.5 rounded-2xl border border-brand-green bg-brand-greenLight text-brand-green font-bold text-sm"
                    >
                      {lang === 'hi' ? 'हाँ, भूमि स्वामित्व है (PM-Kisan पात्र)' : 'Yes, Landowner'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'tenant' })}
                      className="p-3.5 rounded-2xl border border-brand-border bg-white text-brand-navy font-bold text-sm hover:border-brand-green"
                    >
                      {lang === 'hi' ? 'किराये / बटाईदार किसान' : 'Tenant / Landless'}
                    </button>
                  </div>
                </div>
              )}

              {formData.occupation === 'student' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                    {lang === 'hi' ? 'आपका वर्तमान अध्ययन स्तर क्या है?' : 'What is your current level of study?'}
                  </h2>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'higher_edu' })}
                      className="p-3.5 rounded-2xl border border-brand-green bg-brand-greenLight text-brand-green font-bold text-sm"
                    >
                      {lang === 'hi' ? 'कॉलेज / स्नातक / पोस्ट-मैट्रिक' : 'Higher Ed / College'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'school' })}
                      className="p-3.5 rounded-2xl border border-brand-border bg-white text-brand-navy font-bold text-sm hover:border-brand-green"
                    >
                      {lang === 'hi' ? 'स्कूली शिक्षा (10वीं तक)' : 'Pre-Matric School'}
                    </button>
                  </div>
                </div>
              )}

              {(formData.occupation !== 'farmer' && formData.occupation !== 'student') && (
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                    {lang === 'hi' ? 'क्या आपके पास आधार से लिंक बैंक खाता (Aadhaar Seeded Bank A/c) है?' : 'Do you have an Aadhaar-seeded bank account for DBT?'}
                  </h2>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'dbt_enabled' })}
                      className="p-3.5 rounded-2xl border border-brand-green bg-brand-greenLight text-brand-green font-bold text-sm"
                    >
                      {lang === 'hi' ? 'हाँ, बैंक खाता DBT सक्रिय है' : 'Yes, DBT Enabled'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, extraDetail: 'regular_account' })}
                      className="p-3.5 rounded-2xl border border-brand-border bg-white text-brand-navy font-bold text-sm hover:border-brand-green"
                    >
                      {lang === 'hi' ? 'सामान्य बैंक खाता' : 'Regular Account'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Wizard Footer Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-brand-border/60">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm font-semibold text-brand-navy hover:bg-brand-warmBg disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'hi' ? 'पिछला सवाल' : 'Previous'}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold shadow-card hover:bg-brand-greenHover transition-all active:scale-95 disabled:opacity-50"
          >
            <span>
              {submitting
                ? (lang === 'hi' ? 'मूल्यांकन जारी...' : 'Evaluating...')
                : currentStep === totalSteps
                ? (lang === 'hi' ? 'संभावित योजनाएँ देखें →' : 'View Matching Schemes →')
                : (lang === 'hi' ? 'आगे बढ़ें →' : 'Next Step →')}
            </span>
            {!submitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Trust Reminder */}
      <div className="text-center text-xs text-brand-textMuted flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-brand-green" />
        <span>{lang === 'hi' ? 'आपकी जानकारी सुरक्षित है और केवल पात्रता गणना के लिए उपयोग की जाती है।' : 'Your data is private and solely used for eligibility assessment.'}</span>
      </div>

    </div>
  );
};

export default EligibilityWizardPage;
