import React from 'react';
import { ShieldCheck, Heart, Users, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AboutPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy">
          {lang === 'hi' ? 'YojnaMitra — आपका साथी, आपकी योजनाएँ' : 'YojnaMitra — Your Trusted Welfare Companion'}
        </h1>
        <p className="text-sm sm:text-base text-brand-textMuted max-w-2xl mx-auto leading-relaxed">
          {lang === 'hi'
            ? 'नागरिकों को उनके अधिकारों और केंद्र व राज्य सरकार की कल्याणकारी योजनाओं से जोड़ने वाला एक स्वतंत्र व पारदर्शी सिविक-टेक मंच।'
            : 'An independent, transparent civic-tech platform connecting citizens with welfare entitlements.'}
        </p>
      </div>

      {/* Core Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-greenLight text-brand-green flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? 'सटीक खोज' : 'Targeted Discovery'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'जटिल सरकारी नियमों को आसान बनाकर आपकी आयु, राज्य, व्यवसाय और आय के आधार पर सटीक योजनाएँ खोजना।'
              : 'Translating complex eligibility parameters into simple demographic matching for every household.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-greenLight text-brand-green flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? '100% प्रामाणिक स्रोत' : '100% Verified Sources'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'केवल आधिकारिक सरकारी पोर्टलों (.gov.in, .nic.in) और गजट अधिसूचनाओं से सत्यापित जानकारी।'
              : 'Zero clickbait or fake promises. Every scheme links directly to official ministry sources.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-soft space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-greenLight text-brand-green flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? 'मध्यस्थ-मुक्त सहायता' : 'Zero Middlemen'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'सीधे नागरिक को सशक्त बनाना ताकि वे बिना किसी दलाल या अनावश्यक शुल्क के स्वयं आवेदन कर सकें।'
              : 'Directly empowering citizens to understand documents and apply freely on authentic portals.'}
          </p>
        </div>
      </div>

      {/* Independent Platform Disclaimer Box */}
      <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card space-y-4">
        <h2 className="text-lg font-bold text-brand-navy flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-green" />
          <span>{lang === 'hi' ? 'महत्वपूर्ण स्वतंत्र मंच घोषणा' : 'Independent Platform Statement'}</span>
        </h2>
        <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
          {t.common.disclaimer}
        </p>
        <div className="pt-2 text-xs text-brand-navy font-semibold">
          {lang === 'hi'
            ? 'हम किसी भी नागरिक से किसी भी सेवा के लिए पैसे नहीं मांगते। कृपया सावधान रहें।'
            : 'YojnaMitra never asks for payment or sensitive banking credentials.'}
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
