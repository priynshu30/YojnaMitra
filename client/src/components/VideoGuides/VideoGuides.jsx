import React, { useState } from 'react';
import { Play, X, Clock, ShieldCheck, Sparkles, ExternalLink, Video } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const VideoGuides = () => {
  const { lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);

  const guides = [
    {
      id: 'pm-kisan',
      titleHi: 'PM किसान सम्मान निधि: eKYC व किस्त स्टेटस कैसे देखें?',
      titleEn: 'PM-Kisan: How to complete eKYC & check installment status',
      duration: '2:45 min',
      ministryHi: 'कृषि एवं किसान कल्याण मंत्रालय',
      ministryEn: 'Ministry of Agriculture & Farmers Welfare',
      thumbnail: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'dQw4w9WgXcQ', // or embeddable tutorial
      stepsHi: [
        'pmkisan.gov.in पोर्टल पर जाएं',
        'Farmer Corner में e-KYC पर क्लिक करें',
        'आधार नंबर दर्ज कर OTP सत्यापित करें',
      ],
      stepsEn: [
        'Visit official pmkisan.gov.in portal',
        'Click on e-KYC in Farmers Corner',
        'Enter Aadhaar number and verify via OTP',
      ],
    },
    {
      id: 'ayushman',
      titleHi: 'आयुष्मान कार्ड (₹5 लाख मुफ्त इलाज): ऑनलाइन कैसे डाउनलोड करें?',
      titleEn: 'Ayushman Card (₹5 Lakh Free Treatment): Download Online',
      duration: '3:10 min',
      ministryHi: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
      ministryEn: 'Ministry of Health & Family Welfare',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'dQw4w9WgXcQ',
      stepsHi: [
        'beneficiary.nha.gov.in पर लॉगिन करें',
        'मोबाइल नंबर और OTP से ऑथेंटिकेट करें',
        'परिवार सूची में नाम खोजकर कार्ड डाउनलोड करें',
      ],
      stepsEn: [
        'Login at beneficiary.nha.gov.in',
        'Authenticate with Mobile & Aadhaar OTP',
        'Find family member name and download card',
      ],
    },
    {
      id: 'digilocker',
      titleHi: 'DigiLocker: सरकारी प्रमाणपत्र व दस्तावेज डिजिटल कैसे रखें?',
      titleEn: 'DigiLocker: Storing & verifying official certificates digitally',
      duration: '2:15 min',
      ministryHi: 'इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी मंत्रालय (MeitY)',
      ministryEn: 'Ministry of Electronics & IT (MeitY)',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'dQw4w9WgXcQ',
      stepsHi: [
        'digilocker.gov.in ऐप या वेबसाइट खोलें',
        'आधार से साइन अप या लॉगिन करें',
        'राशन कार्ड, मार्कशीट, जाति प्रमाण पत्र फेच करें',
      ],
      stepsEn: [
        'Open digilocker.gov.in app or website',
        'Sign up or login via Aadhaar number',
        'Fetch Ration Card, Marks Sheets, Domicile',
      ],
    },
    {
      id: 'scholarship',
      titleHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP): ऑनलाइन आवेदन प्रक्रिया',
      titleEn: 'National Scholarship Portal (NSP): Step-by-Step Application',
      duration: '3:40 min',
      ministryHi: 'शिक्षा मंत्रालय, भारत सरकार',
      ministryEn: 'Ministry of Education, Govt of India',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      youtubeId: 'dQw4w9WgXcQ',
      stepsHi: [
        'scholarships.gov.in पर नया रजिस्ट्रेशन करें',
        'शैक्षणिक व बैंक विवरण ध्यानपूर्वक भरें',
        'संस्थान सत्यापन के बाद स्कॉलरशिप सीधे खाते में',
      ],
      stepsEn: [
        'Register fresh on scholarships.gov.in',
        'Fill academic and bank account details',
        'Direct DBT disbursement post-verification',
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-wider mb-2">
            <Video className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'डिजिटल सहायता एवं ट्यूटोरियल' : 'Video Guides & Tutorials'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#142338]">
            {lang === 'hi' ? 'वीडियो देखकर समझें आवेदन की आसान प्रक्रिया' : 'Understand Official Application Steps via Videos'}
          </h2>
          <p className="text-sm text-[#5A6A6A] mt-1">
            {lang === 'hi'
              ? 'बिना किसी साइबर कैफे या दलाल के घर बैठे अपने मोबाइल से योजनाओं का लाभ उठाने की सरल गाइड।'
              : 'Step-by-step verified video walkthroughs for hassle-free online applications.'}
          </p>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-2xl border border-[#E5E8E5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail with Play Overlay */}
              <div
                onClick={() => setActiveVideo(guide)}
                className="relative aspect-video w-full bg-slate-900 cursor-pointer overflow-hidden"
              >
                <img
                  src={guide.thumbnail}
                  alt={lang === 'hi' ? guide.titleHi : guide.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#168447]" />
                  <span>{guide.duration}</span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-200">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5">
                <div className="text-[11px] font-bold text-[#168447] mb-1.5 leading-tight">
                  {lang === 'hi' ? guide.ministryHi : guide.ministryEn}
                </div>
                <h3 className="text-sm font-bold text-[#142338] leading-snug group-hover:text-[#168447] transition-colors">
                  {lang === 'hi' ? guide.titleHi : guide.titleEn}
                </h3>

                {/* Steps Mini List */}
                <ul className="mt-3 space-y-1.5 pt-3 border-t border-[#E5E8E5] text-[11px] text-[#5A6A6A]">
                  {(lang === 'hi' ? guide.stepsHi : guide.stepsEn).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#EAF6EE] text-[#168447] font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="line-clamp-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 sm:p-5 pt-0">
              <button
                type="button"
                onClick={() => setActiveVideo(guide)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF9F5] group-hover:bg-[#168447] text-[#142338] group-hover:text-white border border-[#E5E8E5] group-hover:border-[#168447] text-xs font-bold transition-all duration-200 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'hi' ? 'गाइड देखें' : 'Watch Guide'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E8E5] bg-[#FAF9F5]">
              <div>
                <span className="text-xs font-bold text-[#168447] block">
                  {lang === 'hi' ? activeVideo.ministryHi : activeVideo.ministryEn}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#142338]">
                  {lang === 'hi' ? activeVideo.titleHi : activeVideo.titleEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#E5E8E5] text-[#5A6A6A] hover:text-[#142338] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content - Player / Guidance */}
            <div className="p-6 space-y-4">
              <div className="aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner flex items-center justify-center">
                <img
                  src={activeVideo.thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-xl mb-3">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h4 className="text-lg font-bold">
                    {lang === 'hi' ? activeVideo.titleHi : activeVideo.titleEn}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    {lang === 'hi' ? 'अवधि: ' + activeVideo.duration : 'Duration: ' + activeVideo.duration}
                  </p>
                </div>
              </div>

              {/* Key Steps Highlight */}
              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#E5E8E5]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#168447] mb-2">
                  {lang === 'hi' ? 'मुख्य आवेदन चरण (Step-by-Step Summary):' : 'Key Application Steps:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#142338]">
                  {(lang === 'hi' ? activeVideo.stepsHi : activeVideo.stepsEn).map((st, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-[#E5E8E5]">
                      <div className="font-bold text-[#168447] mb-0.5">चरण {idx + 1}</div>
                      <div className="text-[#5A6A6A] leading-tight">{st}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#FAF9F5] border-t border-[#E5E8E5] flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="px-5 py-2 rounded-xl bg-[#168447] text-white text-xs font-bold hover:bg-[#126338] transition-all cursor-pointer shadow-xs"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGuides;
