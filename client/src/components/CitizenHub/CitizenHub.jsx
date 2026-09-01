import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame, MapPin, Layers, Video, Star,
  Search, ArrowRight, Play, Phone,
  ChevronRight, Bookmark, Share2, CheckCircle2,
  FileText, ShieldCheck, Check, Sparkles, Building2,
  CheckCircle, ExternalLink
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useSavedSchemes } from '../../context/SavedSchemesContext';
import { FALLBACK_SCHEMES } from '../../data/fallbackData';

const CitizenHub = ({ categories = [], recentSchemes = [] }) => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const { toggleSave, isSaved } = useSavedSchemes();

  const [activeTab, setActiveTab] = useState('schemes');
  const [stateSearch, setStateSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const displaySchemes = recentSchemes && recentSchemes.length >= 6
    ? recentSchemes.slice(0, 6)
    : FALLBACK_SCHEMES.slice(0, 6);

  const tabs = [
    { id: 'schemes',     labelHi: 'लोकप्रिय योजनाएँ', labelEn: 'Popular Schemes', icon: Flame,    badge: 'Top' },
    { id: 'states',      labelHi: 'राज्य अनुसार',       labelEn: 'By State',        icon: MapPin,   badge: 'All States' },
    { id: 'categories',  labelHi: 'श्रेणियाँ',          labelEn: 'Categories',      icon: Layers,   badge: `${categories.length || 10}` },
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

  const handleShare = (e, scheme) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/schemes/${scheme.slug || scheme._id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(scheme.slug || scheme._id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const CATEGORY_TAG_COLORS = {
    Business: 'text-[#168447] bg-[#EAF6EE]',
    Health: 'text-[#2563EB] bg-[#EFF6FF]',
    'Financial Assistance': 'text-[#059669] bg-[#ECFDF5]',
    Agriculture: 'text-[#168447] bg-[#EAF6EE]',
    'Women & Child': 'text-[#D97706] bg-[#FFFBEB]',
    Housing: 'text-[#7C3AED] bg-[#F5F3FF]',
    Education: 'text-[#2563EB] bg-[#EFF6FF]',
    Skills: 'text-[#E11D48] bg-[#FFF1F2]',
    default: 'text-[#475569] bg-[#F8FAFC]'
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#EAF6EE] text-[#168447] text-[10px] font-black uppercase tracking-widest border border-[#168447]/15">
            CITIZEN SERVICES HUB
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#142338] tracking-tight">
            Unified Welfare & Services Explorer
          </h2>
          <p className="text-xs text-[#5A6A6A] font-medium">
            Discover and explore government welfare schemes and services across India
          </p>
        </div>

        <Link
          to="/schemes"
          className="inline-flex items-center gap-1 text-sm font-bold text-[#168447] hover:underline self-start sm:self-center shrink-0 whitespace-nowrap"
        >
          <span>Explore All (1264+)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ── 2-Column Master Layout (Left: Farmer Feature | Right: Tabs + Scheme Cards) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ════════════════ LEFT COLUMN: Farmer Illustration with 3 Floating Steps ════════════════ */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 flex-col items-center justify-between relative bg-[#EAF6EE] rounded-[28px] p-4 min-h-[580px] overflow-hidden border border-[#168447]/20 shadow-sm group">
          
          {/* Background Decorative Accent */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#168447]/10 blur-xl pointer-events-none" />

          {/* Floating Step 1: 🔍 योजना खोजें (Top Right) */}
          <div className="absolute top-6 right-4 flex items-center gap-2 z-20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-9 h-9 rounded-full bg-white shadow-md border border-[#168447]/20 flex items-center justify-center text-[#168447]">
              <Search className="w-4 h-4" />
            </div>
            <span className="text-xs font-black text-[#142338] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-[#168447]/15">
              योजना खोजें
            </span>
          </div>

          {/* Floating Step 2: 📄 जानकारी समझें (Middle Right) */}
          <div className="absolute top-1/2 -translate-y-10 right-3 flex items-center gap-2 z-20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-9 h-9 rounded-full bg-white shadow-md border border-[#168447]/20 flex items-center justify-center text-[#168447]">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-xs font-black text-[#142338] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-[#168447]/15">
              जानकारी समझें
            </span>
          </div>

          {/* Floating Step 3: ✅ लाभ उठाएं (Bottom Right) */}
          <div className="absolute bottom-12 right-4 flex items-center gap-2 z-20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-9 h-9 rounded-full bg-[#168447] shadow-md text-white flex items-center justify-center">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs font-black text-[#168447] bg-white/95 px-3 py-1 rounded-full shadow-md border border-[#168447]/25">
              लाभ उठाएं
            </span>
          </div>

          {/* Clean Rounded Image Frame */}
          <div className="relative z-10 w-full h-full min-h-[530px] rounded-2xl overflow-hidden border border-[#168447]/15 shadow-inner bg-emerald-900/10">
            <img
              src="/farmer_citizen_hub.jpg"
              alt="Indian Farmer using YojanaMitra"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay at bottom for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>

        </div>

        {/* ════════════════ RIGHT COLUMN: Tabs + 6 Schemes Grid ════════════════ */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-4">
          
          {/* Pill Tabs Navigation Bar (Matching exact reference) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#168447] text-white shadow-sm'
                      : 'bg-white text-[#5A6A6A] border border-[#E5E8E5] hover:border-[#168447]/40 hover:text-[#142338]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-[#168447]'}`} />
                  <span>{lang === 'hi' ? tab.labelHi : tab.labelEn}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      active ? 'bg-white/25 text-white' : 'bg-[#FAF9F5] text-[#5A6A6A] border border-[#E5E8E5]'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ════════ TAB 1: POPULAR SCHEMES (6 CARDS GRID) ════════ */}
          {activeTab === 'schemes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-4 animate-fadeIn">
              {displaySchemes.map((scheme) => {
                const isSavedScheme = isSaved ? isSaved(scheme.slug || scheme._id) : false;
                const tagColor = CATEGORY_TAG_COLORS[scheme.category] || CATEGORY_TAG_COLORS.default;

                return (
                  <div
                    key={scheme.slug || scheme._id || scheme.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E8E5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#168447]/30 transition-all flex flex-col justify-between space-y-3 group"
                  >
                    {/* Top Row: Category + Level Tags + Action Buttons */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tagColor}`}>
                          {scheme.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-[#5A6A6A] bg-[#F1F5F9] border border-[#E2E8F0] flex items-center gap-1">
                          <span>🏛️</span>
                          <span>{scheme.level === 'Central' ? 'Central Govt' : scheme.state || 'State Govt'}</span>
                        </span>
                      </div>

                      {/* Right Action Buttons */}
                      <div className="flex items-center gap-1 shrink-0">
                        {/* Copy / Share button */}
                        <button
                          onClick={(e) => handleShare(e, scheme)}
                          className="w-7 h-7 rounded-lg border border-[#E5E8E5] bg-[#FAF9F5] hover:bg-[#EAF6EE] hover:text-[#168447] flex items-center justify-center text-[#5A6A6A] transition-colors cursor-pointer"
                          title="कॉपी लिंक"
                        >
                          {copiedId === (scheme.slug || scheme._id) ? (
                            <Check className="w-3.5 h-3.5 text-[#168447]" />
                          ) : (
                            <Share2 className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Bookmark Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (toggleSave) toggleSave(scheme.slug || scheme._id);
                          }}
                          className={`w-7 h-7 rounded-lg border border-[#E5E8E5] flex items-center justify-center transition-colors cursor-pointer ${
                            isSavedScheme
                              ? 'bg-brand-green text-white border-brand-green'
                              : 'bg-[#FAF9F5] text-[#5A6A6A] hover:bg-[#EAF6EE] hover:text-[#168447]'
                          }`}
                          title="सुरक्षित करें"
                        >
                          <Bookmark className="w-3.5 h-3.5" fill={isSavedScheme ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <Link
                        to={`/schemes/${scheme.slug || scheme._id}`}
                        className="text-sm font-extrabold text-[#142338] hover:text-[#168447] transition-colors line-clamp-2 leading-snug"
                      >
                        {scheme.name}
                      </Link>
                      <p className="text-[11px] text-[#64748B] flex items-center gap-1 mt-1 truncate">
                        <span>🏛️</span>
                        <span>{scheme.department || 'Government of India'}</span>
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#5A6A6A] line-clamp-2 leading-relaxed">
                      {scheme.shortDescription}
                    </p>

                    {/* 🌟 KEY BENEFIT Box (Matching exact reference design) */}
                    <div className="bg-[#FAF8F2] border border-[#EFE8D8] rounded-xl p-2.5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className="text-[#B45309] flex items-center gap-1">
                          <span>⭐</span> KEY BENEFIT
                        </span>
                        <span className="text-[#168447] bg-[#EAF6EE] px-1.5 py-0.2 rounded-xs font-extrabold">
                          DBT Ready
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-[#142338] line-clamp-2 leading-tight">
                        {scheme.benefitSummary || scheme.shortDescriptionHindi || scheme.benefits?.[0] || 'पात्र लाभार्थियों को प्रत्यक्ष वित्तीय सहायता।'}
                      </p>
                    </div>

                    {/* Bottom Row: Verified date + View Details Button */}
                    <div className="flex items-center justify-between pt-1 border-t border-[#F0F2F0]">
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-[#168447]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified: 27 Aug 2026</span>
                      </div>

                      <Link
                        to={`/schemes/${scheme.slug || scheme._id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#142338] text-white text-[11px] font-bold hover:bg-[#168447] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* ════════ TAB 2: BY STATE ════════ */}
          {activeTab === 'states' && (
            <div className="space-y-4 bg-white p-4 rounded-2xl border border-[#E5E8E5] animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E8E5]">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {filteredStates.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => navigate(`/schemes?state=${encodeURIComponent(s.nameEn)}`)}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-[#E5E8E5] bg-[#FAF9F5] hover:bg-[#EAF6EE] hover:border-[#168447] transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{s.emblem}</span>
                      <div>
                        <p className="text-xs font-bold text-[#142338] group-hover:text-[#168447]">
                          {lang === 'hi' ? s.nameHi : s.nameEn}
                        </p>
                        <p className="text-[10px] text-[#5A6A6A]">{s.schemes}+ {lang === 'hi' ? 'योजनाएँ' : 'Schemes'}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#168447]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ════════ TAB 3: CATEGORIES ════════ */}
          {activeTab === 'categories' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 bg-white p-4 rounded-2xl border border-[#E5E8E5] animate-fadeIn">
              {categories.map((c) => (
                <button
                  key={c.id || c.name}
                  onClick={() => navigate(`/schemes?category=${encodeURIComponent(c.id || c.name)}`)}
                  className="p-3 rounded-xl border border-[#E5E8E5] bg-[#FAF9F5] hover:bg-[#EAF6EE] hover:border-[#168447] transition-all text-center group cursor-pointer"
                >
                  <p className="text-xs font-bold text-[#142338] group-hover:text-[#168447]">{c.name}</p>
                  <p className="text-[10px] text-[#168447] font-semibold mt-1">{c.count || 15}+ Schemes</p>
                </button>
              ))}
            </div>
          )}

          {/* ════════ TAB 4: VIDEO TUTORIALS ════════ */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-white p-4 rounded-2xl border border-[#E5E8E5] animate-fadeIn">
              {[
                { title: 'PM किसान सम्मान निधि: eKYC व किस्त स्टेटस कैसे देखें?', duration: '2:45 min', ministry: 'कृषि एवं किसान कल्याण मंत्रालय' },
                { title: 'आयुष्मान कार्ड (₹5 लाख मुफ्त इलाज): ऑनलाइन कैसे डाउनलोड करें?', duration: '3:10 min', ministry: 'स्वास्थ्य एवं परिवार कल्याण मंत्रालय' },
                { title: 'DigiLocker: सरकारी प्रमाणपत्र व दस्तावेज डिजिटल कैसे रखें?', duration: '2:15 min', ministry: 'इलेक्ट्रॉनिकी एवं IT मंत्रालय' },
                { title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP): ऑनलाइन आवेदन प्रक्रिया', duration: '3:40 min', ministry: 'शिक्षा मंत्रालय, भारत सरकार' },
              ].map((v, i) => (
                <div key={i} className="p-3 rounded-xl border border-[#E5E8E5] bg-[#FAF9F5] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#168447] text-white flex items-center justify-center shrink-0">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#142338] line-clamp-1">{v.title}</p>
                      <p className="text-[10px] text-[#64748B]">{v.ministry} • {v.duration}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#168447] shrink-0" />
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default CitizenHub;
