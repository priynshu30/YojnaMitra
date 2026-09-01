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
    { icon: Landmark,    title: lang === 'hi' ? 'केंद्र एवं राज्य सरकार' : 'Central & State Govt',     sub: lang === 'hi' ? 'सभी सक्रिय योजनाएँ' : 'All Active Schemes' },
    { icon: RefreshCw,   title: lang === 'hi' ? 'दैनिक ताज़ा अपडेट्स' : 'Daily Live Updates',           sub: lang === 'hi' ? 'PIB व आधिकारिक स्रोत' : 'PIB & Official Feeds' },
    { icon: FileText,    title: lang === 'hi' ? 'सरल पात्रता नियम' : 'Clear Eligibility',             sub: lang === 'hi' ? '2-मिनट में जांचें' : 'Check in 2 Minutes' },
    { icon: ExternalLink,title: lang === 'hi' ? 'आधिकारिक पोर्टल लिंक' : 'Official Portal Links',      sub: lang === 'hi' ? 'सीधा सरकारी आवेदन' : 'Direct Apply Links' },
  ];

  return (
    <>
      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section className="relative overflow-hidden flex flex-col justify-between" style={{ minHeight: 'clamp(420px, 48vw, 560px)' }}>

        {/* ── Background Image with Smooth Mobile & Desktop Gradient Masks ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_bg.jpg"
            alt="YojnaMitra — Indian Citizen Welfare"
            fetchpriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[center_top]"
          />
          {/* Subtle gradient overlay ensuring crystal clear text contrast on both mobile & desktop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.30) 45%, rgba(255,255,255,0.10) 70%, transparent 100%)',
            }}
          />
        </div>

        {/* ── Content container (Clean, centered, crystal clear text) ── */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 text-center">

          {/* Frosted glass backdrop on mobile for 100% sharp readability */}
          <div className="bg-white/85 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none rounded-3xl p-4 sm:p-0 border border-white/80 sm:border-0 shadow-sm sm:shadow-none space-y-3">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#168447]/25 text-[#168447] text-[11px] sm:text-xs font-bold shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#168447]" />
              <span>{lang === 'hi' ? 'सरकारी योजनाएँ, सही जानकारी के साथ' : 'Verified Government Schemes & Portals'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-black text-[#0D1C2E] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight">
              {lang === 'hi' ? 'शायद आपके लिए भी ' : 'Discover Welfare Schemes '}
              <span className="text-[#168447] relative inline-block">
                {lang === 'hi' ? 'कोई सरकारी योजना' : 'Made For You'}
                {/* Underline squiggle */}
                <svg className="absolute -bottom-1 left-0 w-full h-[5px] text-[#168447]/30" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M0,5 Q75,0 150,5 Q225,10 300,5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{' '}{lang === 'hi' ? 'है।' : 'in 2 Minutes.'}
            </h1>

            {/* Sub-heading */}
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#243547] leading-relaxed max-w-xl mx-auto">
              {lang === 'hi'
                ? 'हम आपकी जानकारी के आधार पर आपके लिए उपयुक्त सरकारी योजनाएँ खोजते हैं और आसान भाषा में समझाते हैं।'
                : 'Find personalized central & state welfare programs, check eligibility requirements, and apply directly.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={() => navigate('/eligibility')}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#168447] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#126338] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>{lang === 'hi' ? 'अपनी योजनाएँ खोजें' : 'Discover Your Schemes'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/95 border border-[#E5E8E5] text-[#142338] text-xs sm:text-sm font-bold hover:border-[#168447] hover:text-[#168447] transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>{lang === 'hi' ? 'कैसे काम करता है?' : 'How It Works?'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* ── Spacer for landscape/bottom artwork visibility ── */}
        <div className="h-20 sm:h-36 md:h-44 pointer-events-none" />
      </section>

      {/* ═══════════════════════ TRUST STRIP ═══════════════════════ */}
      <section className="relative z-20 -mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="bg-white rounded-2xl shadow-md border border-[#E5E8E5] px-4 sm:px-5 py-3 sm:py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E8E5]/80">
            {trustFeatures.map(({ icon: Icon, title, sub }, i) => (
              <div key={i} className={`flex items-center gap-2 sm:gap-3 ${i >= 2 ? 'pt-2.5 lg:pt-0' : ''} ${i % 2 !== 0 && i < 4 ? 'lg:pl-5' : ''}`}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#142338] leading-tight">{title}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#5A6A6A] mt-0.5">{sub}</p>
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
