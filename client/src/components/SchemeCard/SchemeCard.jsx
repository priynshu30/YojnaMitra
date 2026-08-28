import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark,
  ShieldCheck,
  ArrowRight,
  Building,
  MapPin,
  Share2,
  Check,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useSavedSchemes } from '../../context/SavedSchemesContext';

const SchemeCard = ({ scheme }) => {
  const { lang } = useLanguage();
  const { toggleSave, isSaved } = useSavedSchemes();
  const [copied, setCopied] = useState(false);

  const saved = isSaved(scheme.slug || scheme._id);

  // Format verified date
  const formatVerified = (dateStr) => {
    if (!dateStr) return '2 दिन पहले';
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // WhatsApp 1-Click Share
  const handleWhatsAppShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const schemeName = lang === 'hi' && scheme.nameHindi ? scheme.nameHindi : scheme.name;
    const benefit = scheme.benefitSummary || (lang === 'hi' && scheme.shortDescriptionHindi ? scheme.shortDescriptionHindi : scheme.shortDescription);
    const url = `${window.location.origin}/schemes/${scheme.slug}`;
    
    const text = encodeURIComponent(
      `🏛️ *${schemeName}*\n\n` +
      `💰 *फायदा / Benefit:* ${benefit}\n\n` +
      `🔗 *पूरी जानकारी और ऑनलाइन आवेदन यहाँ से करें:*\n${url}\n\n` +
      `🇮🇳 _YojnaMitra — भारत का नागरिक सेवा मंच_`
    );

    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const schemeTitle = lang === 'hi' && scheme.nameHindi ? scheme.nameHindi : scheme.name;

  return (
    <div className="bg-white rounded-2xl border border-brand-border hover:border-brand-green/40 hover:shadow-card transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group relative">
      
      <div>
        {/* Top Badges: Category, Level/State, WhatsApp Share & Bookmark button */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-brand-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-lg bg-brand-greenLight text-brand-green text-[11px] font-bold tracking-wide">
              {scheme.category}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg border border-brand-border text-brand-navy text-[11px] font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-textMuted" />
              {scheme.level === 'Central' ? (lang === 'hi' ? 'केंद्र सरकार' : 'Central Govt') : (scheme.state || 'राज्य सरकार')}
            </span>
          </div>

          {/* Action buttons (WhatsApp + Bookmark) */}
          <div className="flex items-center gap-1 shrink-0">
            {/* 🟢 1-Click WhatsApp Share Button */}
            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="p-1.5 sm:p-2 rounded-lg border border-[#25D366]/30 bg-[#E9FBEF] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer shadow-2xs"
              title={lang === 'hi' ? 'व्हाट्सएप पर शेयर करें' : 'Share on WhatsApp'}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.079-1.026-.046-.24-.078-.545-.205-.93-.37-1.632-.699-2.693-2.355-2.775-2.464-.082-.109-.669-.89-.669-1.697 0-.808.423-1.205.574-1.368.144-.155.316-.194.421-.194.106 0 .211.002.303.007.098.005.23-.037.36.275.144.344.492 1.2.535 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.287-.086.1-.182.224-.26.3-.086.085-.177.177-.076.35.101.173.449.741.963 1.201.662.591 1.22.774 1.393.86.173.086.274.072.376-.043.101-.115.433-.504.549-.677.115-.173.231-.144.39-.086.158.058 1.004.474 1.177.56.173.086.288.13.331.202.043.072.043.418-.101.823z"/>
              </svg>
            </button>

            {/* Bookmark Save */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSave(scheme.slug || scheme._id);
              }}
              className={`p-1.5 sm:p-2 rounded-lg border transition-all cursor-pointer ${
                saved
                  ? 'border-brand-green bg-brand-greenLight text-brand-green'
                  : 'border-brand-border bg-white text-brand-textMuted hover:text-brand-green hover:border-brand-green/50'
              }`}
              title={saved ? 'सुरक्षित की गई' : 'सुरक्षित करें'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Scheme Name & Department */}
        <div className="mt-3.5 space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-green transition-colors leading-snug line-clamp-2">
            <Link to={`/schemes/${scheme.slug}`}>
              {schemeTitle}
            </Link>
          </h3>
          
          <p className="text-xs text-brand-textMuted flex items-center gap-1.5 line-clamp-1">
            <Building className="w-3.5 h-3.5 shrink-0" />
            <span>{scheme.department}</span>
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-brand-textMuted mt-3 line-clamp-2 leading-relaxed">
          {lang === 'hi' && scheme.shortDescriptionHindi ? scheme.shortDescriptionHindi : scheme.shortDescription}
        </p>

        {/* Benefit Highlight Box */}
        {scheme.benefitSummary && (
          <div className="mt-4 p-3 rounded-xl bg-brand-warmBg border border-brand-border/80">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#168447] flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#168447]" />
                {lang === 'hi' ? 'मुख्य लाभ' : 'Key Benefit'}
              </span>
              <span className="text-[10px] text-[#168447] bg-[#EAF6EE] font-bold px-1.5 py-0.2 rounded">
                DBT Ready
              </span>
            </div>
            <p className="text-xs font-semibold text-brand-navy line-clamp-2">
              {scheme.benefitSummary}
            </p>
          </div>
        )}
      </div>

      {/* Bottom info & Action */}
      <div className="mt-5 pt-3.5 border-t border-brand-border/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-brand-textMuted">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
          <span>
            {lang === 'hi' ? 'सत्यापित:' : 'Verified:'} {formatVerified(scheme.lastVerifiedAt)}
          </span>
        </div>

        <Link
          to={`/schemes/${scheme.slug}`}
          className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-green transition-colors shadow-2xs group-hover:bg-brand-green"
        >
          <span>{lang === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
};

export default SchemeCard;
