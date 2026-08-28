import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Edit3,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  Filter
} from 'lucide-react';
import ResultCard from '../../components/ResultCard/ResultCard';
import { checkEligibilityApi } from '../../services/eligibilityService';
import { useLanguage } from '../../context/LanguageContext';

const ResultsPage = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(() => location.state?.evaluatedData || null);
  const [meta, setMeta] = useState(() => location.state?.meta || null);
  const [profile, setProfile] = useState(() => location.state?.profile || {
    age: 30,
    gender: 'male',
    state: 'Uttar Pradesh',
    occupation: 'farmer',
    income: 180000,
    category: 'OBC',
    residenceType: 'rural',
    disabilityStatus: false
  });

  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    // If results weren't passed in navigation state, fetch fresh evaluation with profile
    if (!data) {
      const evaluateFresh = async () => {
        try {
          setLoading(true);
          const res = await checkEligibilityApi(profile);
          if (res && res.data) {
            setData(res.data);
            setMeta(res.meta);
          }
        } catch (e) {
          console.error('Error fetching eligibility evaluation:', e);
        } finally {
          setLoading(false);
        }
      };
      evaluateFresh();
    }
  }, [data, profile]);

  const highMatch = data?.highMatch || [];
  const possibleMatch = data?.possibleMatch || [];
  const notEligible = data?.notEligible || [];

  const totalFound = highMatch.length + possibleMatch.length;

  let displayedResults = [];
  if (activeTab === 'ALL') {
    displayedResults = [...highMatch, ...possibleMatch];
  } else if (activeTab === 'HIGH') {
    displayedResults = highMatch;
  } else if (activeTab === 'POSSIBLE') {
    displayedResults = possibleMatch;
  } else if (activeTab === 'NOT_ELIGIBLE') {
    displayedResults = notEligible;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Top Banner & Heading */}
      <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'पात्रता विश्लेषण परिणाम' : 'Eligibility Analysis Result'}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
              {lang === 'hi'
                ? `आपके लिए ${totalFound} संभावित योजनाएँ मिलीं`
                : `Found ${totalFound} Potential Schemes for You`}
            </h1>
            
            <p className="text-xs sm:text-sm text-brand-textMuted max-w-2xl">
              {lang === 'hi'
                ? 'यह परिणाम आपके द्वारा दी गई जनसांख्यिकीय जानकारी (आयु, व्यवसाय, आय, राज्य) के आधार पर तैयार किया गया है।'
                : 'Recommendations calculated strictly based on your age, occupation, income, and state profile.'}
            </p>
          </div>

          {/* Edit Profile CTA */}
          <div className="shrink-0">
            <button
              onClick={() => navigate('/eligibility')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border bg-brand-warmBg text-xs font-bold text-brand-navy hover:border-brand-green hover:text-brand-green transition-all"
            >
              <Edit3 className="w-4 h-4" />
              <span>{lang === 'hi' ? 'जानकारी बदलें (Edit Profile)' : 'Edit Profile'}</span>
            </button>
          </div>

        </div>

        {/* Profile Summary Badges */}
        <div className="pt-3 border-t border-brand-border/60 flex flex-wrap items-center gap-2 text-xs font-medium text-brand-textMuted">
          <span className="font-bold text-brand-navy">{lang === 'hi' ? 'आपकी प्रोफ़ाइल:' : 'Your Profile:'}</span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy font-semibold">
            {profile.age} {lang === 'hi' ? 'वर्ष' : 'Yrs'}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy font-semibold">
            {profile.occupation}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy font-semibold">
            {profile.state}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy font-semibold">
            ₹{Number(profile.income || 0).toLocaleString('en-IN')}/वर्ष
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy font-semibold">
            {profile.category}
          </span>
        </div>

        {/* Mandatory Result Disclaimer */}
        <div className="p-3.5 rounded-xl bg-brand-greenLight/60 border border-brand-green/20 text-xs text-brand-navy flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {meta?.disclaimer || t.common.disclaimer}
          </p>
        </div>

      </div>

      {/* Filter Tabs: High Match / Possible / Not Eligible */}
      <div className="flex flex-wrap items-center gap-2 border-b border-brand-border/80 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'ALL'
              ? 'bg-brand-green text-white shadow-sm'
              : 'bg-white border border-brand-border text-brand-navy hover:border-brand-green/40'
          }`}
        >
          {lang === 'hi' ? `सभी पात्र योजनाएँ (${totalFound})` : `All Eligible (${totalFound})`}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('HIGH')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'HIGH'
              ? 'bg-brand-green text-white shadow-sm'
              : 'bg-white border border-brand-border text-brand-navy hover:border-brand-green/40'
          }`}
        >
          {lang === 'hi' ? `उच्च मिलान (${highMatch.length})` : `High Match (${highMatch.length})`}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('POSSIBLE')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'POSSIBLE'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white border border-brand-border text-brand-navy hover:border-brand-green/40'
          }`}
        >
          {lang === 'hi' ? `आंशिक मिलान (${possibleMatch.length})` : `Partial Match (${possibleMatch.length})`}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('NOT_ELIGIBLE')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'NOT_ELIGIBLE'
              ? 'bg-slate-700 text-white shadow-sm'
              : 'bg-white border border-brand-border text-brand-navy hover:border-brand-green/40'
          }`}
        >
          {lang === 'hi' ? `वर्तमान में अपात्र (${notEligible.length})` : `Not Eligible (${notEligible.length})`}
        </button>
      </div>

      {/* Results Content */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-brand-border animate-pulse space-y-3">
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              <div className="h-6 bg-slate-200 rounded w-1/2"></div>
              <div className="h-16 bg-slate-100 rounded"></div>
            </div>
          ))}
        </div>
      ) : displayedResults.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-brand-border text-center space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-brand-warmBg text-brand-textMuted flex items-center justify-center mx-auto">
            <RotateCcw className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? 'इस श्रेणी में कोई योजना नहीं मिली' : 'No Schemes in This Category'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'आपकी जानकारी बदलकर दोबारा देखें अथवा सभी योजनाओं की पूरी सूची ब्राउज़ करें।'
              : 'Try modifying your profile details or browse the full catalogue of schemes.'}
          </p>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => navigate('/eligibility')}
              className="px-4 py-2 rounded-xl bg-brand-green text-white text-xs font-bold"
            >
              {lang === 'hi' ? 'जानकारी बदलें' : 'Edit Profile'}
            </button>
            <Link
              to="/schemes"
              className="px-4 py-2 rounded-xl border border-brand-border bg-white text-brand-navy text-xs font-semibold"
            >
              {lang === 'hi' ? 'सभी योजनाएं देखें' : 'View All Schemes'}
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {displayedResults.map((res) => (
            <ResultCard key={res.schemeSlug || res.schemeId} result={res} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ResultsPage;
