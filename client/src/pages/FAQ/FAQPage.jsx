import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQPage = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState('');

  const faqItems = [
    {
      q: lang === 'hi' ? 'YojnaMitra क्या है और यह कैसे मदद करता है?' : 'What is YojnaMitra and how does it help?',
      a: lang === 'hi' ? 'YojnaMitra एक स्वतंत्र डिजिटल मंच है जो नागरिकों को केंद्र और राज्य सरकारों की छात्रवृत्ति, पेंशन, स्वास्थ्य बीमा, कृषि सहायता और व्यवसाय ऋण जैसी विभिन्न योजनाओं को खोजने और उनकी पात्रता समझने में मदद करता है।' : 'YojnaMitra is an independent platform that helps Indian citizens discover, evaluate eligibility, and apply for government welfare schemes.'
    },
    {
      q: lang === 'hi' ? 'क्या YojnaMitra कोई सरकारी संस्था है?' : 'Is YojnaMitra affiliated with the Government of India?',
      a: lang === 'hi' ? 'नहीं, YojnaMitra एक स्वतंत्र सिविक-टेक सूचना मंच है और किसी भी सरकारी विभाग से संबद्ध नहीं है। सभी अंतिम आवेदन और स्वीकृति संबंधित सरकारी मंत्रालयों द्वारा ही दी जाती है।' : 'No, YojnaMitra is an independent informational initiative. We are NOT a government portal.'
    },
    {
      q: lang === 'hi' ? 'योजनाओं की पात्रता का निर्धारण कैसे किया जाता है?' : 'How does the Eligibility Engine compute results?',
      a: lang === 'hi' ? 'हमारा रूल्स इंजन आपके द्वारा दर्ज की गई आयु, राज्य, पारिवारिक आय, सामाजिक श्रेणी और व्यवसाय के मानदंडों की तुलना आधिकारिक योजना दिशानिर्देशों से करता है और आपको संभावित रूप से पात्र योजनाएँ दिखाता है।' : 'Our rules engine cross-matches your demographic inputs with active criteria defined in verified scheme documentation.'
    },
    {
      q: lang === 'hi' ? 'क्या मुझे आवेदन करने के लिए शुल्क देना होगा?' : 'Is there any fee to apply for government schemes?',
      a: lang === 'hi' ? 'अधिकांश सरकारी कल्याणकारी योजनाओं के आवेदन पत्र आधिकारिक वेबसाइटों पर पूर्णतः निःशुल्क होते हैं। यदि कोई व्यक्ति आपसे योजना दिलाने के नाम पर पैसे मांगे तो वह धोखाधड़ी हो सकती है।' : 'Most government welfare registrations on official .gov.in portals are completely free of cost.'
    },
    {
      q: lang === 'hi' ? 'मैं अपनी पसंद की योजना कैसे सुरक्षित (Bookmark) कर सकता हूँ?' : 'How can I bookmark schemes and track documents?',
      a: lang === 'hi' ? 'किसी भी योजना कार्ड या विवरण पृष्ठ पर दिए गए बुकमार्क आइकन (Bookmark) पर क्लिक करके आप योजना सुरक्षित कर सकते हैं और दस्तावेज़ चेकलिस्ट का उपयोग कर सकते हैं।' : 'Click the bookmark icon on any scheme card to save it to your profile and track required documentation.'
    }
  ];

  const filtered = faqItems.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'सहायता केंद्र' : 'Help & FAQ'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-navy">
          {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-xs sm:text-sm text-brand-textMuted max-w-lg mx-auto">
          {lang === 'hi'
            ? 'योजनाओं, पात्रता और आधिकारिक आवेदन प्रक्रियाओं से जुड़े सामान्य प्रश्नों के उत्तर।'
            : 'Find answers to common questions about welfare schemes and eligibility.'}
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg mx-auto">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-textMuted" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === 'hi' ? 'प्रश्न खोजें...' : 'Search question...'}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm focus:outline-none focus:border-brand-green"
        />
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {filtered.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-brand-navy hover:text-brand-green transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-textMuted shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-green' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-textMuted leading-relaxed border-t border-brand-border/40">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FAQPage;
