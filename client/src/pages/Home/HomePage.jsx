import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import CitizenToolsStrip from '../../components/CitizenTools/CitizenToolsStrip';
import CitizenHub from '../../components/CitizenHub/CitizenHub';
import DigitalInitiatives from '../../components/DigitalInitiatives/DigitalInitiatives';
import { fetchCategories, fetchSchemes } from '../../services/schemeService';
import { useLanguage } from '../../context/LanguageContext';
import useScrollReveal from '../../hooks/useScrollReveal';

const HomePage = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [recentSchemes, setRecentSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll reveal refs
  const howItWorksRef = useScrollReveal();
  const faqRef = useScrollReveal();

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [catsRes, schemesRes] = await Promise.all([
          fetchCategories(),
          fetchSchemes({ limit: 6, sort: 'verified' })
        ]);

        if (catsRes && catsRes.data) setCategories(catsRes.data);
        if (schemesRes && schemesRes.data) setRecentSchemes(schemesRes.data);
      } catch (err) {
        console.error('Error loading homepage data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadHomeData();
  }, []);

  const howItWorksSteps = [
    {
      step: '01',
      title: lang === 'hi' ? 'अपनी जानकारी दें' : 'Provide Your Details',
      desc: lang === 'hi' ? 'आयु, राज्य, व्यवसाय और आय जैसे कुछ सामान्य सवालों के जवाब दें।' : 'Answer a few simple questions regarding your age, state, occupation, and income.',
    },
    {
      step: '02',
      title: lang === 'hi' ? 'अपनी योजनाएँ देखें' : 'View Matching Schemes',
      desc: lang === 'hi' ? 'हम आपकी जानकारी के आधार पर संभावित उपयुक्त योजनाएँ और लाभ दिखाएंगे।' : 'Our rules engine identifies tailored central and state government schemes.',
    },
    {
      step: '03',
      title: lang === 'hi' ? 'समझें और आवेदन करें' : 'Understand & Apply',
      desc: lang === 'hi' ? 'दस्तावेज चेकलिस्ट तैयार करें और सीधे आधिकारिक सरकारी पोर्टल पर आवेदन करें।' : 'Check document requirements and apply directly on verified official portals.',
    }
  ];

  const faqs = [
    {
      q: lang === 'hi' ? 'क्या YojnaMitra पर कोई शुल्क देना होता है?' : 'Is YojnaMitra free to use?',
      a: lang === 'hi' ? 'नहीं, YojnaMitra नागरिकों के लिए 100% निःशुल्क और स्वतंत्र सूचना मंच है। यहाँ किसी भी योजना की जानकारी या पात्रता जांचने के लिए कोई शुल्क नहीं लिया जाता।' : 'No, YojnaMitra is 100% free and open for all citizens. We do not charge any fee for discovering schemes or checking eligibility.'
    },
    {
      q: lang === 'hi' ? 'योजनाओं की जानकारी कितनी सही और प्रामाणिक है?' : 'How authentic is the scheme data?',
      a: lang === 'hi' ? 'हम प्रत्येक योजना का विवरण सीधे भारत सरकार एवं राज्य सरकारों के आधिकारिक मंत्रालयों, बजट दस्तावेजों एवं आधिकारिक वेब पोर्टलों से सत्यापित करते हैं तथा अंतिम सत्यापन तिथि प्रदर्शित करते हैं।' : 'We verify scheme criteria directly from official ministry portals, guidelines, and gazettes, providing verified timestamps and direct official links.'
    },
    {
      q: lang === 'hi' ? 'क्या YojnaMitra सरकारी वेबसाइट है?' : 'Is YojnaMitra an official government portal?',
      a: lang === 'hi' ? 'नहीं, YojnaMitra एक स्वतंत्र सिविक-टेक सूचना प्लेटफ़ॉर्म है। अंतिम पात्रता निर्धारण एवं आवेदन स्वीकृति संबंधित सरकारी विभागों द्वारा ही की जाती है।' : 'No, YojnaMitra is an independent civic platform and not an official government entity. All final approvals and disbursements are governed by respective authorities.'
    },
    {
      q: lang === 'hi' ? 'आवेदन करने के लिए कौन से दस्तावेज चाहिए?' : 'What documents are typically required to apply?',
      a: lang === 'hi' ? 'अधिकांश योजनाओं के लिए आधार कार्ड, बैंक पासबुक, आय प्रमाण पत्र, निवास प्रमाण पत्र व जाति प्रमाण पत्र (यदि लागू हो) की आवश्यकता होती है। प्रत्येक योजना पृष्ठ पर पूरी चेकलिस्ट दी गई है।' : 'Most schemes require Aadhaar, Bank Passbook, Domicile Certificate, and Income Certificate. Each scheme detail page provides an interactive readiness checklist.'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-14">

      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats */}
      <StatsCounter />

      {/* 3. 🌟 Standout Citizen Smart Tools (Voice Search, 2-Min Eligibility, Document Guide, WhatsApp) */}
      <CitizenToolsStrip />

      {/* 4. Citizen Hub */}
      <CitizenHub categories={categories} recentSchemes={recentSchemes} />

      {/* 4. How It Works — with scroll reveal */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={howItWorksRef}>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-widest border border-[#168447]/20 shadow-2xs">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>{lang === 'hi' ? 'सरल 3-चरण प्रक्रिया' : 'SIMPLE 3-STEP PROCESS'}</span>
          </div>

          <h2 className="reveal text-2xl sm:text-3xl lg:text-4xl font-black text-[#142338]" style={{ transitionDelay: '100ms' }}>
            {lang === 'hi' ? 'सही योजना तक पहुँचने के 3 आसान कदम' : '3 Simple Steps to Discover Your Schemes'}
          </h2>

          {/* Golden Ashoka Emblem Divider */}
          <div className="reveal flex items-center justify-center gap-3 pt-1 select-none" style={{ transitionDelay: '200ms' }}>
            <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C28A3E]/60 to-[#C28A3E]" />
            <svg className="w-7 h-9 text-[#B87D2E] animate-floatSlow" viewBox="0 0 60 75" fill="currentColor">
              <path d="M30 4 C24 4 20 8 20 14 C20 18 22 21 25 23 L25 28 L35 28 L35 23 C38 21 40 18 40 14 C40 8 36 4 30 4 Z" />
              <path d="M12 10 C8 10 6 13 6 17 C6 21 8 23 11 25 L16 29 L20 25 L18 21 C18 21 16 18 16 14 C16 11 14 10 12 10 Z" />
              <path d="M48 10 C52 10 54 13 54 17 C54 21 52 23 49 25 L44 29 L40 25 L42 21 C42 21 44 18 44 14 C44 11 46 10 48 10 Z" />
              <rect x="10" y="30" width="40" height="6" rx="1.5" fill="#A76F24" />
              <circle cx="30" cy="42" r="6" fill="none" stroke="#A76F24" strokeWidth="2" />
              <circle cx="30" cy="42" r="1.5" fill="#A76F24" />
              <path d="M15 50 C20 58 40 58 45 50 L48 55 C42 66 18 66 12 55 Z" fill="#96601B" />
              <rect x="16" y="60" width="28" height="4" rx="1" fill="#855314" />
            </svg>
            <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#C28A3E]/60 to-[#C28A3E]" />
          </div>
        </div>

        {/* Cards with dotted connectors */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Dotted connector lines (desktop only) */}
          <div className="hidden md:flex absolute top-[108px] left-[calc(33.33%-24px)] right-[calc(33.33%-24px)] items-center justify-between pointer-events-none z-0 px-4">
            <div className="flex-1 flex items-center gap-1 justify-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#168447]/30 animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
              ))}
              <div className="w-3 h-3 rounded-full border-2 border-[#168447]/40 bg-white" />
            </div>
            <div className="flex-1 flex items-center gap-1 justify-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#168447]/30 animate-pulse" style={{ animationDelay: `${i * 80 + 300}ms` }} />
              ))}
              <div className="w-3 h-3 rounded-full border-2 border-[#168447]/40 bg-white" />
            </div>
          </div>

          {howItWorksSteps.map((step, idx) => {
            const icons = [
              <svg key="1" className="w-16 h-16 text-[#168447]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="12" y2="16" />
                <circle cx="16" cy="17" r="3" fill="#EAF6EE" stroke="#168447" strokeWidth="1.5" />
                <path d="M15 17l.8.8L17.2 16.2" stroke="#168447" strokeWidth="1.5" strokeLinecap="round" />
              </svg>,
              <svg key="2" className="w-16 h-16 text-[#168447]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="14" height="18" rx="2" fill="#EAF6EE" fillOpacity="0.4" />
                <rect x="3" y="4" width="14" height="18" rx="2" />
                <line x1="7" y1="9" x2="13" y2="9" />
                <line x1="7" y1="13" x2="11" y2="13" />
                <circle cx="17" cy="17" r="3.5" fill="#EAF6EE" stroke="#168447" strokeWidth="1.5" />
                <line x1="19.5" y1="19.5" x2="22" y2="22" strokeWidth="2" />
              </svg>,
              <svg key="3" className="w-16 h-16 text-[#168447]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#EAF6EE" fillOpacity="0.4" />
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="16" cy="17" r="3" fill="#EAF6EE" stroke="#168447" strokeWidth="1.5" />
                <path d="M15 17l.8.8L17.2 16.2" stroke="#168447" strokeWidth="1.5" strokeLinecap="round" />
              </svg>,
            ];
            const ctaLabels = ['प्रारंभ करें', 'विवरण देखें', 'आवेदन करें'];
            const ctaLinks  = ['/eligibility', '/schemes', '/schemes'];
            const ctaEnglish = ['Start Now', 'View Details', 'Apply Now'];
            return (
              <Link
                key={idx}
                to={ctaLinks[idx]}
                className="reveal relative z-10 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 border border-[#E5E9E2] hover:border-[#168447]/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 cursor-pointer no-underline"
                style={{ minHeight: '280px', transitionDelay: `${idx * 120}ms` }}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#168447] font-mono tracking-tight">{step.step}</span>
                  <div className="w-8 h-8 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center text-base font-black group-hover:scale-110 transition-transform duration-300">✓</div>
                </div>

                {/* Icon */}
                <div className="flex justify-center my-2 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${idx * 0.4}s` }}>
                  {icons[idx]}
                </div>

                {/* Text */}
                <div className="mt-4 text-center space-y-2">
                  <h3 className="text-base sm:text-lg font-black text-[#142338] group-hover:text-[#168447] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5A6A6A] leading-relaxed">{step.desc}</p>
                </div>

                <div className="flex justify-center mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#168447]/25 group-hover:scale-150 transition-transform" />
                </div>

                {/* CTA */}
                <div className="mt-3 pt-3 border-t border-[#F0F2F0] text-xs font-bold text-[#168447] flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300">
                  <span>{lang === 'hi' ? ctaLabels[idx] : ctaEnglish[idx]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. Digital India Portals */}
      <DigitalInitiatives />

      {/* 6. FAQ — with scroll reveal */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={faqRef}>
        {/* Divider badge */}
        <div className="reveal relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E8E5]" />
          </div>
          <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E8E5] text-[#168447] text-xs font-bold shadow-2xs">
            <HelpCircle className="w-4 h-4 text-[#168447]" />
            <span>{lang === 'hi' ? 'सामान्य प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>
        </div>

        <div className="reveal text-center space-y-2 mb-6" style={{ transitionDelay: '100ms' }}>
          <h2 className="text-xl sm:text-2xl font-black text-[#142338]">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="reveal bg-white rounded-2xl border border-[#E5E8E5] overflow-hidden transition-all shadow-2xs text-left hover:border-[#168447]/30 hover:shadow-md"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm sm:text-base font-bold text-[#142338] hover:text-[#168447] transition-colors cursor-pointer group"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#168447] border-[#168447] text-white rotate-180' : 'bg-[#FAF9F5] border-[#E5E8E5] text-[#5A6A6A]'}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 pt-1 text-xs text-[#5A6A6A] leading-relaxed border-t border-[#F0F2F0]">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
