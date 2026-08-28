import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-[#E5E8E5] mt-14 relative">
      
      {/* 🇮🇳 Top Tricolor Band (Full Width Edge-to-Edge) */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* ── 3-Column Top Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-3.5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#168447] flex items-center justify-center text-white shadow-xs">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#142338]">
                Yojna<span className="text-[#168447]">Mitra</span>
              </span>
            </div>

            <p className="text-xs text-[#5A6A6A] leading-relaxed max-w-md font-medium">
              {lang === 'hi'
                ? 'भारतीय नागरिकों के लिए केंद्र एवं राज्य सरकारों की कल्याणकारी योजनाओं की सटीक जानकारी और आधिकारिक आवेदन लिंक। हमारा उद्देश्य पारदर्शी, सरल और विश्वसनीय सेवा प्रदान करना है।'
                : 'Providing authentic information and direct application links for central and state welfare schemes to Indian citizens. Our mission is transparent and reliable service.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold border border-[#168447]/20 shadow-2xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'hi' ? '100% स्वतः एवं निशुल्क नागरिक मंच' : '100% Free Civic Platform'}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="sm:col-span-1 lg:col-span-4 space-y-3 text-left">
            <h4 className="text-sm font-black text-[#142338]">
              {lang === 'hi' ? 'मुख्य नेविगेशन' : 'Main Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-[#5A6A6A]">
              <div className="space-y-2">
                <div>
                  <Link to="/schemes" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'सभी योजनाएं' : 'All Schemes'}</span>
                  </Link>
                </div>
                <div>
                  <Link to="/schemes?level=Central" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'केंद्र सरकार योजनाएं' : 'Central Schemes'}</span>
                  </Link>
                </div>
                <div>
                  <Link to="/schemes?level=State" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'राज्य सरकार योजनाएं' : 'State Schemes'}</span>
                  </Link>
                </div>
                <div>
                  <Link to="/schemes" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'सहयोगी नई योजनाएं' : 'New Schemes'}</span>
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <Link to="/eligibility" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'पात्रता कैलकुलेटर' : 'Eligibility Calculator'}</span>
                  </Link>
                </div>
                <div>
                  <Link to="/schemes" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'राज्य जानकारी' : 'State Details'}</span>
                  </Link>
                </div>
                <div>
                  <Link to="/about" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                    <span className="text-[#168447] font-bold">•</span>
                    <span>{lang === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Help & Admin Portal (3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-black text-[#142338]">
              {lang === 'hi' ? 'सहायता' : 'Help & Support'}
            </h4>
            <div className="space-y-3">
              <Link to="/faq" className="text-xs font-medium text-[#5A6A6A] hover:text-[#168447] transition-colors flex items-center gap-1.5">
                <span className="text-[#168447] font-bold">•</span>
                <span>{lang === 'hi' ? 'सामान्य प्रश्न (FAQ)' : 'FAQ'}</span>
              </Link>

              <div className="pt-1">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9F5] hover:bg-[#EAF6EE] border border-[#E5E8E5] text-[#142338] hover:text-[#168447] text-xs font-bold transition-all shadow-2xs hover:shadow-xs"
                >
                  <span>🔒</span>
                  <span>{lang === 'hi' ? 'एडमिन पोर्टल' : 'Admin Portal'}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Compact Disclaimer Box ── */}
        <div className="px-3 sm:px-4 py-3 rounded-2xl bg-[#FAF9F5] border border-[#E5E8E5] text-xs text-[#5A6A6A] leading-relaxed text-left flex items-start sm:items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>
            {lang === 'hi'
              ? 'YojnaMitra एक स्वतंत्र शैक्षिक-टेक सूचना मंच है। अंतिम पात्रता निर्धारण एवं लाभ स्वीकृति संबंधित सरकारी विभागों द्वारा ही की जाती है।'
              : 'YojnaMitra is an independent educational-tech information platform. Final eligibility and approval are decided by the respective government departments.'}
          </span>
        </div>

        {/* ── Bottom Bar: Copyright & Legal Badges ── */}
        <div className="pt-4 border-t border-[#F0F2F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A6A6A]">
          <div>
            © 2026 YojnaMitra • {lang === 'hi' ? 'सर्वाधिकार सुरक्षित' : 'All rights reserved'} (28 Aug 2026)
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'गोपनीयता' : 'Privacy'}
            </Link>
            <span className="text-[#D1D5DB]">|</span>
            <Link to="/about" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'नियम व शर्तें' : 'Terms'}
            </Link>
            <span className="text-[#D1D5DB]">|</span>
            <Link to="/faq" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'अस्वीकरण' : 'Disclaimer'}
            </Link>
            <span className="ml-1 text-[#168447] font-bold bg-[#EAF6EE] border border-[#168447]/20 px-2.5 py-0.5 rounded-md text-[11px] inline-flex items-center gap-1">
              <span>✓</span> Accessible
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
