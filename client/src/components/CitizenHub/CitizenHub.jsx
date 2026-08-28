import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame, MapPin, Layers, Video, Star,
  Search, ArrowRight, Play, Phone,
  ChevronRight, Bookmark, X, Calendar
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SchemeCard from '../SchemeCard/SchemeCard';
import CategoryCard from '../CategoryCard/CategoryCard';

const CitizenHub = ({ categories = [], recentSchemes = [] }) => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schemes');
  const [stateSearch, setStateSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  const tabs = [
    { id: 'schemes',     labelHi: 'लोकप्रिय योजनाएँ', labelEn: 'Popular Schemes', icon: Flame,    badge: 'Top' },
    { id: 'states',      labelHi: 'राज्य अनुसार',       labelEn: 'By State',        icon: MapPin,   badge: 'All States' },
    { id: 'categories',  labelHi: 'श्रेणियाँ',          labelEn: 'Categories',      icon: Layers,   badge: `${categories.length || 8}` },
    { id: 'videos',      labelHi: 'वीडियो गाइड',        labelEn: 'Video Tutorials', icon: Video,    badge: 'New' },
    { id: 'highlights',  labelHi: 'हाइलाइट्स',          labelEn: 'Highlights',      icon: Star,     badge: 'Add+' },
  ];

  const statesData = [
    { nameHi: 'उत्तर प्रदेश', nameEn: 'Uttar Pradesh', code: 'UP', schemes: 86, zone: 'north', emblem: '🏛️' },
    { nameHi: 'बिहार', nameEn: 'Bihar', code: 'BR', schemes: 72, zone: 'east', emblem: '🌳' },
    { nameHi: 'मध्य प्रदेश', nameEn: 'Madhya Pradesh', code: 'MP', schemes: 68, zone: 'central', emblem: '🌾' },
    { nameHi: 'राजस्थान', nameEn: 'Rajasthan', code: 'RJ', schemes: 74, zone: 'north', emblem: '🏰' },
    { nameHi: 'महाराष्ट्र', nameEn: 'Maharashtra', code: 'MH', schemes: 82, zone: 'west', emblem: '🏭' },
    { nameHi: 'गुजरात', nameEn: 'Gujarat', code: 'GJ', schemes: 64, zone: 'west', emblem: '☀️' },
    { nameHi: 'हरियाणा', nameEn: 'Haryana', code: 'HR', schemes: 54, zone: 'north', emblem: '🚜' },
    { nameHi: 'पंजाब', nameEn: 'Punjab', code: 'PB', schemes: 52, zone: 'north', emblem: '🌾' },
    { nameHi: 'पश्चिम बंगाल', nameEn: 'West Bengal', code: 'WB', schemes: 62, zone: 'east', emblem: '🚢' },
    { nameHi: 'झारखंड', nameEn: 'Jharkhand', code: 'JH', schemes: 48, zone: 'east', emblem: '⛏️' },
    { nameHi: 'छत्तीसगढ़', nameEn: 'Chhattisgarh', code: 'CG', schemes: 45, zone: 'central', emblem: '🌿' },
    { nameHi: 'कर्नाटक', nameEn: 'Karnataka', code: 'KA', schemes: 58, zone: 'south', emblem: '💻' },
    { nameHi: 'तमिलनाडु', nameEn: 'Tamil Nadu', code: 'TN', schemes: 60, zone: 'south', emblem: '🏛️' },
    { nameHi: 'ओडिशा', nameEn: 'Odisha', code: 'OD', schemes: 51, zone: 'east', emblem: '🌊' },
    { nameHi: 'असम', nameEn: 'Assam', code: 'AS', schemes: 44, zone: 'northeast', emblem: '🫖' },
    { nameHi: 'उत्तराखंड', nameEn: 'Uttarakhand', code: 'UK', schemes: 38, zone: 'north', emblem: '🏔️' },
  ];

  const zones = [
    { id: 'all', labelHi: 'सभी राज्य', labelEn: 'All' },
    { id: 'north', labelHi: 'उत्तर', labelEn: 'North' },
    { id: 'central', labelHi: 'मध्य', labelEn: 'Central' },
    { id: 'east', labelHi: 'पूर्व', labelEn: 'East' },
    { id: 'west', labelHi: 'पश्चिम', labelEn: 'West' },
    { id: 'south', labelHi: 'दक्षिण', labelEn: 'South' },
  ];

  const filteredStates = statesData.filter(s => {
    const matchesSearch = s.nameHi.toLowerCase().includes(stateSearch.toLowerCase()) || s.nameEn.toLowerCase().includes(stateSearch.toLowerCase());
    const matchesZone = selectedZone === 'all' || s.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const videoGuides = [
    {
      id: 'pm-kisan',
      titleHi: 'PM किसान सम्मान निधि: eKYC व किस्त स्टेटस कैसे देखें?',
      titleEn: 'PM-Kisan: How to complete eKYC & check installment status',
      duration: '2:45 min',
      ministry: 'कृषि एवं किसान कल्याण मंत्रालय',
      thumbnail: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=600&q=80',
      steps: ['pmkisan.gov.in पर जाएं', 'e-KYC पर क्लिक करें', 'आधार OTP सत्यापित करें'],
    },
    {
      id: 'ayushman',
      titleHi: 'आयुष्मान कार्ड (₹5 लाख मुफ्त इलाज): ऑनलाइन कैसे डाउनलोड करें?',
      titleEn: 'Ayushman Card (₹5 Lakh Free Treatment): Download Online',
      duration: '3:10 min',
      ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      steps: ['beneficiary.nha.gov.in खोलें', 'मोबाइल OTP से लॉगिन करें', 'कार्ड डाउनलोड करें'],
    },
    {
      id: 'digilocker',
      titleHi: 'DigiLocker: सरकारी प्रमाणपत्र व दस्तावेज डिजिटल कैसे रखें?',
      titleEn: 'DigiLocker: Storing & verifying official certificates digitally',
      duration: '2:15 min',
      ministry: 'इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी मंत्रालय (MeitY)',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      steps: ['digilocker.gov.in ऐप खोलें', 'आधार से साइन अप करें', 'दस्तावेज सुरक्षित रखें'],
    },
    {
      id: 'scholarship',
      titleHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP): ऑनलाइन आवेदन प्रक्रिया',
      titleEn: 'National Scholarship Portal (NSP): Step-by-Step Application',
      duration: '3:40 min',
      ministry: 'शिक्षा मंत्रालय, भारत सरकार',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      steps: ['scholarships.gov.in पर जाएं', 'रजिस्ट्रेशन फॉर्म भरें', 'छात्रवृत्ति खाते में प्राप्त करें'],
    },
  ];

  const helplines = [
    { number: '14555', nameHi: 'आयुष्मान भारत (NHA)', descHi: 'मुफ्त इलाज एवं अस्पताल सहायता', badge: '24x7 Toll-Free', color: '#168447' },
    { number: '1930', nameHi: 'राष्ट्रीय साइबर वित्तीय सुरक्षा', descHi: 'ऑनलाइन बैंकिंग धोखाधड़ी पर तुरंत कॉल करें', badge: 'Urgent', color: '#DC2626' },
    { number: '1800-115-526', nameHi: 'PM-किसान कॉल सेंटर', descHi: 'किस्त, बैंक खाता व ईकेवाईसी सहायता', badge: 'Kisan', color: '#D97706' },
    { number: '1902', nameHi: 'DBT भारत (प्रत्यक्ष लाभ)', descHi: 'सब्सिडी व सरकारी पैसा न आने पर शिकायत', badge: 'DBT', color: '#0284C7' },
    { number: '1098', nameHi: 'राष्ट्रीय चाइल्डलाइन', descHi: 'बाल सुरक्षा, छात्रवृत्ति व आपातकालीन मदद', badge: 'Emergency', color: '#7C3AED' },
    { number: '181', nameHi: 'महिला हेल्पलाइन', descHi: '24 घंटे परामर्श, कानूनी सहायता व सुरक्षा', badge: 'Women', color: '#DB2777' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#E5E8E5] shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-5 sm:p-7 lg:p-8 space-y-6">
        
        {/* ── Hub Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-[#F0F2F0]">
          <div className="space-y-1">
            {/* Top badge */}
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF6EE] text-[#168447] text-[10px] font-black uppercase tracking-widest border border-[#168447]/15">
              {lang === 'hi' ? 'नागरिक सुविधा केंद्र' : 'CITIZEN SERVICES HUB'}
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#142338] tracking-tight">
              {lang === 'hi' ? 'सभी सेवाएँ एवं योजनाएँ एक ही स्थान पर' : 'Unified Welfare & Services Explorer'}
            </h2>
            <p className="text-xs text-[#5A6A6A] font-medium">
              {lang === 'hi' ? 'भारत सरकार की योजनाएँ खोजें और समझें' : 'Discover and explore government welfare schemes and services across India'}
            </p>
          </div>

          {/* Right: Explore All Link */}
          <Link
            to="/schemes"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#168447] hover:underline self-start sm:self-center shrink-0 whitespace-nowrap"
          >
            <span>{lang === 'hi' ? 'सभी योजनाएँ देखें (1264+)' : 'Explore All (1264+)'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Tab Buttons Row (Matching reference: pill style with green active) ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-[#168447] text-white shadow-md'
                    : 'bg-[#FAF9F5] text-[#5A6A6A] border border-[#E5E8E5] hover:border-[#168447]/40 hover:text-[#142338]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-[#168447]'}`} />
                <span>{lang === 'hi' ? tab.labelHi : tab.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    active ? 'bg-white/25 text-white' : 'bg-white text-[#5A6A6A] border border-[#E5E8E5]'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* ════════════════ TAB 1: POPULAR SCHEMES ════════════════ */}
        {activeTab === 'schemes' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentSchemes.slice(0, 6).map((scheme) => (
                <SchemeCard key={scheme.slug || scheme._id} scheme={scheme} />
              ))}
            </div>

            {/* View All Button (matching reference: outlined green pill) */}
            <div className="text-center pt-2">
              <Link
                to="/schemes"
                className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-[#168447] text-[#168447] text-sm font-bold hover:bg-[#EAF6EE] transition-all"
              >
                <span>{lang === 'hi' ? 'सभी 1264+ योजनाएँ देखें' : 'View All 1264+ Schemes'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* ════════════════ TAB 2: BY STATE ════════════════ */}
        {activeTab === 'states' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF9F5] p-3 rounded-2xl border border-[#E5E8E5]">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {zones.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => setSelectedZone(z.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                      selectedZone === z.id
                        ? 'bg-[#168447] text-white shadow-xs'
                        : 'bg-white text-[#5A6A6A] border border-[#E5E8E5] hover:text-[#142338]'
                    }`}
                  >
                    {lang === 'hi' ? z.labelHi : z.labelEn}
                  </button>
                ))}
              </div>
              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 text-[#5A6A6A] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  placeholder={lang === 'hi' ? 'राज्य खोजें...' : 'Search state...'}
                  className="w-full pl-8 pr-3 py-1.5 bg-white rounded-xl border border-[#E5E8E5] text-xs text-[#142338] focus:outline-none focus:border-[#168447]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredStates.map((state) => (
                <button
                  key={state.code}
                  type="button"
                  onClick={() => navigate(`/schemes?state=${encodeURIComponent(state.nameEn)}`)}
                  className="bg-[#FAF9F5] hover:bg-[#EAF6EE] p-3.5 rounded-2xl border border-[#E5E8E5] hover:border-[#168447] text-left transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{state.emblem}</span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#142338] group-hover:text-[#168447]">
                        {lang === 'hi' ? state.nameHi : state.nameEn}
                      </div>
                      <div className="text-[10px] text-[#5A6A6A]">{state.schemes}+ {lang === 'hi' ? 'योजनाएँ' : 'Schemes'}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8C9B9B] group-hover:text-[#168447] group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════ TAB 3: CATEGORIES ════════════════ */}
        {activeTab === 'categories' && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        )}

        {/* ════════════════ TAB 4: VIDEO GUIDES ════════════════ */}
        {activeTab === 'videos' && (
          <div className="animate-fadeIn space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {videoGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-[#FAF9F5] hover:bg-white rounded-2xl border border-[#E5E8E5] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div
                      onClick={() => setActiveVideo(guide)}
                      className="relative aspect-video w-full bg-slate-900 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={guide.thumbnail}
                        alt={guide.titleHi}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      />
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-bold">
                        {guide.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-md">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5">
                      <div className="text-[10px] font-bold text-[#168447] line-clamp-1">{guide.ministry}</div>
                      <h4 className="text-xs font-bold text-[#142338] leading-snug mt-1 group-hover:text-[#168447]">
                        {lang === 'hi' ? guide.titleHi : guide.titleEn}
                      </h4>
                    </div>
                  </div>
                  <div className="p-3.5 pt-0">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(guide)}
                      className="w-full py-2 rounded-xl bg-white group-hover:bg-[#168447] text-[#142338] group-hover:text-white border border-[#E5E8E5] text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{lang === 'hi' ? 'गाइड देखें' : 'Watch Guide'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════ TAB 5: HIGHLIGHTS ════════════════ */}
        {activeTab === 'highlights' && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {helplines.map((item, i) => (
                <a
                  key={i}
                  href={`tel:${item.number.replace(/-/g, '')}`}
                  className="bg-[#FAF9F5] hover:bg-[#EAF6EE] p-4 rounded-2xl border border-[#E5E8E5] hover:border-[#168447] transition-all group flex items-start justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#E5E8E5] text-[#142338]">
                      {item.badge}
                    </span>
                    <div className="text-xl font-black text-[#142338] group-hover:text-[#168447] transition-colors pt-1">
                      {item.number}
                    </div>
                    <div className="text-xs font-bold text-[#142338]">{item.nameHi}</div>
                    <div className="text-[10px] text-[#5A6A6A]">{item.descHi}</div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white group-hover:bg-[#168447] text-[#142338] group-hover:text-white flex items-center justify-center shrink-0 border border-[#E5E8E5] transition-all shadow-2xs">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E8E5] bg-[#FAF9F5]">
              <h3 className="text-xs sm:text-sm font-bold text-[#142338] line-clamp-1">
                {lang === 'hi' ? activeVideo.titleHi : activeVideo.titleEn}
              </h3>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-7 h-7 rounded-full bg-white border border-[#E5E8E5] text-[#5A6A6A] hover:text-[#142338] flex items-center justify-center cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="aspect-video w-full bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img src={activeVideo.thumbnail} alt="thumbnail" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="w-14 h-14 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-xl mb-2">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <h4 className="text-sm font-bold max-w-md">{activeVideo.titleHi}</h4>
                </div>
              </div>
              <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E5E8E5]">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#168447] mb-2">
                  मुख्य आवेदन चरण (Key Steps):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {activeVideo.steps.map((st, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E5E8E5]">
                      <div className="font-bold text-[#168447] text-[11px]">चरण {idx + 1}</div>
                      <div className="text-[#5A6A6A] text-[11px] mt-0.5">{st}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CitizenHub;
