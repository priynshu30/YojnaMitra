import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, ExternalLink, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-[#E5E8E5] mt-14 relative">
      
      {/* 🇮🇳 Top Tricolor Band (Full Width Edge-to-Edge) */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        
        {/* ── 4-Column Responsive Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Mission (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="YojanaMitra Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-[#5A6A6A] leading-relaxed max-w-sm font-medium">
              {lang === 'hi'
                ? 'भारतीय नागरिकों के लिए केंद्र एवं राज्य सरकारों की कल्याणकारी योजनाओं की सटीक जानकारी, पात्रता जांच और आधिकारिक आवेदन का विश्वसनीय मंच।'
                : 'Your trusted digital discovery companion for Central and State Government welfare schemes, eligibility rules, and official application portals.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold border border-[#168447]/20 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#168447]" />
              <span>{lang === 'hi' ? '100% निःशुल्क नागरिक सूचना सेवा' : '100% Free Public Information Service'}</span>
            </div>
          </div>

          {/* Column 2: Schemes Directory (3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-black text-[#142338]">
              {lang === 'hi' ? 'महत्वपूर्ण योजनाएं' : 'Welfare Schemes'}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#5A6A6A]">
              <li>
                <Link to="/schemes" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? 'सभी सरकारी योजनाएँ' : 'All Welfare Schemes'}</span>
                </Link>
              </li>
              <li>
                <Link to="/schemes?level=Central" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? 'केंद्र सरकार की योजनाएँ' : 'Central Govt Schemes'}</span>
                </Link>
              </li>
              <li>
                <Link to="/schemes?level=State" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? 'राज्य सरकार की योजनाएँ' : 'State Govt Schemes'}</span>
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="hover:text-[#168447] transition-colors flex items-center gap-1.5 font-bold text-[#168447]">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? '2-मिनट पात्रता कैलकुलेटर' : '2-Min Eligibility Checker'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Services & Tools (2 cols) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 text-left">
            <h4 className="text-sm font-black text-[#142338]">
              {lang === 'hi' ? 'नागरिक सेवाएँ' : 'Citizen Tools'}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#5A6A6A]">
              <li>
                <Link to="/pdf-tools" className="hover:text-[#168447] transition-colors flex items-center gap-1.5 font-semibold text-[#168447]">
                  <span>📄</span>
                  <span>{lang === 'hi' ? 'दस्तावेज़ व PDF टूल्स' : 'PDF & Doc Tools'}</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? 'सामान्य प्रश्न (FAQ)' : 'Help & FAQs'}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#168447] transition-colors flex items-center gap-1.5">
                  <span className="text-[#168447] font-bold">•</span>
                  <span>{lang === 'hi' ? 'हमारे बारे में' : 'About Us'}</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#168447] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#168447] font-bold">•</span>
                  <span>India.gov.in</span>
                  <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: National Helplines (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-black text-[#142338] flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-[#168447]" />
              <span>{lang === 'hi' ? 'राष्ट्रीय हेल्पलाइन नंबर' : 'National Helplines'}</span>
            </h4>
            <div className="space-y-2 text-xs text-[#5A6A6A]">
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F5] border border-[#E5E8E5]">
                <span className="font-medium">{lang === 'hi' ? 'किसान कॉल सेंटर' : 'Kisan Call Centre'}</span>
                <span className="font-bold text-[#168447]">1800-180-1551</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F5] border border-[#E5E8E5]">
                <span className="font-medium">{lang === 'hi' ? 'महिला हेल्पलाइन' : 'Women Helpline'}</span>
                <span className="font-bold text-[#168447]">181 / 1090</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F5] border border-[#E5E8E5]">
                <span className="font-medium">{lang === 'hi' ? 'राष्ट्रीय आपातकालीन' : 'Emergency'}</span>
                <span className="font-bold text-[#168447]">112</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Compact Disclaimer Box ── */}
        <div className="px-4 py-3 rounded-2xl bg-[#FAF9F5] border border-[#E5E8E5] text-xs text-[#5A6A6A] leading-relaxed text-left flex items-start sm:items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>
            {lang === 'hi'
              ? 'अस्वीकरण: YojnaMitra एक स्वतंत्र नागरिक सूचना मार्गदर्शन मंच है और किसी भी सरकारी निकाय से संबद्ध नहीं है। योजनाओं की अंतिम पात्रता एवं स्वीकृति संबंधित मंत्रालयों व विभागों द्वारा की जाती है।'
              : 'Disclaimer: YojnaMitra is an independent citizen welfare information platform and is not affiliated with any government authority. Final eligibility decisions rest solely with official government departments.'}
          </span>
        </div>

        {/* ── Bottom Bar: Copyright & Legal Links ── */}
        <div className="pt-4 border-t border-[#F0F2F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A6A6A]">
          <div>
            © {new Date().getFullYear()} YojanaMitra • {lang === 'hi' ? 'सर्वाधिकार सुरक्षित' : 'All Rights Reserved'}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </Link>
            <span className="text-[#D1D5DB]">|</span>
            <Link to="/about" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'नियम व शर्तें' : 'Terms of Service'}
            </Link>
            <span className="text-[#D1D5DB]">|</span>
            <Link to="/faq" className="hover:text-[#168447] transition-colors">
              {lang === 'hi' ? 'अस्वीकरण' : 'Disclaimer'}
            </Link>
            <span className="ml-1 text-[#168447] font-bold bg-[#EAF6EE] border border-[#168447]/20 px-2.5 py-0.5 rounded-md text-[11px] inline-flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Official Data</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
