import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic,
  Calculator,
  FileText,
  MessageCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Clock,
  Award,
  X,
  Share2,
  Lock
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CitizenToolsStrip = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [voiceSupported, setVoiceSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setTranscript('');
      };

      recognition.onresult = (event) => {
        const text = Array.from(event.results)
          .map((r) => r[0].transcript)
          .join('');
        setTranscript(text);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setVoiceSupported(false);
    }
  }, [lang]);

  const startVoiceSearch = () => {
    setVoiceModalOpen(true);
    setTranscript('');
    try {
      if (recognitionRef.current) {
        recognitionRef.current.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
        recognitionRef.current.start();
      }
    } catch (e) {
      console.warn(e);
    }
  };

  const handleVoiceDone = (query) => {
    setVoiceModalOpen(false);
    if (query && query.trim()) {
      navigate(`/schemes?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Main Outer Box Container (Pure Clean White #FFFFFF with Soft Shadow & Border) ── */}
      <div className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#E9ECEF] shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden space-y-8 sm:space-y-10">

        {/* ══════════════ 1. TOP HEADER WITH REAL 3D TOOLKIT BRIEFCASE IMAGE ══════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold border border-[#168447]/20 shadow-2xs">
              <Zap className="w-3.5 h-3.5 fill-[#168447]" />
              <span>{lang === 'hi' ? 'नागरिक स्मार्ट टूल्स' : 'Citizen Smart Tools'}</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-black text-[#142338] tracking-tight leading-tight">
              {lang === 'hi' ? (
                <>
                  सुविधाजनक टूल्स — योजना पाना अब <span className="text-[#168447]">और भी आसान</span>
                </>
              ) : (
                <>
                  Convenient Tools — Discovering Schemes <span className="text-[#168447]">Made Easier</span>
                </>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#5A6A6A] font-medium leading-relaxed">
              {lang === 'hi'
                ? 'स्मार्ट टूल्स की मदद से योजनाओं की जानकारी पाएं, डाउनलोड करें और शेयर करें।'
                : 'Discover, calculate eligibility, compress documents, and share schemes with citizen tools.'}
            </p>
          </div>

          {/* 🇮🇳 Right Side: 3D Rendered Digital Governance & Citizen Tools Artwork (Seamless Feathered Blend) */}
          <div className="hidden lg:flex items-center justify-end shrink-0 select-none">
            <div
              className="w-80 sm:w-96 h-44 flex items-center justify-end overflow-hidden"
              style={{
                maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 92%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 92%)'
              }}
            >
              <img
                src="/citizen_tools_header.jpg"
                alt="Digital Citizen Tools"
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ══════════════ 2. 4 INTERACTIVE TOOL CARDS GRID ══════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">

          {/* ──────── CARD 1: VOICE AI SCHEME SEARCH (GREEN THEME) ──────── */}
          <div
            onClick={startVoiceSearch}
            className="bg-[#F4FAF6] rounded-[24px] p-5 sm:p-6 border border-[#DCEFE3] hover:border-[#168447]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 relative overflow-hidden"
            style={{ minHeight: '290px' }}
          >
            <div>
              {/* Top Row: Circular Icon + Pill Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mic className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#142338] text-xs font-bold border border-[#DCEFE3] shadow-2xs">
                  <span className="text-[#168447]">🎙️</span>
                  <span>Voice AI</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-[#142338] leading-snug group-hover:text-[#168447] transition-colors">
                {lang === 'hi' ? 'वॉयस AI योजना खोजें' : 'Voice AI Scheme Search'}
              </h3>

              {/* Accent Underline Dash */}
              <div className="w-6 h-[2.5px] bg-[#168447] rounded-full my-2.5" />

              {/* Description */}
              <p className="text-xs text-[#5A6A6A] leading-relaxed font-medium">
                {lang === 'hi'
                  ? 'माइक दबाकर बोलें और पाएं अपनी जरूरत की योजना'
                  : 'Speak via microphone to instantly find matching welfare schemes.'}
              </p>
            </div>

            {/* Subtle Sound Waves Graphic Watermark (Bottom Left) */}
            <div className="absolute bottom-10 left-0 right-0 h-16 pointer-events-none select-none opacity-30 overflow-hidden">
              <svg viewBox="0 0 200 60" className="w-full h-full" fill="none">
                <path d="M0,40 Q25,10 50,35 T100,20 T150,45 T200,30" stroke="#168447" strokeWidth="2" fill="none" />
                <path d="M0,45 Q25,20 50,40 T100,28 T150,50 T200,35" stroke="#168447" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Bottom Row: "खोलें" + Arrow Circle Button */}
            <div className="mt-6 pt-3 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-[#142338] group-hover:text-[#168447] transition-colors">
                {lang === 'hi' ? 'खोलें' : 'Open'}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#168447] text-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#126338] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ──────── CARD 2: 2-MIN ELIGIBILITY CALCULATOR (WARM AMBER THEME) ──────── */}
          <div
            onClick={() => navigate('/eligibility')}
            className="bg-[#FFFDF5] rounded-[24px] p-5 sm:p-6 border border-[#FDE68A]/80 hover:border-[#EA580C]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 relative overflow-hidden"
            style={{ minHeight: '290px' }}
          >
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#142338] text-xs font-bold border border-[#FDE68A] shadow-2xs">
                  <span className="text-[#EA580C]">🎯</span>
                  <span>95% सटीक</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-[#142338] leading-snug group-hover:text-[#EA580C] transition-colors">
                {lang === 'hi' ? '2-मिनट पात्रता कैलकुलेटर' : '2-Min Eligibility Calculator'}
              </h3>

              {/* Accent Underline Dash */}
              <div className="w-6 h-[2.5px] bg-[#EA580C] rounded-full my-2.5" />

              {/* Description */}
              <p className="text-xs text-[#5A6A6A] leading-relaxed font-medium">
                {lang === 'hi'
                  ? 'उम्र, राज्य व आय के आधार पर जानें आप किन योजनाओं के पात्र हैं'
                  : 'Enter age, state, and income to discover your exact eligible schemes.'}
              </p>
            </div>

            {/* Subtle Calculator Graphic Watermark (Bottom Right) */}
            <div className="absolute bottom-4 right-3 w-16 h-16 pointer-events-none select-none opacity-20">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-[#EA580C]" strokeWidth="2.5">
                <rect x="10" y="8" width="44" height="48" rx="8" />
                <line x1="16" y1="18" x2="48" y2="18" />
                <circle cx="20" cy="28" r="2" fill="#EA580C" />
                <circle cx="32" cy="28" r="2" fill="#EA580C" />
                <circle cx="44" cy="28" r="2" fill="#EA580C" />
                <circle cx="20" cy="40" r="2" fill="#EA580C" />
                <circle cx="32" cy="40" r="2" fill="#EA580C" />
                <circle cx="44" cy="40" r="2" fill="#EA580C" />
              </svg>
            </div>

            {/* Bottom Row */}
            <div className="mt-6 pt-3 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-[#142338] group-hover:text-[#EA580C] transition-colors">
                {lang === 'hi' ? 'खोलें' : 'Open'}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#C2410C] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ──────── CARD 3: GOVT PDF 200KB TOOLS (BLUE THEME) ──────── */}
          <div
            onClick={() => navigate('/pdf-tools')}
            className="bg-[#F6FAFF] rounded-[24px] p-5 sm:p-6 border border-[#DBEAFE] hover:border-[#2563EB]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 relative overflow-hidden"
            style={{ minHeight: '290px' }}
          >
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#142338] text-xs font-bold border border-[#DBEAFE] shadow-2xs">
                  <span className="text-[#2563EB]">📄</span>
                  <span>iLovePDF Tool</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-[#142338] leading-snug group-hover:text-[#2563EB] transition-colors">
                {lang === 'hi' ? 'सरकारी PDF को 200KB टूल्स' : 'Govt PDF & 200KB Tools'}
              </h3>

              {/* Accent Underline Dash */}
              <div className="w-6 h-[2.5px] bg-[#2563EB] rounded-full my-2.5" />

              {/* Description */}
              <p className="text-xs text-[#5A6A6A] leading-relaxed font-medium">
                {lang === 'hi'
                  ? 'फोटो से PDF बनाएं, 200KB करें या पासपोर्ट फोटो रीसाइज़ करें'
                  : 'Convert photos to PDF, compress to <200KB, and resize passport photos.'}
              </p>
            </div>

            {/* Subtle Document Stack Graphic Watermark (Bottom Right) */}
            <div className="absolute bottom-4 right-3 w-16 h-16 pointer-events-none select-none opacity-20">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-[#2563EB]" strokeWidth="2.5">
                <rect x="18" y="16" width="34" height="42" rx="4" />
                <rect x="12" y="10" width="34" height="42" rx="4" strokeDasharray="3 3" />
                <line x1="24" y1="26" x2="44" y2="26" />
                <line x1="24" y1="34" x2="38" y2="34" />
                <line x1="24" y1="42" x2="42" y2="42" />
              </svg>
            </div>

            {/* Bottom Row */}
            <div className="mt-6 pt-3 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-[#142338] group-hover:text-[#2563EB] transition-colors">
                {lang === 'hi' ? 'खोलें' : 'Open'}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#1D4ED8] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ──────── CARD 4: WHATSAPP SCHEME SHARING (EMERALD MINT THEME) ──────── */}
          <div
            onClick={() => {
              const text = encodeURIComponent(
                `🏛️ *YojnaMitra — भारत का राष्ट्रीय कल्याणकारी योजना मंच*\n\n` +
                `✅ 750+ केंद्र एवं राज्य सरकार की योजनाएँ\n` +
                `✅ 100% मुफ्त व सीधे आधिकारिक आवेदन लिंक\n\n` +
                `🔗 अपनी योजनाएँ अभी खोजें: ${window.location.origin}\n\n` +
                `_इस संदेश को अपने दोस्तों व परिवार के साथ शेयर करें!_`
              );
              window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
            }}
            className="bg-[#F4FAF6] rounded-[24px] p-5 sm:p-6 border border-[#DCFCE7] hover:border-[#16A34A]/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 relative overflow-hidden"
            style={{ minHeight: '290px' }}
          >
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#142338] text-xs font-bold border border-[#DCFCE7] shadow-2xs">
                  <Share2 className="w-3 h-3 text-[#16A34A]" />
                  <span>Viral Share</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-[#142338] leading-snug group-hover:text-[#16A34A] transition-colors">
                {lang === 'hi' ? 'व्हाट्सएप योजना सहायता' : 'WhatsApp Scheme Assistance'}
              </h3>

              {/* Accent Underline Dash */}
              <div className="w-6 h-[2.5px] bg-[#16A34A] rounded-full my-2.5" />

              {/* Description */}
              <p className="text-xs text-[#5A6A6A] leading-relaxed font-medium">
                {lang === 'hi'
                  ? 'किसी भी योजना को 1-क्लिक में परिवार व मित्रों के साथ शेयर करें'
                  : 'Instantly forward verified scheme links and benefits on WhatsApp.'}
              </p>
            </div>

            {/* Subtle Community Graphic Watermark (Bottom Right) */}
            <div className="absolute bottom-4 right-3 w-16 h-16 pointer-events-none select-none opacity-20">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-[#16A34A]" strokeWidth="2.5">
                <circle cx="32" cy="20" r="8" />
                <path d="M18,48 C18,38 24,34 32,34 C40,34 46,38 46,48" />
                <circle cx="48" cy="24" r="5" />
                <path d="M48,44 C53,44 58,47 58,52" />
                <circle cx="16" cy="24" r="5" />
                <path d="M16,44 C11,44 6,47 6,52" />
              </svg>
            </div>

            {/* Bottom Row */}
            <div className="mt-6 pt-3 flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-[#142338] group-hover:text-[#16A34A] transition-colors">
                {lang === 'hi' ? 'खोलें' : 'Open'}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#15803D] transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* ══════════════ 3. BOTTOM TRUST & QUALITY BADGES STRIP ══════════════ */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E9ECEF] shadow-2xs relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E9ECEF]/80">
            
            {/* Item 1: हमारा वादा */}
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pr-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'हमारा वादा' : 'Our Promise'}
                </div>
                <div className="text-[11px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'सटीक जानकारी • सुरक्षित उपयोग • समय की बचत' : 'Accurate Info • Safe • Time Saver'}
                </div>
              </div>
            </div>

            {/* Item 2: 100% सुरक्षित */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? '100% सुरक्षित' : '100% Secure'}
                </div>
                <div className="text-[11px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'आपका डेटा पूरी तरह सुरक्षित' : 'Your data stays local & private'}
                </div>
              </div>
            </div>

            {/* Item 3: समय की बचत */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'समय की बचत' : 'Saves Time'}
                </div>
                <div className="text-[11px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'सही टूल से जल्दी परिणाम' : 'Fast results with right tools'}
                </div>
              </div>
            </div>

            {/* Item 4: विश्वसनीय जानकारी */}
            <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6EE] text-[#168447] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#142338] leading-tight">
                  {lang === 'hi' ? 'विश्वसनीय जानकारी' : 'Authoritative Data'}
                </div>
                <div className="text-[11px] text-[#5A6A6A] mt-0.5 font-medium">
                  {lang === 'hi' ? 'सरकारी स्रोतों से सत्यापित' : 'Verified from official sources'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── 🎙️ Voice Search Interactive Modal (When user clicks Voice Card) ── */}
      {voiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center shadow-2xl border border-white/20 relative space-y-5">
            <button
              onClick={() => {
                recognitionRef.current?.stop();
                setVoiceModalOpen(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pt-2">
              <div className="w-20 h-20 rounded-full bg-[#EAF6EE] text-[#168447] mx-auto flex items-center justify-center mb-3 relative">
                <Mic className="w-10 h-10" />
                {isListening && (
                  <span className="absolute inset-0 rounded-full border-4 border-[#168447] animate-ping opacity-30 pointer-events-none" />
                )}
              </div>

              <h3 className="text-lg font-black text-[#142338]">
                {isListening
                  ? (lang === 'hi' ? '🎤 सुन रहे हैं... बोलिए...' : '🎤 Listening... Speak now...')
                  : (lang === 'hi' ? 'अपनी आवाज़ से खोजें' : 'Search with Your Voice')}
              </h3>
              <p className="text-xs text-[#5A6A6A] mt-1">
                {lang === 'hi'
                  ? 'उदा. "किसान योजना", "छात्रवृत्ति", "मुफ्त राशन", "आयुष्मान कार्ड"'
                  : 'e.g. "Kisan Yojana", "Scholarship", "Ration", "Ayushman Card"'}
              </p>
            </div>

            {/* Transcript Box */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E8E5] min-h-[60px] flex items-center justify-center">
              <span className="text-sm font-bold text-[#168447]">
                {transcript || (lang === 'hi' ? '...आवाज़ का इंतज़ार है...' : '...Waiting for voice...')}
              </span>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  try {
                    recognitionRef.current?.start();
                  } catch (e) {}
                }}
                className="flex-1 py-2.5 rounded-xl border border-[#E5E8E5] text-xs font-bold text-[#142338] hover:bg-slate-50 cursor-pointer"
              >
                {lang === 'hi' ? '🔄 फिर से बोलें' : '🔄 Try Again'}
              </button>
              <button
                type="button"
                onClick={() => handleVoiceDone(transcript)}
                className="flex-1 py-2.5 rounded-xl bg-[#168447] text-white text-xs font-bold hover:bg-[#126338] shadow-md cursor-pointer"
              >
                {lang === 'hi' ? 'योजनाएं खोजें →' : 'Search Schemes →'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CitizenToolsStrip;
