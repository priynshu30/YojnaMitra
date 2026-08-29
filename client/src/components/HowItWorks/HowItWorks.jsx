import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Zap, Lock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';

const HowItWorks = () => {
  const { lang } = useLanguage();
  const sectionRef = useScrollReveal();

  const steps = [
    {
      step: '01',
      titleHi: 'अपनी जानकारी दर्ज करें',
      titleEn: 'Provide Your Details',
      descHi: 'अपनी उम्र, राज्य, पेशा और आय से संबंधित कुछ सरल सवालों के जवाब दें।',
      descEn: 'Answer a few simple questions regarding your age, state, occupation, and income.',
      ctaHi: 'प्रारंभ करें →',
      ctaEn: 'Start Now →',
      link: '/eligibility',
      graphic: (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          {/* Soft Glowing Green Backdrop Aura */}
          <div className="absolute inset-0 rounded-full bg-[#EAF6EE] scale-105 opacity-70" />

          {/* Clipboard with User Profile Avatar and Checklist */}
          <svg className="relative z-10 w-16 h-18" viewBox="0 0 80 96" fill="none">
            {/* Clipboard Body */}
            <rect x="12" y="10" width="56" height="76" rx="8" fill="#168447" />
            <rect x="16" y="14" width="48" height="68" rx="6" fill="#FFFFFF" />
            {/* Clip at top */}
            <rect x="28" y="4" width="24" height="10" rx="3" fill="#142338" />
            <circle cx="40" cy="8" r="2.5" fill="#FFFFFF" />

            {/* Profile Avatar inside clipboard */}
            <circle cx="28" cy="28" r="6" fill="#FDE68A" />
            <circle cx="28" cy="26" r="3" fill="#168447" />
            <path d="M24,32 C24,30 26,29 28,29 C30,29 32,30 32,32" fill="#168447" />

            {/* Header lines next to avatar */}
            <line x1="38" y1="25" x2="56" y2="25" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="31" x2="48" y2="31" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

            {/* Checklist Items */}
            <circle cx="24" cy="44" r="2.5" fill="#EAF6EE" stroke="#168447" strokeWidth="1.2" />
            <polyline points="22.5,44 23.5,45 25.5,43" stroke="#168447" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="30" y1="44" x2="56" y2="44" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="24" cy="54" r="2.5" fill="#EAF6EE" stroke="#168447" strokeWidth="1.2" />
            <polyline points="22.5,54 23.5,55 25.5,53" stroke="#168447" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="30" y1="54" x2="50" y2="54" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="24" cy="64" r="2.5" fill="#EAF6EE" stroke="#168447" strokeWidth="1.2" />
            <polyline points="22.5,64 23.5,65 25.5,63" stroke="#168447" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="30" y1="64" x2="44" y2="64" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />

            {/* Green Pencil */}
            <g transform="rotate(-35 55 60)">
              <rect x="52" y="40" width="5" height="20" rx="1" fill="#168447" />
              <polygon points="52,60 57,60 54.5,65" fill="#FDE68A" />
              <polygon points="53.5,63 55.5,63 54.5,66" fill="#142338" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      step: '02',
      titleHi: 'अनुकूल योजनाएं देखें',
      titleEn: 'View Matching Schemes',
      descHi: 'हमारा स्मार्ट इंजन आपके लिए उपयुक्त केंद्र व राज्य सरकार की योजनाएं खोजता है।',
      descEn: 'Our rules engine identifies tailored central and state government schemes.',
      ctaHi: 'विवरण देखें →',
      ctaEn: 'View Details →',
      link: '/schemes',
      graphic: (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          {/* Soft Glowing Green Backdrop Aura */}
          <div className="absolute inset-0 rounded-full bg-[#EAF6EE] scale-105 opacity-70" />

          {/* Document Sheet with Government Building & Magnifying Glass */}
          <svg className="relative z-10 w-20 h-20" viewBox="0 0 96 96" fill="none">
            {/* Government Pillar Building in Background */}
            <g opacity="0.3">
              <path d="M56,36 L78,36 L67,26 Z" fill="#64748B" />
              <rect x="58" y="38" width="3" height="18" fill="#64748B" />
              <rect x="65" y="38" width="3" height="18" fill="#64748B" />
              <rect x="73" y="38" width="3" height="18" fill="#64748B" />
              <rect x="54" y="56" width="26" height="3" rx="1" fill="#64748B" />
            </g>

            {/* Document Sheet */}
            <rect x="18" y="14" width="44" height="60" rx="5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.8" />
            
            {/* Checklist Lines */}
            <circle cx="28" cy="28" r="2.5" fill="#168447" />
            <polyline points="26.5,28 27.5,29 29.5,27" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="35" y1="28" x2="52" y2="28" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="28" cy="40" r="2.5" fill="#168447" />
            <polyline points="26.5,40 27.5,41 29.5,39" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="35" y1="40" x2="48" y2="40" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="28" cy="52" r="2.5" fill="#168447" />
            <polyline points="26.5,52 27.5,53 29.5,51" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="35" y1="52" x2="44" y2="52" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />

            {/* Magnifying Glass */}
            <circle cx="56" cy="54" r="12" fill="#EAF6EE" fillOpacity="0.8" stroke="#168447" strokeWidth="3" />
            <line x1="65" y1="63" x2="76" y2="74" stroke="#168447" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
    {
      step: '03',
      titleHi: 'समझें और आवेदन करें',
      titleEn: 'Understand & Apply',
      descHi: 'दस्तावेज आवश्यकताएं जांचें और सीधे सत्यापित सरकारी पोर्टल पर आवेदन करें।',
      descEn: 'Check document requirements and apply directly on verified official portals.',
      ctaHi: 'आवेदन करें →',
      ctaEn: 'Apply Now →',
      link: '/schemes',
      graphic: (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          {/* Soft Glowing Green Backdrop Aura */}
          <div className="absolute inset-0 rounded-full bg-[#EAF6EE] scale-105 opacity-70" />

          {/* Certificate with Official Green Rubber Stamp */}
          <svg className="relative z-10 w-20 h-20" viewBox="0 0 96 96" fill="none">
            {/* Certificate Page */}
            <rect x="20" y="12" width="50" height="64" rx="5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.8" />
            <line x1="28" y1="24" x2="50" y2="24" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="32" x2="60" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="28" y1="40" x2="56" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="28" y1="48" x2="46" y2="48" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

            {/* Verified Green Seal Badge */}
            <circle cx="34" cy="60" r="6" fill="#168447" />
            <polyline points="31,60 33,62 37,58" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* 3D Green Rubber Stamp Tool */}
            <g transform="translate(44, 40)">
              <circle cx="14" cy="6" r="5" fill="#14532D" />
              <path d="M11,9 L17,9 L15,18 L13,18 Z" fill="#166534" />
              <rect x="4" y="18" width="20" height="5" rx="1.5" fill="#168447" />
              <rect x="2" y="23" width="24" height="3" rx="1" fill="#142338" />
            </g>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      
      {/* ── Compact Outer Container ── */}
      <div className="bg-[#FAF9F5] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border border-[#E5E9E2] shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden space-y-5 sm:space-y-6">

        {/* ══════════ REAL PANORAMIC SCENERY BACKGROUND IMAGE ══════════ */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <img
            src="/bg_how_it_works.jpg"
            alt="Heritage & Landscape Scenery"
            className="w-full h-full object-cover object-top opacity-35 mix-blend-multiply"
          />
        </div>

        {/* ══════════ COMPACT SECTION HEADER ══════════ */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 relative z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-[11px] font-bold uppercase tracking-wider border border-[#168447]/20 shadow-2xs">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{lang === 'hi' ? 'सरल 3-चरण प्रक्रिया' : 'SIMPLE 3-STEP PROCESS'}</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#142338] tracking-tight">
            {lang === 'hi' ? 'सही योजना तक पहुँचने के ' : '3 Simple Steps to Discover '}
            <span className="text-[#168447]">
              {lang === 'hi' ? '3 आसान कदम' : 'Your Schemes'}
            </span>
          </h2>

          {/* Subtle Golden Ashoka Emblem Divider */}
          <div className="flex items-center justify-center gap-2 pt-0.5 select-none">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#C28A3E]/70 to-[#C28A3E]" />
            <svg className="w-5 h-6 text-[#B87D2E]" viewBox="0 0 60 75" fill="currentColor">
              <path d="M30 4 C24 4 20 8 20 14 C20 18 22 21 25 23 L25 28 L35 28 L35 23 C38 21 40 18 40 14 C40 8 36 4 30 4 Z" />
              <rect x="10" y="30" width="40" height="6" rx="1.5" fill="#A76F24" />
              <circle cx="30" cy="42" r="5" fill="none" stroke="#A76F24" strokeWidth="2" />
            </svg>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#C28A3E]/70 to-[#C28A3E]" />
          </div>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs text-[#5A6A6A] font-medium leading-normal max-w-lg mx-auto">
            {lang === 'hi'
              ? 'कुछ आसान चरणों में सरकारी योजनाओं को खोजें, समझें और सीधे आवेदन करें।'
              : 'Find, understand and apply for government schemes in a few simple steps.'}
          </p>
        </div>

        {/* ══════════ COMPACT 3 CARDS GRID ══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 relative z-10">
          {steps.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-white rounded-[20px] sm:rounded-[22px] border border-[#E5E9E2] hover:border-[#168447]/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 group hover:-translate-y-1 cursor-pointer no-underline relative overflow-hidden"
              style={{ minHeight: '260px' }}
            >
              {/* Top Row: Green Corner Badge + Soft Checkmark Badge */}
              <div className="flex items-center justify-between -mt-4 -mx-4 mb-2">
                <div className="bg-[#168447] text-white text-xs font-black px-3.5 py-1.5 rounded-br-xl shadow-2xs tracking-tight">
                  {item.step}
                </div>

                <div className="mr-4 w-6 h-6 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center text-xs font-black group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
              </div>

              {/* Center Graphic */}
              <div className="py-1 flex justify-center group-hover:scale-105 transition-transform duration-300">
                {item.graphic}
              </div>

              {/* Title & Description */}
              <div className="text-center space-y-1 mt-1">
                <h3 className="text-sm sm:text-base font-black text-[#142338] group-hover:text-[#168447] transition-colors leading-tight">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-[11px] text-[#5A6A6A] leading-relaxed font-medium line-clamp-2">
                  {lang === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>

              {/* Subtle Center Dot */}
              <div className="flex justify-center my-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#168447]/30 group-hover:scale-150 transition-transform" />
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-1 text-[11px] font-bold text-[#168447] flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                <span>{lang === 'hi' ? item.ctaHi : item.ctaEn}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* ══════════ COMPACT BOTTOM TRUST BADGES STRIP ══════════ */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E5E9E2] shadow-2xs relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E8E5]/80">
            
            {/* 1. 100% Verified */}
            <div className="flex items-center gap-2.5 pt-1 sm:pt-0 sm:pr-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? '100% सत्यापित' : '100% Verified'}
                </div>
                <div className="text-[10px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'आधिकारिक एवं विश्वसनीय जानकारी' : 'Official & Trusted Information'}
                </div>
              </div>
            </div>

            {/* 2. Personalized Results */}
            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'व्यक्तिगत परिणाम' : 'Personalized Results'}
                </div>
                <div className="text-[10px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'आपकी प्रोफ़ाइल से मेल खाती योजनाएं' : 'Schemes that match your profile'}
                </div>
              </div>
            </div>

            {/* 3. Save Time & Effort */}
            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'समय और प्रयास की बचत' : 'Save Time & Effort'}
                </div>
                <div className="text-[10px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'सभी जानकारी एक ही स्थान पर' : 'All information in one place'}
                </div>
              </div>
            </div>

            {/* 4. Secure & Private */}
            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-2">
              <div className="w-8 h-8 rounded-lg bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'सुरक्षित एवं निजी' : 'Secure & Private'}
                </div>
                <div className="text-[10px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'आपका डेटा हमारे पास सुरक्षित है' : 'Your data is safe with us'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
