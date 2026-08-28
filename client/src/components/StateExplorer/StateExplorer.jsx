import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ArrowRight, Building, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const StateExplorer = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');

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
    { id: 'all', labelHi: 'सभी राज्य', labelEn: 'All States' },
    { id: 'north', labelHi: 'उत्तर भारत', labelEn: 'North India' },
    { id: 'central', labelHi: 'मध्य भारत', labelEn: 'Central India' },
    { id: 'east', labelHi: 'पूर्वी भारत', labelEn: 'East India' },
    { id: 'west', labelHi: 'पश्चिम भारत', labelEn: 'West India' },
    { id: 'south', labelHi: 'दक्षिण भारत', labelEn: 'South India' },
  ];

  const filteredStates = statesData.filter(state => {
    const matchesSearch =
      state.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === 'all' || state.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const handleStateClick = (stateNameEn) => {
    navigate(`/schemes?state=${encodeURIComponent(stateNameEn)}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF9F5] border border-[#E5E8E5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'राज्यवार योजना अन्वेषक' : 'State-wise Scheme Explorer'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#142338]">
              {lang === 'hi' ? 'अपने राज्य की सरकारी योजनाएँ चुनें' : 'Explore Schemes by Your State'}
            </h2>
            <p className="text-sm text-[#5A6A6A] mt-1">
              {lang === 'hi'
                ? 'प्रत्येक राज्य सरकार द्वारा नागरिकों के लिए चलाई जा रही विशेष सब्सिडी व कल्याणकारी योजनाएँ।'
                : 'Discover tailored state subsidies, pensions, youth schemes, and agricultural benefits.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[#5A6A6A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'hi' ? 'राज्य का नाम खोजें...' : 'Search state name...'}
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#E5E8E5] text-sm text-[#142338] placeholder:text-[#8C9B9B] focus:outline-none focus:border-[#168447] shadow-2xs"
            />
          </div>
        </div>

        {/* Zone Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedZone === zone.id
                  ? 'bg-[#168447] text-white shadow-xs'
                  : 'bg-white text-[#5A6A6A] border border-[#E5E8E5] hover:border-[#168447]/40 hover:text-[#142338]'
              }`}
            >
              {lang === 'hi' ? zone.labelHi : zone.labelEn}
            </button>
          ))}
        </div>

        {/* States Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5">
          {filteredStates.map((state) => (
            <button
              key={state.code}
              type="button"
              onClick={() => handleStateClick(state.nameEn)}
              className="group bg-white hover:bg-[#EAF6EE] p-4 rounded-2xl border border-[#E5E8E5] hover:border-[#168447] text-left transition-all duration-200 hover:shadow-md flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] group-hover:bg-white flex items-center justify-center text-lg border border-[#E5E8E5] shrink-0">
                  {state.emblem}
                </div>
                <span className="text-[11px] font-bold text-[#168447] bg-[#EAF6EE] group-hover:bg-white px-2 py-0.5 rounded-full border border-[#168447]/20">
                  {state.schemes}+ {lang === 'hi' ? 'योजनाएँ' : 'Schemes'}
                </span>
              </div>

              <div className="mt-3">
                <div className="text-sm sm:text-base font-bold text-[#142338] group-hover:text-[#168447] transition-colors leading-tight">
                  {lang === 'hi' ? state.nameHi : state.nameEn}
                </div>
                <div className="text-[11px] text-[#5A6A6A] mt-0.5 flex items-center justify-between">
                  <span>{lang === 'hi' ? state.nameEn : state.nameHi}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#168447] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* View All Central Schemes Banner */}
        <div className="mt-8 pt-6 border-t border-[#E5E8E5] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#E5E8E5]">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#142338]">
                {lang === 'hi' ? 'केंद्र सरकार की सभी अखिल भारतीय योजनाएँ' : 'All-India Central Government Schemes'}
              </h4>
              <p className="text-xs text-[#5A6A6A]">
                {lang === 'hi' ? 'प्रधानमंत्री योजनाएँ जो भारत के सभी राज्यों में समान रूप से लागू हैं।' : 'Prime Minister schemes accessible across all states & territories.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/schemes?level=Central')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#168447] text-white text-xs sm:text-sm font-bold hover:bg-[#126338] transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <span>{lang === 'hi' ? 'केंद्रीय योजनाएँ देखें' : 'View Central Schemes'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default StateExplorer;
