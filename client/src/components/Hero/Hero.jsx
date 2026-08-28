import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Play,
  Landmark,
  RefreshCw,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Trust strip items
  const trustFeatures = [
    { icon: Landmark,    title: t.trustStrip?.feature1Title || 'केंद्र एवं राज्य सरकार',    sub: t.trustStrip?.feature1Sub || 'दोनों की योजनाएँ' },
    { icon: RefreshCw,   title: t.trustStrip?.feature2Title || 'नियमित अपडेट',               sub: t.trustStrip?.feature2Sub || 'हमेशा ताजा जानकारी' },
    { icon: FileText,    title: t.trustStrip?.feature3Title || 'पात्रता और लाभ की जानकारी', sub: t.trustStrip?.feature3Sub || 'सभी विवरण एक जगह' },
    { icon: ExternalLink,title: t.trustStrip?.feature4Title || 'आधिकारिक लिंक',             sub: t.trustStrip?.feature4Sub || 'सीधे सरकारी वेबसाइट पर' },
  ];

  return (
    <>
      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section className="relative overflow-hidden flex flex-col justify-between" style={{ minHeight: 'clamp(380px, 52vw, 580px)' }}>

        {/* ── Full bleed crystal clear background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_bg.jpg"
            alt="YojnaMitra — Indian Citizen Community"
            className="w-full h-full object-cover object-[center_top]"
          />
          {/* Ultra-soft transparent sky tint for crystal clear visibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.10) 25%, transparent 60%)',
            }}
          />
        </div>

        {/* ── Content container (Clean, centered, perfectly open sky) ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 text-center">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#168447]/25 text-[#168447] text-xs font-bold shadow-xs mb-2">
            <ShieldCheck className="w-4 h-4 text-[#168447]" />
            <span>{lang === 'hi' ? 'सरकारी योजनाएँ, सही जानकारी के साथ' : 'Verified Government Schemes with Direct Links'}</span>
          </div>

          {/* Main Headline with drop shadow for legibility without needing white overlays */}
          <h1 className="hindi-headline font-black text-[#142338] leading-tight drop-shadow-sm" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.9rem)' }}>
            {lang === 'hi' ? 'शायद आपके लिए भी ' : 'Find Government Schemes '}
            <span className="text-[#168447] relative inline-block">
              {lang === 'hi' ? 'कोई सरकारी योजना' : 'Made For You'}
              {/* Underline squiggle */}
              <svg className="absolute -bottom-1 left-0 w-full h-[6px] text-[#168447]/30" viewBox="0 0 300 10" preserveAspectRatio="none">
                <path d="M0,5 Q75,0 150,5 Q225,10 300,5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{' '}{lang === 'hi' ? 'है।' : 'in Minutes.'}
          </h1>

          {/* Sub-heading */}
          <p className="mt-1.5 text-[#1E2D2D] text-xs sm:text-sm md:text-base font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-xs">
            {lang === 'hi'
              ? 'हम आपकी जानकारी के आधार पर आपके लिए उपयुक्त सरकारी योजनाएँ खोजते हैं और आसान भाषा में समझाते हैं।'
              : 'Discover personalized central & state welfare schemes, check eligibility, and apply directly via official portals.'}
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <button
              onClick={() => navigate('/eligibility')}
              className="inline-flex items-center gap-2 px-7 py-2.5 sm:py-3 rounded-full bg-[#168447] text-white text-xs sm:text-sm font-bold shadow-lg hover:bg-[#126338] hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <span>{lang === 'hi' ? 'अपनी योजनाएँ खोजें' : 'Discover Your Schemes'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E5E8E5] text-[#142338] text-xs sm:text-sm font-bold hover:border-[#168447] hover:text-[#168447] transition-all cursor-pointer shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>{lang === 'hi' ? 'कैसे काम करता है?' : 'How It Works?'}</span>
            </button>
          </div>

        </div>

        {/* ── Spacer to keep foreground people and monument 100% open & clear ── */}
        <div className="h-28 sm:h-44 md:h-56 lg:h-64 pointer-events-none" />
      </section>

      {/* ═══════════════════════ TRUST STRIP ═══════════════════════ */}
      <section className="relative z-20 -mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="bg-white rounded-2xl shadow-lg border border-[#E5E8E5] px-5 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E8E5]/80">
            {trustFeatures.map(({ icon: Icon, title, sub }, i) => (
              <div key={i} className={`flex items-center gap-2 sm:gap-3 ${i >= 2 ? 'pt-3 lg:pt-0' : ''} ${i % 2 !== 0 && i < 4 ? 'lg:pl-5' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#142338] leading-tight">{title}</p>
                  <p className="text-[11px] text-[#5A6A6A] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
