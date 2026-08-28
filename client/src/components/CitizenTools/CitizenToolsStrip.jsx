import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic,
  MicOff,
  Sparkles,
  Search,
  CheckCircle2,
  FileText,
  ArrowRight,
  Zap,
  ShieldCheck,
  X,
  MessageCircle
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

  const tools = [
    {
      id: 'voice',
      titleHi: 'बोलकर योजना खोजें',
      titleEn: 'Voice Scheme Search',
      descHi: 'माइक दबाकर हिंदी में बोलें और तुरंत योजना पाएं',
      descEn: 'Speak in Hindi or English to discover schemes',
      badgeHi: '🎙️ Voice AI',
      badgeEn: '🎙️ Voice AI',
      color: 'from-[#EAF6EE] to-[#D5EFE0]',
      btnBg: 'bg-[#168447] text-white hover:bg-[#126338]',
      action: startVoiceSearch,
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#168447] text-white flex items-center justify-center shadow-md">
          <Mic className="w-6 h-6 animate-pulse" />
        </div>
      ),
    },
    {
      id: 'eligibility',
      titleHi: '2-मिनट पात्रता कैलकुलेटर',
      titleEn: '2-Min Eligibility Calculator',
      descHi: 'उम्र, राज्य व आय डालकर उपयुक्त योजनाएं देखें',
      descEn: 'Find tailored schemes by answering 3 questions',
      badgeHi: '🎯 95% सटीक',
      badgeEn: '🎯 95% Match',
      color: 'from-[#FFF8E7] to-[#FEEDBA]',
      btnBg: 'bg-[#D97706] text-white hover:bg-[#B45309]',
      action: () => navigate('/eligibility'),
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#D97706] text-white flex items-center justify-center shadow-md">
          <Sparkles className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'documents',
      titleHi: 'दस्तावेज तैयारी गाइड',
      titleEn: 'Document Readiness Checklist',
      descHi: 'आधार, आय, बैंक खाता रेडीनेस चेक करें',
      descEn: 'Check essential documents before applying',
      badgeHi: '📋 1-Click Check',
      badgeEn: '📋 1-Click Check',
      color: 'from-[#EFF6FF] to-[#DBEAFE]',
      btnBg: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]',
      action: () => navigate('/faq'),
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shadow-md">
          <FileText className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'whatsapp',
      titleHi: 'व्हाट्सएप योजना सहायता',
      titleEn: 'WhatsApp Scheme Updates',
      descHi: 'मित्रों व परिवार को 1-क्लिक में योजना भेजें',
      descEn: 'Forward official schemes instantly on WhatsApp',
      badgeHi: '📱 Viral Share',
      badgeEn: '📱 Viral Share',
      color: 'from-[#E9FBEF] to-[#CEF7DB]',
      btnBg: 'bg-[#25D366] text-white hover:bg-[#1EBE5D]',
      action: () => {
        const text = encodeURIComponent(
          `🏛️ *YojnaMitra — भारत का राष्ट्रीय कल्याणकारी योजना मंच*\n\n` +
          `✅ 750+ केंद्र एवं राज्य सरकार की योजनाएँ\n` +
          `✅ 100% मुफ्त व सीधे आधिकारिक आवेदन लिंक\n\n` +
          `🔗 अपनी योजनाएँ अभी खोजें: ${window.location.origin}\n\n` +
          `_इस संदेश को अपने दोस्तों व परिवार के साथ शेयर करें!_`
        );
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
      },
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
          <MessageCircle className="w-6 h-6" />
        </div>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E5E8E5]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6EE] text-[#168447] text-xs font-bold uppercase tracking-wider mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'नागरिक स्मार्ट टूल्स' : 'CITIZEN SMART TOOLS'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#142338]">
            {lang === 'hi' ? 'सुविधाजनक टूल्स — योजना पाना अब और भी आसान' : 'Powerful Citizen Tools to Find Your Scheme Fast'}
          </h2>
        </div>
      </div>

      {/* ── 4 Standout Tools Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            onClick={tool.action}
            className={`bg-gradient-to-b ${tool.color} rounded-2xl p-5 border border-[#E5E8E5] hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1`}
          >
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {tool.icon}
                </div>
                <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-white/90 text-[#142338] shadow-2xs">
                  {lang === 'hi' ? tool.badgeHi : tool.badgeEn}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-base font-black text-[#142338] leading-snug group-hover:text-[#168447] transition-colors">
                {lang === 'hi' ? tool.titleHi : tool.titleEn}
              </h3>
              <p className="text-xs text-[#5A6A6A] font-medium leading-relaxed mt-1.5">
                {lang === 'hi' ? tool.descHi : tool.descEn}
              </p>
            </div>

            {/* Bottom Button */}
            <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs font-bold text-[#142338] group-hover:text-[#168447]">
                {lang === 'hi' ? 'खोलें' : 'Open Tool'}
              </span>
              <div className={`w-7 h-7 rounded-full ${tool.btnBg} flex items-center justify-center shadow-xs group-hover:translate-x-1 transition-transform`}>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 🎙️ Voice Search Interactive Modal ── */}
      {voiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center shadow-2xl border border-white/20 relative space-y-5">
            <button
              onClick={() => {
                recognitionRef.current?.stop();
                setVoiceModalOpen(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center"
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
                className="flex-1 py-2.5 rounded-xl border border-[#E5E8E5] text-xs font-bold text-[#142338] hover:bg-slate-50"
              >
                {lang === 'hi' ? '🔄 फिर से बोलें' : '🔄 Try Again'}
              </button>
              <button
                type="button"
                onClick={() => handleVoiceDone(transcript)}
                className="flex-1 py-2.5 rounded-xl bg-[#168447] text-white text-xs font-bold hover:bg-[#126338] shadow-md"
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
