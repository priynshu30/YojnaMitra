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
import HowItWorks from '../../components/HowItWorks/HowItWorks';
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

      {/* 5. 🌟 3 Simple Steps to Discover Your Schemes (How It Works) */}
      <HowItWorks />

      {/* 6. Digital India Portals */}
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
