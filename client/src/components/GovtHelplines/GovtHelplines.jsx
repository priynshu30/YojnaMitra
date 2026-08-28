import React from 'react';
import { PhoneCall, ShieldAlert, HeartHandshake, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const GovtHelplines = () => {
  const { lang } = useLanguage();

  const helplines = [
    {
      number: '14555',
      nameHi: 'आयुष्मान भारत (NHA)',
      nameEn: 'Ayushman Bharat (NHA)',
      descHi: 'मुफ्त इलाज एवं अस्पताल सहायता',
      descEn: 'Hospitalization & Health cover',
      badge: '24x7 Toll-Free',
      color: '#168447',
    },
    {
      number: '1930',
      nameHi: 'राष्ट्रीय साइबर वित्तीय सुरक्षा',
      nameEn: 'National Cyber Financial Crime',
      descHi: 'ऑनलाइन बैंकिंग धोखाधड़ी पर तुरंत कॉल करें',
      descEn: 'Financial fraud & cyber safety',
      badge: 'Urgent Helpline',
      color: '#DC2626',
    },
    {
      number: '1800-115-526',
      nameHi: 'PM-किसान किसान कॉल सेंटर',
      nameEn: 'PM-Kisan Farmer Center',
      descHi: 'किस्त, बैंक खाता व ईकेवाईसी सहायता',
      descEn: 'Installment & KYC grievance',
      badge: 'Kisan Helpline',
      color: '#D97706',
    },
    {
      number: '1902',
      nameHi: 'DBT भारत (प्रत्यक्ष लाभ अंतरण)',
      nameEn: 'DBT Bharat Helpdesk',
      descHi: 'सब्सिडी व सरकारी पैसा न आने पर शिकायत',
      descEn: 'Direct Benefit Transfer support',
      badge: 'DBT Portal',
      color: '#0284C7',
    },
    {
      number: '1098',
      nameHi: 'राष्ट्रीय चाइल्डलाइन (Childline)',
      nameEn: 'National Childline',
      descHi: 'बाल सुरक्षा, छात्रवृत्ति व आपातकालीन मदद',
      descEn: 'Child safety & emergency aid',
      badge: '24x7 Emergency',
      color: '#7C3AED',
    },
    {
      number: '181',
      nameHi: 'महिला हेल्पलाइन (Women Line)',
      nameEn: 'Women in Distress Helpline',
      descHi: '24 घंटे परामर्श, कानूनी सहायता व सुरक्षा',
      descEn: 'Counseling & emergency assistance',
      badge: 'Women Welfare',
      color: '#DB2777',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E5E8E5] shadow-xs">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-2 border border-red-200">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'आधिकारिक सरकारी टोल-फ्री हेल्पलाइन' : 'Official National Helplines'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#142338]">
              {lang === 'hi' ? 'समस्या या आपातकाल में तुरंत संपर्क करें' : 'Emergency & Scheme Support Helplines'}
            </h2>
            <p className="text-sm text-[#5A6A6A] mt-1">
              {lang === 'hi'
                ? 'भारत सरकार एवं संबंधित मंत्रालयों द्वारा 24x7 संचालित आधिकारिक निःशुल्क टेलीफोन नंबर।'
                : 'Direct toll-free national numbers for government benefits, cyber safety, and emergency aid.'}
            </p>
          </div>
        </div>

        {/* Helplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {helplines.map((item, i) => (
            <a
              key={i}
              href={`tel:${item.number.replace(/-/g, '')}`}
              className="bg-[#FAF9F5] hover:bg-[#EAF6EE] p-5 rounded-2xl border border-[#E5E8E5] hover:border-[#168447] transition-all duration-200 group flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-[#E5E8E5] text-[#142338]">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#142338] group-hover:text-[#168447] transition-colors tracking-tight pt-1">
                  {item.number}
                </div>
                <div className="text-xs font-bold text-[#142338]">
                  {lang === 'hi' ? item.nameHi : item.nameEn}
                </div>
                <div className="text-[11px] text-[#5A6A6A] leading-tight">
                  {lang === 'hi' ? item.descHi : item.descEn}
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-[#168447] text-[#142338] group-hover:text-white flex items-center justify-center shrink-0 border border-[#E5E8E5] group-hover:border-[#168447] transition-all shadow-2xs">
                <Phone className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GovtHelplines;
