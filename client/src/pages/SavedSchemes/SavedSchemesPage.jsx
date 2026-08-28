import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ShieldCheck, ArrowRight, Trash2 } from 'lucide-react';
import SchemeCard from '../../components/SchemeCard/SchemeCard';
import { fetchSchemes } from '../../services/schemeService';
import { useSavedSchemes } from '../../context/SavedSchemesContext';
import { useLanguage } from '../../context/LanguageContext';

const SavedSchemesPage = () => {
  const { lang } = useLanguage();
  const { savedSlugs, toggleSave } = useSavedSchemes();
  const [allSchemes, setAllSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSaved = async () => {
      try {
        setLoading(true);
        const res = await fetchSchemes({ limit: 50 });
        if (res && res.data) {
          setAllSchemes(res.data);
        }
      } catch (err) {
        console.error('Error fetching schemes for saved view:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSaved();
  }, []);

  const savedSchemesList = allSchemes.filter(s =>
    savedSlugs.includes(s.slug) || savedSlugs.includes(s._id) || savedSlugs.includes(s.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'आपकी बुकमार्क सूची' : 'Your Bookmarks'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
          {lang === 'hi' ? 'सुरक्षित सरकारी योजनाएँ' : 'Saved Government Schemes'}
        </h1>
        <p className="text-xs sm:text-sm text-brand-textMuted max-w-xl">
          {lang === 'hi'
            ? 'जिन योजनाओं को आपने भविष्य में आवेदन या दस्तावेज़ तैयार करने के लिए सुरक्षित किया है।'
            : 'Schemes you have saved for tracking document preparation and applying later.'}
        </p>
      </div>

      {/* Grid or Empty */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-white rounded-2xl border border-brand-border animate-pulse"></div>
          ))}
        </div>
      ) : savedSchemesList.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-brand-border text-center space-y-4 max-w-md mx-auto shadow-soft">
          <div className="w-12 h-12 rounded-full bg-brand-warmBg text-brand-textMuted flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? 'अभी कोई योजना सुरक्षित नहीं है' : 'No Saved Schemes Yet'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'योजनाओं के कार्ड पर बने बुकमार्क आइकन (Bookmark) पर क्लिक करके उन्हें यहाँ जोड़ें।'
              : 'Click the bookmark icon on any scheme card to save it here for fast access.'}
          </p>
          <Link
            to="/schemes"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-green text-white text-xs font-bold shadow-sm"
          >
            <span>{lang === 'hi' ? 'योजनाएँ खोजें →' : 'Discover Schemes →'}</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedSchemesList.map((scheme) => (
            <SchemeCard key={scheme.slug || scheme._id} scheme={scheme} />
          ))}
        </div>
      )}

    </div>
  );
};

export default SavedSchemesPage;
