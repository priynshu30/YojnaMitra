import React from 'react';
import { TrendingUp, FileCheck2, MapPin, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';

const StatsCounter = () => {
  const { lang } = useLanguage();
  const sectionRef = useScrollReveal();

  const stats = [
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#E6F7F0] text-[#168447] flex items-center justify-center shadow-2xs">
          <FileCheck2 className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '750+',
      titleHi: 'सत्यापित सरकारी योजनाएँ',
      titleEn: 'Verified Govt Schemes',
      subHi: 'केंद्र एवं राज्य सरकार',
      subEn: 'Central & State Portals',
      borderAccent: 'border-b-4 border-[#93C5FD]',
    },
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#FFF7DB] text-[#D97706] flex items-center justify-center shadow-2xs">
          <MapPin className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '36',
      titleHi: 'राज्य एवं केंद्र शासित प्रदेश',
      titleEn: 'States & Union Territories',
      subHi: 'अखिल भारतीय कवरेज',
      subEn: 'All-India Coverage',
      borderAccent: 'border-b-4 border-[#FDE68A]',
    },
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center shadow-2xs">
          <Users className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '15 लाख+',
      titleHi: 'लाभार्थियों ने बनायी पहचान',
      titleEn: 'Citizens Benefited',
      subHi: 'सटीक एवं सीधा परिणाम',
      subEn: 'Instant & Direct Results',
      borderAccent: 'border-b-4 border-[#DDD6FE]',
    },
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#E6FBF4] text-[#059669] flex items-center justify-center shadow-2xs">
          <ShieldCheck className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '100%',
      titleHi: 'निःशुल्क व सरल मंच',
      titleEn: 'Free & Transparent Access',
      subHi: 'शुद्ध, विश्वसनीय, सीधे लिंक',
      subEn: 'Zero Middlemen, Direct Links',
      borderAccent: 'border-b-4 border-[#A7F3D0]',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="bg-[#FAF9F5] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-[#E5E9E2] shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
        
        {/* LEFT WATERMARK */}
        <div className="hidden sm:block absolute left-2 top-2 w-72 h-full pointer-events-none select-none z-0">
          <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
            <pattern id="statsDotGrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#168447" fillOpacity="0.18" />
            </pattern>
            <rect x="0" y="0" width="300" height="300" fill="url(#statsDotGrid)" />
          </svg>
        </div>

        {/* RIGHT WATERMARK */}
        <div className="hidden sm:block absolute right-0 top-0 w-[480px] h-full pointer-events-none select-none z-0">
          <svg viewBox="0 0 480 300" className="w-full h-full" fill="none">
            <path d="M100,20 C110,18 118,24 122,32 C126,40 140,46 144,54 C148,62 142,74 146,82 C150,92 168,100 164,112 C160,122 145,126 142,136 C138,146 148,156 142,172 C138,182 126,192 122,204 C116,214 106,234 96,245 C86,234 82,212 78,202 C72,192 64,176 60,164 C56,152 45,144 48,132 C52,120 68,114 72,104 C76,92 68,78 74,66 C78,56 74,44 78,34 C82,25 90,23 100,20 Z"
              fill="#168447" fillOpacity="0.04" />
            <g stroke="#64748B" strokeWidth="1.4" strokeOpacity="0.25" fill="none">
              <path d="M220,70 Q290,35 360,70" strokeWidth="2" strokeOpacity="0.3" />
              <ellipse cx="290" cy="76" rx="110" ry="24" strokeWidth="1.8" strokeOpacity="0.35" />
              {[190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 370, 385].map((x, idx) => (
                <line key={idx} x1={x} y1="80" x2={x} y2="160" strokeWidth="1.4" strokeOpacity="0.25" />
              ))}
              <ellipse cx="290" cy="160" rx="115" ry="26" strokeWidth="2" strokeOpacity="0.35" />
              <path d="M170,160 C170,178 410,178 410,160" strokeWidth="1.8" strokeOpacity="0.3" />
            </g>
          </svg>
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold border border-[#168447]/20 shadow-2xs mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'राष्ट्रीय जनकल्याणकारी सेवाएँ' : 'National Welfare Services'}</span>
            </div>
            <h2 className="hindi-headline text-2xl sm:text-3xl font-black text-[#142338] tracking-tight">
              {lang === 'hi' ? 'एक नज़र में YojnaMitra के आंकड़े' : 'YojnaMitra at a Glance'}
            </h2>
            <div className="w-10 h-1 bg-[#168447] rounded-full mt-2" />
          </div>

          <div className="reveal self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E5E9E2] text-xs font-bold text-[#142338] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#168447] animate-pulse" />
            <span className="text-[#5A6A6A]">{lang === 'hi' ? 'दैनिक अद्यतित व अपडेटेड' : 'Daily Verified & Updated'}</span>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 sm:gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`reveal bg-white rounded-[24px] p-5 sm:p-6 border border-[#E9ECE8] ${item.borderAccent} shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between hover-lift`}
              style={{ minHeight: '150px', animationDelay: `${idx * 100}ms`, transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#142338] tracking-tight animate-fadeIn">
                  {item.count}
                </span>
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-black text-[#142338] leading-snug group-hover:text-[#168447] transition-colors">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-[11px] text-[#5A6A6A] font-medium leading-relaxed">
                  {lang === 'hi' ? item.subHi : item.subEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
