import React from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';

const DigitalInitiatives = () => {
  const { lang } = useLanguage();
  const sectionRef = useScrollReveal();

  const platforms = [
    {
      id: 'digital-india',
      nameHi: 'डिजिटल इंडिया',
      nameEn: 'Digital India',
      descHi: 'सशक्त भारत, डिजिटल शक्ति',
      descEn: 'Power to Empower',
      url: 'https://www.digitalindia.gov.in/',
      bgFooter: 'from-[#EBF4FE] to-[#D9ECFD]',
      btnBg: 'bg-[#0084FF]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#E1F0FE] flex items-center justify-center text-[#0084FF] shadow-sm">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'digilocker',
      nameHi: 'डिजिलॉकर',
      nameEn: 'DigiLocker',
      descHi: 'कागज़ रहित डिजिटल दस्तावेज़',
      descEn: 'Paperless Governance',
      url: 'https://www.digilocker.gov.in/',
      bgFooter: 'from-[#FFF8E7] to-[#FFF0C3]',
      btnBg: 'bg-[#F59E0B]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#FFF4CF] flex items-center justify-center text-[#F59E0B] shadow-sm">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-1.5V9a3 3 0 0 0-3-3h-6A3 3 0 0 0 6 9v1.5H4.5A3 3 0 0 0 1.5 13.5V18a3 3 0 0 0 3 3h15zM8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1.5H8V9z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'mygov',
      nameHi: 'माईगॉव इंडिया',
      nameEn: 'MyGov India',
      descHi: 'नागरिक सहभागिता मंच',
      descEn: 'Citizen Engagement Platform',
      url: 'https://www.mygov.in/',
      bgFooter: 'from-[#EFF3F8] to-[#DFE7F1]',
      btnBg: 'bg-[#142A5C]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#E2ECF7] flex items-center justify-center text-[#142A5C] shadow-sm font-black text-lg tracking-wider select-none">
          IN
        </div>
      ),
    },
    {
      id: 'umang',
      nameHi: 'उमंग (UMANG)',
      nameEn: 'UMANG',
      descHi: 'एक ऐप, 1200+ सरकारी सेवाएं',
      descEn: 'Unified Mobile App Services',
      url: 'https://web.umang.gov.in/',
      bgFooter: 'from-[#F5EFFF] to-[#EBDCFF]',
      btnBg: 'bg-[#5B21B6]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#F0E6FF] flex items-center justify-center shadow-sm">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="3" fill="#5B21B6" />
            <rect x="7" y="5" width="2" height="2" rx="0.5" fill="#FBBF24" />
            <rect x="11" y="5" width="2" height="2" rx="0.5" fill="#EC4899" />
            <rect x="15" y="5" width="2" height="2" rx="0.5" fill="#34D399" />
            <rect x="7" y="9" width="2" height="2" rx="0.5" fill="#60A5FA" />
            <rect x="11" y="9" width="2" height="2" rx="0.5" fill="#F87171" />
            <rect x="15" y="9" width="2" height="2" rx="0.5" fill="#A78BFA" />
            <circle cx="12" cy="18" r="1" fill="#FFFFFF" />
          </svg>
        </div>
      ),
    },
    {
      id: 'dbt',
      nameHi: 'डीबीटी भारत',
      nameEn: 'DBT Bharat',
      descHi: 'प्रत्यक्ष लाभ अंतरण पोर्टल',
      descEn: 'Direct Benefit Transfer',
      url: 'https://dbtbharat.gov.in/',
      bgFooter: 'from-[#E4FAF6] to-[#CAF5EE]',
      btnBg: 'bg-[#00897B]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#D6F7F1] flex items-center justify-center text-[#00897B] shadow-sm">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="2" fill="#00897B" />
            <line x1="2" y1="9" x2="22" y2="9" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="5" y="13" width="4" height="2" rx="0.5" fill="#FBBF24" />
          </svg>
        </div>
      ),
    },
    {
      id: 'india-gov',
      nameHi: 'राष्ट्रीय पोर्टल',
      nameEn: 'National Portal',
      descHi: 'भारत सरकार का आधिकारिक पोर्टल',
      descEn: 'Official Portal of India',
      url: 'https://www.india.gov.in/',
      bgFooter: 'from-[#F4EDFF] to-[#E9DBFF]',
      btnBg: 'bg-[#5B21B6]',
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#EBE0FF] flex items-center justify-center text-[#5B21B6] shadow-sm">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v2h20V7L12 2zM4 11v8h2v-8H4zm5 0v8h2v-8H9zm5 0v8h2v-8h-2zm5 0v8h2v-8h-2zM2 21v2h20v-2H2z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div
        className="rounded-[32px] sm:rounded-[36px] border border-[#E5E9E2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden"
        style={{ backgroundColor: '#F3F7F2' }}
      >

        {/* ══════════ LEFT BG: India Map Silhouette (hidden on mobile) ══════════ */}
        <div
          className="hidden md:block absolute left-0 top-0 h-full pointer-events-none select-none z-0"
          style={{ width: '280px' }}
        >
          <svg
            viewBox="0 0 280 440"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dot grid confined to left panel */}
            <defs>
              <pattern id="digiDotL" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.3" fill="#168447" fillOpacity="0.28" />
              </pattern>
              <clipPath id="mapClip">
                <path d="M125,22 C138,19 152,28 158,42 C163,54 178,62 186,76 C194,90 184,108 190,124 C196,138 218,148 214,166 C210,180 192,188 188,204 C184,218 196,236 189,256 C183,272 168,288 162,308 C156,324 142,354 128,372 C110,354 106,322 100,304 C92,286 80,264 74,248 C66,232 52,216 56,198 C60,182 84,172 88,156 C94,138 82,116 90,98 C96,82 90,64 96,48 C104,34 114,26 125,22 Z" />
              </clipPath>
            </defs>

            {/* Dot grid behind map */}
            <rect x="0" y="0" width="280" height="440" fill="url(#digiDotL)" />

            {/* India map outer fill */}
            <path
              d="M125,22 C138,19 152,28 158,42 C163,54 178,62 186,76 C194,90 184,108 190,124 C196,138 218,148 214,166 C210,180 192,188 188,204 C184,218 196,236 189,256 C183,272 168,288 162,308 C156,324 142,354 128,372 C110,354 106,322 100,304 C92,286 80,264 74,248 C66,232 52,216 56,198 C60,182 84,172 88,156 C94,138 82,116 90,98 C96,82 90,64 96,48 C104,34 114,26 125,22 Z"
              fill="#A8D5B8"
              fillOpacity="0.55"
              stroke="#168447"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />

            {/* Inner highlight */}
            <path
              d="M125,32 C135,30 148,38 154,50 C158,60 170,68 178,80 C184,92 176,108 180,122 C184,134 202,142 198,158 C194,170 178,178 175,192 C172,204 182,220 176,236 C172,248 158,262 153,278 C148,292 136,316 126,330 C110,316 107,290 102,274 C96,258 86,240 80,226 C74,212 64,200 68,186 C72,172 92,164 96,150 C100,136 90,118 96,102 C100,88 95,72 100,58 C106,46 116,36 125,32 Z"
              fill="#E4F4EB"
              fillOpacity="0.45"
            />
          </svg>
        </div>

        {/* ══════════ RIGHT BG: Parliament of India (hidden on mobile) ══════════ */}
        <div
          className="hidden md:block absolute right-0 top-0 h-full pointer-events-none select-none z-0"
          style={{ width: '340px' }}
        >
          <svg
            viewBox="0 0 340 340"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="digiDotR" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.1" fill="#64748B" fillOpacity="0.14" />
              </pattern>
            </defs>

            <rect x="0" y="0" width="340" height="340" fill="url(#digiDotR)" />

            {/* Flag pole */}
            <line x1="218" y1="20" x2="218" y2="52" stroke="#64748B" strokeWidth="2" strokeOpacity="0.5" />
            {/* Flag */}
            <path d="M218,22 L240,29 L218,36 Z" fill="#FF9933" fillOpacity="0.55" />
            <rect x="218" y="29" width="22" height="4" fill="white" fillOpacity="0.5" />
            <path d="M218,33 L240,40 L218,47 Z" fill="#138808" fillOpacity="0.55" />

            {/* Dome top arch */}
            <path d="M148,78 Q218,38 288,78" stroke="#94A3B8" strokeWidth="2.2" strokeOpacity="0.55" fill="none" />

            {/* Outer dome ellipse */}
            <ellipse cx="218" cy="86" rx="118" ry="26" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.5" fill="#F8FAFC" fillOpacity="0.22" />

            {/* Inner dome ellipse */}
            <ellipse cx="218" cy="92" rx="118" ry="26" stroke="#94A3B8" strokeWidth="1.4" strokeOpacity="0.35" fill="none" />

            {/* Columns */}
            {[110, 124, 138, 152, 166, 180, 194, 208, 222, 236, 250, 264, 278, 292, 306, 320].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="92" x2={x} y2="200" stroke="#94A3B8" strokeWidth="1.5" strokeOpacity="0.32" />
                <rect x={x - 2.5} y="196" width="5" height="5" fill="#94A3B8" fillOpacity="0.25" />
              </g>
            ))}

            {/* Base platform ellipses (3 tiers) */}
            <ellipse cx="218" cy="200" rx="124" ry="29" stroke="#94A3B8" strokeWidth="2.2" strokeOpacity="0.48" fill="#F8FAFC" fillOpacity="0.2" />
            <path d="M88,210 C88,232 348,232 348,210" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.42" fill="none" />
            <path d="M80,222 C80,246 356,246 356,222" stroke="#94A3B8" strokeWidth="2.4" strokeOpacity="0.48" fill="none" />
            <path d="M72,235 C72,262 364,262 364,235" stroke="#94A3B8" strokeWidth="2.8" strokeOpacity="0.52" fill="none" />

            {/* Ground base */}
            <rect x="70" y="258" width="296" height="6" rx="2" fill="#94A3B8" fillOpacity="0.22" />
          </svg>
        </div>

        {/* ══════════ BOTTOM WAVE ══════════ */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none select-none z-0 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,20 C200,60 400,-10 600,30 C800,70 1000,10 1200,40 L1200,120 L0,120 Z"
              fill="#D8EBE0"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        {/* ══════════ CONTENT ══════════ */}
        <div className="relative z-10 p-4 sm:p-8 lg:p-12 space-y-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="reveal inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 text-[#168447] text-xs font-bold border border-[#168447]/25 shadow-sm backdrop-blur-sm">
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'आधिकारिक डिजिटल भारत पहल' : 'Official Digital India Ecosystem'}</span>
            </div>

            <h2 className="reveal hindi-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#142338] tracking-tight" style={{ transitionDelay: '80ms' }}>
              {lang === 'hi' ? 'प्रमुख सरकारी डिजिटल प्लेटफॉर्म्स' : 'Major Government Digital Platforms'}
            </h2>

            {/* Ashoka Divider */}
            <div className="reveal flex items-center justify-center gap-3 py-1 select-none" style={{ transitionDelay: '150ms' }}>
              <div className="h-[2px] w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#C28A3E] to-[#C28A3E]" />
              <svg className="w-8 h-10 text-[#B87D2E] animate-floatSlow" viewBox="0 0 60 75" fill="currentColor">
                <path d="M30 4 C24 4 20 8 20 14 C20 18 22 21 25 23 L25 28 L35 28 L35 23 C38 21 40 18 40 14 C40 8 36 4 30 4 Z" />
                <path d="M12 10 C8 10 6 13 6 17 C6 21 8 23 11 25 L16 29 L20 25 L18 21 C18 21 16 18 16 14 C16 11 14 10 12 10 Z" />
                <path d="M48 10 C52 10 54 13 54 17 C54 21 52 23 49 25 L44 29 L40 25 L42 21 C42 21 44 18 44 14 C44 11 46 10 48 10 Z" />
                <rect x="10" y="30" width="40" height="6" rx="1.5" fill="#A76F24" />
                <circle cx="30" cy="42" r="6" fill="none" stroke="#A76F24" strokeWidth="2" />
                <circle cx="30" cy="42" r="1.5" fill="#A76F24" />
                <path d="M15 50 C20 58 40 58 45 50 L48 55 C42 66 18 66 12 55 Z" fill="#96601B" />
                <rect x="16" y="60" width="28" height="4" rx="1" fill="#855314" />
              </svg>
              <div className="h-[2px] w-20 sm:w-28 bg-gradient-to-l from-transparent via-[#C28A3E] to-[#C28A3E]" />
            </div>

            <p className="reveal text-xs sm:text-sm text-[#5A6A6A] font-medium" style={{ transitionDelay: '220ms' }}>
              {lang === 'hi'
                ? 'भारत सरकार की महत्वपूर्ण डिजिटल सेवाएं, एक ही स्थान पर'
                : 'Key Digital India services and citizen portals in one unified place'}
            </p>
          </div>

          {/* 6 Platform Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {platforms.map((card, idx) => (
              <a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal bg-white rounded-[22px] border border-[#E9ECE8] hover:border-[#CBD5E1] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 cursor-pointer"
                style={{ minHeight: '200px', transitionDelay: `${idx * 80}ms` }}
              >
                <div className="p-5 flex flex-col items-center text-center space-y-3">
                  <div className="group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-black text-[#142338] leading-tight group-hover:text-[#168447] transition-colors">
                    {lang === 'hi' ? card.nameHi : card.nameEn}
                  </h3>
                  <p className="text-[11px] text-[#5A6A6A] leading-relaxed line-clamp-2">
                    {lang === 'hi' ? card.descHi : card.descEn}
                  </p>
                </div>

                <div className={`w-full py-4 bg-gradient-to-b ${card.bgFooter} flex items-center justify-center border-t border-slate-100/80`}>
                  <div className={`w-8 h-8 rounded-full ${card.btnBg} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalInitiatives;
