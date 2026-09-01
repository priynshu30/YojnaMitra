import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TICKER_ITEMS = [
  {
    id: 1,
    isNew: true,
    schemeName: 'पीएम किसान सम्मान निधि',
    titleHi: '18वीं किस्त का डीबीटी हस्तांतरण: पात्र किसान तुरंत ई-केवाईसी व आधार सीडिंग पूर्ण करें।',
    titleEn: '18th Installment DBT Transfer: Farmers must complete mandatory e-KYC & Aadhaar linking.',
    link: '/schemes/pm-kisan-samman-nidhi'
  },
  {
    id: 2,
    isNew: true,
    schemeName: 'आयुष्मान भारत (PM-JAY)',
    titleHi: '70 वर्ष व उससे अधिक आयु के सभी वरिष्ठ नागरिकों को ₹5 लाख का मुफ्त कैशलेस स्वास्थ्य सुरक्षा कवर।',
    titleEn: 'Universal ₹5 Lakh free cashless healthcare cover extended to all citizens aged 70+.',
    link: '/schemes/ayushman-bharat-pmjay-health'
  },
  {
    id: 3,
    isNew: true,
    schemeName: 'पीएम सूर्य घर मुफ्त बिजली',
    titleHi: 'छत पर सोलर पैनल लगाएं: 300 यूनिट तक मुफ्त बिजली एवं बैंक खाते में ₹78,000 की सीधी सब्सिडी।',
    titleEn: 'Rooftop Solar Portal Open: Up to 300 units free power & ₹78,000 direct bank subsidy.',
    link: '/schemes/pm-surya-ghar-muft-bijli-yojana'
  },
  {
    id: 4,
    isNew: false,
    schemeName: 'राष्ट्रीय छात्रवृत्ति (NSP)',
    titleHi: 'पोस्ट-मैट्रिक व उच्च शिक्षा छात्रवृत्ति के लिए ऑनलाइन आवेदन सत्र सक्रिय।',
    titleEn: 'National Scholarship Portal: Online applications open for Post-Matric higher studies.',
    link: '/schemes/nsp-post-matric-scholarship'
  },
  {
    id: 5,
    isNew: false,
    schemeName: 'पीएम मुद्रा योजना',
    titleHi: 'छोटे व्यवसायों व दुकानदारों के लिए बिना किसी गारंटी के ₹50,000 से ₹10 लाख तक का सस्ता ऋण।',
    titleEn: 'Collateral-free enterprise credit up to ₹10 Lakh for small businesses & self-employed.',
    link: '/schemes/pm-mudra-yojana-business-loan'
  },
  {
    id: 6,
    isNew: false,
    schemeName: 'सुकन्या समृद्धि योजना',
    titleHi: 'बालिकाओं के भविष्य हेतु 8.2% की उच्चतम सुरक्षित ब्याज दर व पूर्ण आयकर छूट (80C)।',
    titleEn: 'Small savings for girl child with 8.2% interest rate & 100% tax exemption.',
    link: '/schemes/sukanya-samriddhi-yojana'
  },
  {
    id: 7,
    isNew: true,
    schemeName: 'नागरिक सहायता',
    titleHi: '2-मिनट पात्रता कैलकुलेटर: अपनी उम्र व आय के आधार पर योग्य सरकारी योजनाओं की सूची देखें।',
    titleEn: '2-Min Eligibility Tool: Discover all welfare programs personalized for your family profile.',
    link: '/eligibility'
  }
];

const MarqueeTicker = () => {
  const { lang } = useLanguage();

  return (
    <div className="w-full bg-[#FFFDF5] border-y border-[#E6DBBE] text-[#1E293B] overflow-hidden select-none relative shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      
      {/* 🇮🇳 Micro Tricolor Top Line Accent */}
      <div className="h-[2px] w-full flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* 📢 Left Official Badge: ताज़ा समाचार / What's New */}
        <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#991B1B] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-sm">
          <Megaphone className="w-3.5 h-3.5 text-[#FDE047] animate-pulse" />
          <span className="font-extrabold tracking-wide">
            {lang === 'hi' ? 'ताज़ा समाचार' : "WHAT'S NEW"}
          </span>
        </div>

        {/* Marquee Track with Smooth Continuous Motion */}
        <div className="relative flex-1 overflow-hidden py-2 mask-linear-marquee">
          <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
            
            {/* Set 1 */}
            {TICKER_ITEMS.map((item, idx) => (
              <Link
                key={`item-1-${item.id || idx}`}
                to={item.link}
                className="inline-flex items-center gap-2 text-xs text-[#1E293B] hover:text-[#168447] transition-colors group cursor-pointer"
              >
                {/* NEW flashing badge */}
                {item.isNew && (
                  <span className="px-1.5 py-0.2 rounded-xs bg-[#DC2626] text-white text-[9px] font-black uppercase tracking-wider animate-pulse shadow-2xs">
                    {lang === 'hi' ? 'नया' : 'NEW'}
                  </span>
                )}

                {/* Scheme Tag */}
                <span className="font-bold text-[#168447] bg-[#EAF6EE] px-2 py-0.5 rounded-md border border-[#168447]/20 text-[11px]">
                  {item.schemeName}
                </span>

                {/* Announcement text */}
                <span className="font-medium text-[#1E293B] group-hover:underline underline-offset-2">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </span>

                <span className="text-[#C2410C] font-bold text-xs ml-1">✦</span>
              </Link>
            ))}

            {/* Set 2 (for seamless loop) */}
            {TICKER_ITEMS.map((item, idx) => (
              <Link
                key={`item-2-${item.id || idx}`}
                to={item.link}
                className="inline-flex items-center gap-2 text-xs text-[#1E293B] hover:text-[#168447] transition-colors group cursor-pointer"
              >
                {item.isNew && (
                  <span className="px-1.5 py-0.2 rounded-xs bg-[#DC2626] text-white text-[9px] font-black uppercase tracking-wider animate-pulse shadow-2xs">
                    {lang === 'hi' ? 'नया' : 'NEW'}
                  </span>
                )}

                <span className="font-bold text-[#168447] bg-[#EAF6EE] px-2 py-0.5 rounded-md border border-[#168447]/20 text-[11px]">
                  {item.schemeName}
                </span>

                <span className="font-medium text-[#1E293B] group-hover:underline underline-offset-2">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </span>

                <span className="text-[#C2410C] font-bold text-xs ml-1">✦</span>
              </Link>
            ))}

          </div>
        </div>

        {/* Right Archive / View All Link */}
        <Link
          to="/schemes"
          className="hidden md:flex items-center gap-1 px-3 py-2 bg-[#FFF3D6] hover:bg-[#FFE8B3] text-[#9A3412] text-xs font-bold shrink-0 transition-colors border-l border-[#E6DBBE]"
        >
          <span>{lang === 'hi' ? 'सभी घोषणाएँ' : 'View All'}</span>
          <ArrowRight className="w-3 h-3 text-[#9A3412]" />
        </Link>

      </div>
    </div>
  );
};

export default MarqueeTicker;
