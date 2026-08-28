import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Building,
  MapPin,
  Calendar,
  Bookmark,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Share2,
  FileCheck,
  Layers,
  ChevronDown
} from 'lucide-react';
import { fetchSchemeBySlug } from '../../services/schemeService';
import DocumentChecklist from '../../components/DocumentChecklist/DocumentChecklist';
import { useLanguage } from '../../context/LanguageContext';
import { useSavedSchemes } from '../../context/SavedSchemesContext';

const SchemeDetailPage = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const { toggleSave, isSaved } = useSavedSchemes();
  const navigate = useNavigate();

  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchSchemeBySlug(slug);
        if (res && res.data) {
          setScheme(res.data);
          // Set dynamic page title
          document.title = `${res.data.name} — Eligibility & Benefits | YojnaMitra`;
        } else {
          setError('योजना नहीं मिली (Scheme not found).');
        }
      } catch (err) {
        console.error('Error fetching scheme detail:', err);
        setError('योजना लोड करने में त्रुटि हुई.');
      } finally {
        setLoading(false);
      }
    };

    loadDetail();
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center space-y-4 animate-pulse">
        <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
        <div className="h-64 bg-white rounded-3xl border border-brand-border mt-8"></div>
      </div>
    );
  }

  if (error || !scheme) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-brand-navy">{error || 'योजना उपलब्ध नहीं है'}</h2>
        <Link
          to="/schemes"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-green text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>सभी योजनाएँ देखें</span>
        </Link>
      </div>
    );
  }

  const saved = isSaved(scheme.slug || scheme._id);

  const formatVerified = (dateStr) => {
    if (!dateStr) return '2 दिन पहले';
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-textMuted hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'hi' ? 'पीछे जाएं' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* WhatsApp Share Button */}
          <button
            type="button"
            onClick={() => {
              const schemeName = lang === 'hi' && scheme.nameHindi ? scheme.nameHindi : scheme.name;
              const benefit = scheme.benefitSummary || (lang === 'hi' && scheme.shortDescriptionHindi ? scheme.shortDescriptionHindi : scheme.shortDescription);
              const text = encodeURIComponent(
                `🏛️ *${schemeName}*\n\n` +
                `💰 *फायदा / Benefit:* ${benefit}\n\n` +
                `🔗 *पूरी जानकारी और ऑनलाइन आवेदन यहाँ से करें:*\n${window.location.href}\n\n` +
                `🇮🇳 _YojnaMitra — भारत का नागरिक सेवा मंच_`
              );
              window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#25D366]/40 bg-[#E9FBEF] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.026-.046-.24-.078-.545-.205-.93-.37-1.632-.699-2.693-2.355-2.775-2.464-.082-.109-.669-.89-.669-1.697 0-.808.423-1.205.574-1.368.144-.155.316-.194.421-.194.106 0 .211.002.303.007.098.005.23-.037.36.275.144.344.492 1.2.535 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.287-.086.1-.182.224-.26.3-.086.085-.177.177-.076.35.101.173.449.741.963 1.201.662.591 1.22.774 1.393.86.173.086.274.072.376-.043.101-.115.433-.504.549-.677.115-.173.231-.144.39-.086.158.058 1.004.474 1.177.56.173.086.288.13.331.202.043.072.043.418-.101.823z"/>
            </svg>
            <span>{lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? (lang === 'hi' ? 'लिंक कॉपी हुआ!' : 'Copied!') : (lang === 'hi' ? 'कॉपी लिंक' : 'Copy Link')}</span>
          </button>

          <button
            type="button"
            onClick={() => toggleSave(scheme.slug || scheme._id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              saved
                ? 'border-brand-green bg-brand-greenLight text-brand-green'
                : 'border-brand-border bg-white text-brand-navy hover:border-brand-green'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
            <span>{saved ? (lang === 'hi' ? 'सुरक्षित' : 'Saved') : (lang === 'hi' ? 'सुरक्षित करें' : 'Save')}</span>
          </button>
        </div>
      </div>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card space-y-6">
        
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-brand-border/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-brand-greenLight text-brand-green text-xs font-bold">
              {scheme.category}
            </span>
            <span className="px-3 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-textMuted" />
              {scheme.level === 'Central' ? (lang === 'hi' ? 'केंद्र सरकार (Central Govt)' : 'Central Govt') : scheme.state}
            </span>
            {scheme.subCategory && (
              <span className="px-3 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-textMuted text-xs font-medium">
                {scheme.subCategory}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-brand-textMuted">
            <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
            <span>
              {lang === 'hi' ? 'अंतिम सत्यापन:' : 'Verified:'} {formatVerified(scheme.lastVerifiedAt)}
            </span>
          </div>
        </div>

        {/* Title & Department */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-3.5xl font-black text-brand-navy leading-tight">
            {lang === 'hi' && scheme.nameHindi ? scheme.nameHindi : scheme.name}
          </h1>
          <p className="text-xs sm:text-sm text-brand-textMuted flex items-center gap-2">
            <Building className="w-4 h-4 text-brand-green shrink-0" />
            <span>{scheme.department}</span>
          </p>
        </div>

        {/* Benefit Summary Box */}
        {scheme.benefitSummary && (
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-greenLight border border-brand-green/20 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {lang === 'hi' ? 'प्रमुख वित्तीय / सामाजिक लाभ' : 'Key Benefit'}
            </span>
            <p className="text-sm sm:text-base font-bold text-brand-navy">
              {scheme.benefitSummary}
            </p>
          </div>
        )}

        {/* Short Summary */}
        <p className="text-sm text-brand-textMuted leading-relaxed">
          {lang === 'hi' && scheme.shortDescriptionHindi ? scheme.shortDescriptionHindi : scheme.shortDescription}
        </p>

        {/* Primary Action Button to Official Application Portal */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={scheme.officialApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-green text-white text-sm font-bold shadow-card hover:bg-brand-greenHover hover:shadow-elevated transition-all active:scale-95"
          >
            <span>{t.common.applyOnOfficial}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={scheme.officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl border border-brand-border bg-brand-warmBg text-xs font-semibold text-brand-navy hover:border-brand-green transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{lang === 'hi' ? 'आधिकारिक स्रोत पोर्टल देखें' : 'Official Portal Source'}</span>
          </a>
        </div>

      </div>

      {/* Grid Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Details, Benefits, Eligibility, Application Process */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Detailed Overview */}
          <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-soft space-y-4">
            <h3 className="text-lg font-bold text-brand-navy">
              {lang === 'hi' ? 'योजना का संपूर्ण विवरण' : 'Full Scheme Overview'}
            </h3>
            <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed whitespace-pre-line">
              {lang === 'hi' && scheme.fullDescriptionHindi ? scheme.fullDescriptionHindi : scheme.fullDescription}
            </p>
          </div>

          {/* Benefits Breakdown List */}
          {scheme.benefits && scheme.benefits.length > 0 && (
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {lang === 'hi' ? 'योजना के मुख्य लाभ एवं सहायता' : 'Benefits & Financial Assistance'}
              </h3>
              <ul className="space-y-2.5">
                {scheme.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility Criteria */}
          {scheme.eligibilitySummary && scheme.eligibilitySummary.length > 0 && (
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {lang === 'hi' ? 'पात्रता की मुख्य शर्तें' : 'Key Eligibility Criteria'}
              </h3>
              <ul className="space-y-2.5">
                {scheme.eligibilitySummary.map((crit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Step-by-Step Application Process */}
          {scheme.applicationProcess && scheme.applicationProcess.length > 0 && (
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-soft space-y-5">
              <h3 className="text-lg font-bold text-brand-navy">
                {lang === 'hi' ? 'आवेदन की चरणबद्ध प्रक्रिया' : 'Step-by-Step Application Process'}
              </h3>
              <div className="space-y-4">
                {scheme.applicationProcess.map((step) => (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-brand-green text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-brand-navy">{step.title}</h4>
                      <p className="text-xs text-brand-textMuted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {scheme.faq && scheme.faq.length > 0 && (
            <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {lang === 'hi' ? 'इस योजना से जुड़े अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
              </h3>
              <div className="space-y-3">
                {scheme.faq.map((f, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-brand-warmBg border border-brand-border/60 space-y-1.5">
                    <h5 className="text-xs sm:text-sm font-bold text-brand-navy flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{f.question}</span>
                    </h5>
                    <p className="text-xs text-brand-textMuted leading-relaxed pl-6">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Col: Document Checklist Tracker & Official Links */}
        <div className="space-y-6">
          
          {/* Document Checklist Component */}
          <DocumentChecklist documents={scheme.documents} schemeSlug={scheme.slug} />

          {/* Official Verification Metadata Box */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 space-y-3.5 shadow-soft">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-textMuted">
              {lang === 'hi' ? 'आधिकारिक स्रोत विवरण' : 'Official Verification'}
            </h4>
            
            <div className="text-xs space-y-2 text-brand-navy">
              <div>
                <span className="text-brand-textMuted block text-[11px]">{lang === 'hi' ? 'स्रोत संस्था:' : 'Authoritative Source:'}</span>
                <span className="font-semibold">{scheme.sourceName || 'Official Govt Portal'}</span>
              </div>

              <div>
                <span className="text-brand-textMuted block text-[11px]">{lang === 'hi' ? 'अंतिम सत्यापन:' : 'Last Verified:'}</span>
                <span className="font-semibold">{formatVerified(scheme.lastVerifiedAt)}</span>
              </div>

              <div>
                <span className="text-brand-textMuted block text-[11px]">{lang === 'hi' ? 'आवेदन स्थिति:' : 'Status:'}</span>
                <span className="inline-block px-2 py-0.5 rounded bg-brand-greenLight text-brand-green font-bold text-[11px] mt-0.5">
                  {scheme.importantDates?.applicationStatus || 'सक्रिय (Active)'}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-brand-border/60">
              <a
                href={scheme.officialApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-3 rounded-xl bg-brand-green text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-brand-greenHover shadow-2xs"
              >
                <span>{lang === 'hi' ? 'आधिकारिक वेबसाइट खोलें' : 'Open Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Security Advisory */}
          <div className="p-4 rounded-2xl bg-brand-warmBg border border-brand-border text-xs text-brand-textMuted leading-relaxed space-y-1.5">
            <span className="font-bold text-brand-navy flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              {lang === 'hi' ? 'नागरिक सुरक्षा सलाह:' : 'Citizen Safety Advisory:'}
            </span>
            <p>
              {lang === 'hi'
                ? 'सरकारी योजनाओं के लिए कभी भी किसी अनधिकृत व्यक्ति या फर्जी लिंक पर पैसे न दें। आवेदन केवल आधिकारिक .gov.in या .nic.in वेबसाइट से ही करें।'
                : 'Never pay fees to unauthorized agents. Apply only on authentic .gov.in or .nic.in official portals.'}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SchemeDetailPage;
