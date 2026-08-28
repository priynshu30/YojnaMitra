import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HowItWorks = () => {
  const { lang } = useLanguage();

  const steps = [
    {
      step: '01',
      titleHi: 'पात्रता जांचें',
      titleEn: 'Check Eligibility',
      descHi: '2 मिनट में कुछ सरल सवालों के जवाब दें और अपनी श्रेणी के अनुसार सबसे उपयुक्त सरकारी योजनाएँ खोजें।',
      descEn: 'Answer a few quick questions to instantly discover the best suitable central & state welfare schemes.',
      // Custom SVG matching screenshot 2 (hand with coin)
      icon: (
        <svg className="w-8 h-8 text-[#1E40AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
          <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.7-2.8l-3.7 2.4" />
          <circle cx="17" cy="6" r="3" fill="#E0E7FF" stroke="#1E40AF" strokeWidth="1.5" />
          <path d="M17 5v2M16 6h2" stroke="#1E40AF" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      step: '02',
      titleHi: 'ऑनलाइन आवेदन करें',
      titleEn: 'Apply Online',
      descHi: 'दस्तावेज चेकलिस्ट तैयार करें और बिना किसी बिचौलिये के सीधे आधिकारिक सरकारी पोर्टल पर आवेदन करें।',
      descEn: 'Prepare the smart document checklist and submit your application directly on verified official portals.',
      // Custom SVG matching screenshot 2 (document with checkmark)
      icon: (
        <svg className="w-8 h-8 text-[#1E40AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="12" y2="16" />
          <circle cx="17" cy="17" r="4" fill="#E0E7FF" stroke="#1E40AF" strokeWidth="1.5" />
          <polyline points="15.5 17 16.5 18 18.5 16" stroke="#1E40AF" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      step: '03',
      titleHi: 'डिजिटल स्वीकृति व लाभ',
      titleEn: 'Get Digital Approval',
      descHi: 'संबंधित विभाग द्वारा डिजिटल सत्यापन के बाद सब्सिडी व धनराशि सीधे आपके बैंक खाते (DBT) में प्राप्त करें।',
      descEn: 'Receive digital approval and direct financial benefit transfer (DBT) directly into your linked bank account.',
      // Custom SVG matching screenshot 2 (verified badge with checkmark)
      icon: (
        <svg className="w-8 h-8 text-[#1E40AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 2.4 3.4-.4 1.4 3.1 3.2 1.2-.4 3.4 2.4 2.4-2.4 2.4.4 3.4-3.2 1.2-1.4 3.1-3.4-.4L12 22l-2.4-2.4-3.4.4-1.4-3.1-3.2-1.2.4-3.4L-2 12l2.4-2.4-.4-3.4 3.2-1.2 1.4-3.1 3.4.4z" />
          <polyline points="9 12 11 14 15 10" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: '04',
      titleHi: 'आवेदन ट्रैक करें',
      titleEn: 'Track Application',
      descHi: 'घर बैठे अपने मोबाइल से आवेदन की वास्तविक स्थिति (Real-time Status) और आगामी किस्तों की तारीखें जांचें।',
      descEn: 'Check the real-time status of your application and upcoming installment disbursement at your convenience.',
      // Custom SVG matching screenshot 2 (mobile with tracking finger/grid)
      icon: (
        <svg className="w-8 h-8 text-[#1E40AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="10" y1="5" x2="14" y2="5" />
          <circle cx="12" cy="18" r="1" />
          <rect x="8" y="8" width="3" height="3" rx="0.5" fill="#E0E7FF" />
          <rect x="13" y="8" width="3" height="3" rx="0.5" fill="#E0E7FF" />
          <path d="M13 14h2a1.5 1.5 0 0 1 1.5 1.5v.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0E7FF] text-[#1E40AF] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'सरल एवं पारदर्शी प्रक्रिया' : 'Simple 4-Step Process'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#142338]">
          {lang === 'hi' ? 'सरकारी योजना तक पहुँचने के 4 आसान चरण' : '4 Easy Steps to Access Your Schemes'}
        </h2>
        <p className="text-xs sm:text-sm text-[#5A6A6A] max-w-xl mx-auto">
          {lang === 'hi'
            ? 'बिना किसी परेशानी या दलाल के सीधे ऑनलाइन प्रक्रिया समझें और अपने अधिकार प्राप्त करें।'
            : 'Discover, apply and track welfare benefits with zero paperwork hassle.'}
        </p>
      </div>

      {/* Flowing Connected Capsule Steps (Matching Screenshot 2) */}
      <div className="relative">
        
        {/* Continuous Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[48%] left-8 right-8 h-[2px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 z-0" />

        {/* 4 Connected Capsule Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Connected Dot on line */}
              <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#2563EB] items-center justify-center shadow-xs z-20">
                <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
              </div>

              {/* Capsule Body (Exact Pill-Oval curve styling from screenshot 2) */}
              <div className="bg-white hover:bg-gradient-to-b hover:from-[#F0F7FF] hover:to-white border border-[#DCE7F5] group-hover:border-[#3B82F6] rounded-[36px] p-6 sm:p-7 min-h-[310px] flex flex-col items-center text-center justify-between shadow-sm hover:shadow-xl transition-all">
                
                {/* Top Icon with soft circular glow */}
                <div className="w-16 h-16 rounded-full bg-[#F0F7FF] border border-[#DCE7F5] group-hover:border-[#93C5FD] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xs mb-4">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-black text-[#1E3A8A] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#5A6A6A] leading-relaxed">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                {/* Step indicator tag */}
                <div className="mt-4 pt-3 w-full border-t border-[#EEF2F6] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-[#3B82F6] bg-[#EFF6FF] px-3 py-0.5 rounded-full border border-[#BFDBFE]">
                    {lang === 'hi' ? `चरण ${item.step}` : `Step ${item.step}`}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
