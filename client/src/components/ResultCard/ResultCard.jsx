import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ResultCard = ({ result }) => {
  const { lang } = useLanguage();

  const getStatusBadge = () => {
    switch (result.status) {
      case 'MATCH':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight border border-brand-green/30 text-brand-green text-xs font-bold shadow-2xs">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'संभावित रूप से पात्र' : 'Likely Eligible'}</span>
          </span>
        );
      case 'PARTIAL_MATCH':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'आंशिक रूप से पात्र' : 'Partially Eligible'}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
            <XCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === 'hi' ? 'वर्तमान में अपात्र' : 'Not Eligible'}</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border shadow-card hover:border-brand-green/40 transition-all p-5 sm:p-6 space-y-4">
      
      {/* Header: Status badge, score, level */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-brand-border/60">
        <div className="flex items-center gap-2">
          {getStatusBadge()}
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg text-[11px] font-semibold text-brand-navy border border-brand-border">
            {result.category}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-brand-warmBg text-[11px] font-semibold text-brand-textMuted border border-brand-border">
            {result.level === 'Central' ? 'केंद्र सरकार' : result.state}
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-brand-navy">
            {result.matchScore}% {lang === 'hi' ? 'मिलान' : 'Match'}
          </span>
        </div>
      </div>

      {/* Scheme Title & Benefit */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-brand-navy hover:text-brand-green transition-colors">
          <Link to={`/schemes/${result.schemeSlug}`}>
            {lang === 'hi' && result.schemeNameHindi ? result.schemeNameHindi : result.schemeName}
          </Link>
        </h3>
        <p className="text-xs text-brand-textMuted flex items-center gap-1.5 mt-1">
          <Building className="w-3.5 h-3.5 shrink-0" />
          <span>{result.department}</span>
        </p>

        {result.benefitSummary && (
          <div className="mt-3 p-3 rounded-xl bg-brand-warmBg border border-brand-border/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-0.5">
              {lang === 'hi' ? 'संभावित लाभ (Potential Benefit)' : 'Potential Benefit'}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-brand-navy">
              {result.benefitSummary}
            </p>
          </div>
        )}
      </div>

      {/* "Why This Scheme?" Explanations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        
        {/* Reasons Matched */}
        {result.reasons && result.reasons.length > 0 && (
          <div className="p-3.5 rounded-xl bg-brand-greenLight/60 border border-brand-green/20 space-y-1.5">
            <span className="text-xs font-bold text-brand-green flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'आप क्यों पात्र हो सकते हैं:' : 'Why you may qualify:'}</span>
            </span>
            <ul className="space-y-1">
              {result.reasons.map((r, i) => (
                <li key={i} className="text-xs text-brand-navy flex items-start gap-1.5 leading-relaxed">
                  <span className="text-brand-green font-bold shrink-0">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Missing Requirements or Warnings */}
        {result.missingRequirements && result.missingRequirements.length > 0 ? (
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'hi' ? 'पात्रता में क्या कमी है / प्रमाण आवश्यक:' : 'Missing criteria / proofs required:'}</span>
            </span>
            <ul className="space-y-1">
              {result.missingRequirements.map((m, i) => (
                <li key={i} className="text-xs text-amber-950 flex items-start gap-1.5 leading-relaxed">
                  <span className="text-amber-600 font-bold shrink-0">⚠</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-brand-warmBg border border-brand-border/60 flex items-center text-xs text-brand-textMuted">
            {lang === 'hi' ? 'कोई प्रमुख अपात्रता शर्त नहीं पाई गई।' : 'No major missing qualification criteria detected.'}
          </div>
        )}

      </div>

      {/* Action CTA Buttons */}
      <div className="pt-3 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-1 text-[11px] text-brand-textMuted">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
          <span>{lang === 'hi' ? 'सत्यापित सरकारी स्रोत' : 'Verified Official Source'}</span>
        </div>

        <div className="flex items-center gap-2">
          {result.officialApplicationUrl && (
            <a
              href={result.officialApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:text-brand-green hover:border-brand-green/50 transition-all"
            >
              <span>{lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <Link
            to={`/schemes/${result.schemeSlug}`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-brand-green text-white text-xs font-bold hover:bg-brand-greenHover transition-all shadow-2xs"
          >
            <span>{lang === 'hi' ? 'पूर्ण विवरण देखें' : 'View Full Details'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ResultCard;
