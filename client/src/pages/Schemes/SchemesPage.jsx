import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  SlidersHorizontal,
  RefreshCw,
  MapPin,
  Tag,
  Building,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';
import SchemeCard from '../../components/SchemeCard/SchemeCard';
import { fetchSchemes, fetchCategories, fetchStates } from '../../services/schemeService';
import { FALLBACK_CATEGORIES, FALLBACK_STATES, filterFallbackSchemes } from '../../data/fallbackData';
import { useLanguage } from '../../context/LanguageContext';

const SchemesPage = () => {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize with fallback datasets so dropdowns and cards are never empty on live
  const initialFallback = filterFallbackSchemes();
  const [schemes, setSchemes] = useState(initialFallback.data || []);
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
  const [states, setStates] = useState(FALLBACK_STATES);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(initialFallback.pagination || { page: 1, pages: 1, total: 10 });

  // Filters State from URL query or defaults
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'All';
  const level = searchParams.get('level') || 'All';
  const state = searchParams.get('state') || 'All India';
  const beneficiary = searchParams.get('beneficiary') || 'all';
  const sort = searchParams.get('sort') || 'verified';
  const page = Number(searchParams.get('page')) || 1;

  const [searchInput, setSearchInput] = useState(search);

  // Sync search input if URL changes
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Load Categories & States metadata
  useEffect(() => {
    const loadInitialMeta = async () => {
      try {
        const [catsRes, statesRes] = await Promise.all([
          fetchCategories(),
          fetchStates()
        ]);
        if (catsRes && catsRes.data && Array.isArray(catsRes.data) && catsRes.data.length > 0) {
          setCategories(catsRes.data);
        }
        if (statesRes && statesRes.data && Array.isArray(statesRes.data) && statesRes.data.length > 0) {
          setStates(statesRes.data);
        }
      } catch (e) {
        console.warn('Using local categories/states fallback:', e);
      }
    };
    loadInitialMeta();
  }, []);

  // Fetch Schemes whenever filter params change
  useEffect(() => {
    const loadSchemesData = async () => {
      try {
        setLoading(true);
        const res = await fetchSchemes({
          search,
          category: category === 'All' ? '' : category,
          level: level === 'All' ? '' : level,
          state: state === 'All India' || state === 'All' ? '' : state,
          beneficiary: beneficiary === 'all' ? '' : beneficiary,
          sort,
          page,
          limit: 9
        });

        if (res && res.data && Array.isArray(res.data)) {
          setSchemes(res.data);
          if (res.pagination) {
            setPagination(res.pagination);
          }
        } else {
          const fallbackRes = filterFallbackSchemes({
            search,
            category: category === 'All' ? '' : category,
            level: level === 'All' ? '' : level,
            state: state === 'All India' || state === 'All' ? '' : state,
            beneficiary: beneficiary === 'all' ? '' : beneficiary,
            sort,
            page,
            limit: 9
          });
          setSchemes(fallbackRes.data);
          setPagination(fallbackRes.pagination);
        }
      } catch (err) {
        console.warn('Using local schemes fallback:', err);
        const fallbackRes = filterFallbackSchemes({
          search,
          category: category === 'All' ? '' : category,
          level: level === 'All' ? '' : level,
          state: state === 'All India' || state === 'All' ? '' : state,
          beneficiary: beneficiary === 'all' ? '' : beneficiary,
          sort,
          page,
          limit: 9
        });
        setSchemes(fallbackRes.data);
        setPagination(fallbackRes.pagination);
      } finally {
        setLoading(false);
      }
    };

    loadSchemesData();
  }, [search, category, level, state, beneficiary, sort, page]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'All' && value !== 'All India' && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateFilter('search', searchInput.trim());
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchInput(val);
    if (val === '') {
      updateFilter('search', '');
    }
  };

  const clearFilters = () => {
    setSearchInput('');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'सत्यापित योजना भंडार' : 'Verified Schemes Directory'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy">
          {lang === 'hi' ? 'सरकारी योजनाएँ खोजें' : 'Discover Government Schemes'}
        </h1>
        <p className="text-xs sm:text-sm text-brand-textMuted max-w-2xl">
          {lang === 'hi'
            ? 'केंद्र एवं विभिन्न राज्य सरकारों की सभी सक्रिय कल्याणकारी योजनाओं की सूची, पात्रता और आधिकारिक आवेदन लिंक।'
            : 'Explore active central and state welfare programs with clear eligibility and authentic official links.'}
        </p>
      </div>

      {/* Search Bar & Primary Filter Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-border shadow-soft space-y-4">
        
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-textMuted" />
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder={lang === 'hi' ? 'योजना का नाम, कीवर्ड या विभाग खोजें (जैसे: किसान, आवास, छात्रवृत्ति)...' : 'Search scheme name, department or keyword (e.g. Kisan, Awas, Scholarship)...'}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-brand-border bg-brand-warmBg/50 text-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput('');
                  updateFilter('search', '');
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-brand-greenHover transition-all shrink-0 cursor-pointer"
          >
            {lang === 'hi' ? 'खोजें' : 'Search'}
          </button>
        </form>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-brand-border/60">
          
          {/* Level Filter */}
          <div>
            <label className="block text-[11px] font-bold text-brand-textMuted uppercase mb-1">
              {lang === 'hi' ? 'सरकार स्तर' : 'Govt Level'}
            </label>
            <select
              value={level}
              onChange={(e) => updateFilter('level', e.target.value)}
              className="w-full p-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy focus:outline-none focus:border-brand-green cursor-pointer"
            >
              <option value="All">{lang === 'hi' ? 'सभी स्तर (केंद्र / राज्य)' : 'All Levels (Central / State)'}</option>
              <option value="Central">{lang === 'hi' ? 'केंद्र सरकार (Central Govt)' : 'Central Govt'}</option>
              <option value="State">{lang === 'hi' ? 'राज्य सरकार (State Govt)' : 'State Govt'}</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-bold text-brand-textMuted uppercase mb-1">
              {lang === 'hi' ? 'श्रेणी' : 'Category'}
            </label>
            <select
              value={category}
              onChange={(e) => updateFilter('category', e.target.value)}
              className="w-full p-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy focus:outline-none focus:border-brand-green cursor-pointer"
            >
              <option value="All">{lang === 'hi' ? 'सभी श्रेणियाँ' : 'All Categories'}</option>
              {categories.map((c) => (
                <option key={c.id || c.name} value={c.id || c.name}>
                  {lang === 'hi' ? (c.name || c.nameEn) : (c.nameEn || c.name)}
                </option>
              ))}
            </select>
          </div>

          {/* State Filter */}
          <div>
            <label className="block text-[11px] font-bold text-brand-textMuted uppercase mb-1">
              {lang === 'hi' ? 'राज्य' : 'State'}
            </label>
            <select
              value={state}
              onChange={(e) => updateFilter('state', e.target.value)}
              className="w-full p-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy focus:outline-none focus:border-brand-green cursor-pointer"
            >
              <option value="All India">{lang === 'hi' ? 'सभी राज्य (All India)' : 'All India (All States)'}</option>
              {states.filter(s => s !== 'All India' && s !== 'All').map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] font-bold text-brand-textMuted uppercase mb-1">
              {lang === 'hi' ? 'क्रमबद्ध करें' : 'Sort By'}
            </label>
            <select
              value={sort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="w-full p-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy focus:outline-none focus:border-brand-green cursor-pointer"
            >
              <option value="verified">{lang === 'hi' ? 'हाल ही में सत्यापित' : 'Recently Verified'}</option>
              <option value="newest">{lang === 'hi' ? 'नवीनतम योजनाएं' : 'Newest First'}</option>
              <option value="name">{lang === 'hi' ? 'नाम अनुसार (A-Z)' : 'Name (A-Z)'}</option>
            </select>
          </div>

        </div>

        {/* Filter Summary & Reset */}
        {(search || category !== 'All' || level !== 'All' || state !== 'All India') && (
          <div className="flex items-center justify-between pt-2 text-xs">
            <span className="text-brand-textMuted font-medium">
              {lang === 'hi' ? 'फ़िल्टर लागू हैं' : 'Active filters applied'}
            </span>
            <button
              onClick={clearFilters}
              className="text-brand-green font-bold hover:underline cursor-pointer"
            >
              {lang === 'hi' ? 'सभी फ़िल्टर साफ़ करें' : 'Clear All Filters'}
            </button>
          </div>
        )}

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm font-semibold text-brand-navy">
          {lang === 'hi' ? `कुल ${pagination.total} योजनाएँ उपलब्ध हैं` : `Showing ${pagination.total} schemes`}
        </p>
      </div>

      {/* Schemes Grid or Empty State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-brand-border animate-pulse space-y-4">
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              <div className="h-16 bg-slate-100 rounded"></div>
              <div className="h-8 bg-slate-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : schemes.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 border border-brand-border text-center space-y-3 max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-brand-warmBg text-brand-textMuted flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'hi' ? 'कोई योजना नहीं मिली' : 'No Schemes Found'}
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            {lang === 'hi'
              ? 'आपके द्वारा खोजे गए कीवर्ड या फ़िल्टर से मेल खाती कोई योजना नहीं मिली। कृपया फ़िल्टर रीसेट करें।'
              : 'No schemes match your search criteria. Try modifying or clearing your filters.'}
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-xl bg-brand-green text-white text-xs font-bold hover:bg-brand-greenHover transition-all cursor-pointer"
          >
            {lang === 'hi' ? 'फ़िल्टर हटाएं (Reset)' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.slug || scheme._id || scheme.id} scheme={scheme} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            disabled={page <= 1}
            onClick={() => updateFilter('page', (page - 1).toString())}
            className="p-2 rounded-xl border border-brand-border bg-white text-brand-navy disabled:opacity-40 hover:border-brand-green cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-brand-navy px-3">
            {page} / {pagination.pages}
          </span>

          <button
            disabled={page >= pagination.pages}
            onClick={() => updateFilter('page', (page + 1).toString())}
            className="p-2 rounded-xl border border-brand-border bg-white text-brand-navy disabled:opacity-40 hover:border-brand-green cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
};

export default SchemesPage;
