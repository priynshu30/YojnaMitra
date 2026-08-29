import React from 'react';
import { Landmark, Compass, Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';

const StatsCounter = () => {
  const { lang } = useLanguage();
  const sectionRef = useScrollReveal();

  const stats = [
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shadow-2xs">
          <Landmark className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '750+',
      titleHi: 'कुल सरकारी योजनाएँ',
      titleEn: 'Welfare Schemes',
      subHi: 'केंद्र एवं सभी राज्यों की योजनाएं',
      subEn: 'Central & State Portals',
      borderAccent: 'border-b-4 border-[#168447]',
    },
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shadow-2xs">
          <Compass className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '36',
      titleHi: 'राज्य एवं केंद्र शासित प्रदेश',
      titleEn: 'States & UTs Covered',
      subHi: 'अखिल भारतीय स्तर पर कवरेज',
      subEn: 'All-India Citizen Access',
      borderAccent: 'border-b-4 border-[#3B82F6]',
    },
    {
      icon: (
        <div className="w-13 h-13 rounded-2xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shadow-2xs">
          <Award className="w-6 h-6" strokeWidth={2.2} />
        </div>
      ),
      count: '24+',
      titleHi: 'नागरिक सेवा श्रेणियाँ',
      titleEn: 'Key Service Sectors',
      subHi: 'कृषि, शिक्षा, स्वास्थ्य, पेंशन आदि',
      subEn: 'Agri, Education, Health, Loans',
      borderAccent: 'border-b-4 border-[#F59E0B]',
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
        
        {/* Real India Map Background Image Artwork (Left) */}
        <div
          className="hidden sm:block absolute left-0 top-0 h-full w-80 pointer-events-none select-none z-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)'
          }}
        >
          <img
            src="/bg_india_map.jpg"
            alt="India Map"
            className="w-full h-full object-contain object-left mix-blend-multiply opacity-40"
          />
        </div>

        {/* Real Parliament Background Image Artwork (Right) */}
        <div
          className="hidden sm:block absolute right-0 top-0 h-full w-96 pointer-events-none select-none z-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)'
          }}
        >
          <img
            src="/bg_parliament.jpg"
            alt="Parliament Building"
            className="w-full h-full object-contain object-right mix-blend-multiply opacity-35"
          />
        </div>

        {/* Top Header Badge Row */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5E9E2]/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'राष्ट्रीय प्रगति व आंकड़े' : 'National Portal Metrics'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#142338]">
              {lang === 'hi' ? 'भारत के नागरिकों के लिए समर्पित सेवा' : 'Empowering Indian Citizens Across States'}
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E5E9E2] text-xs text-[#5A6A6A] font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#168447] animate-pulse" />
            <span>{lang === 'hi' ? 'दैनिक सत्यापित डेटा' : 'Daily Verified Data'}</span>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 sm:gap-5">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`reveal bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E9E2] hover:border-[#CBD5E1] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${item.borderAccent}`}
              style={{ minHeight: '150px', animationDelay: `${idx * 100}ms`, transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#142338] tracking-tight group-hover:text-[#168447] transition-colors">
                  {item.count}
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#142338] leading-snug">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-[11px] text-[#5A6A6A] mt-1 font-medium leading-relaxed line-clamp-1">
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
