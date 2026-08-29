import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Globe,
  Bookmark,
  User,
  ShieldCheck,
  LogOut,
  ChevronDown,
  ArrowRight,
  FileText
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { useSavedSchemes } from '../../context/SavedSchemesContext';

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { savedCount } = useSavedSchemes();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const isNavActive = (path, param) => {
    if (param) return location.search.includes(param);
    return location.pathname === path && !location.search.includes('level=State');
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-border py-2'
          : 'bg-[#FCFDFB] border-b border-[#E5E9E2]/80 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 3-Column Perfectly Balanced Grid Layout ── */}
        <div className="flex items-center justify-between gap-3 lg:grid lg:grid-cols-12 lg:gap-4">
          
          {/* Left Column: Official Logo (lg:col-span-3) */}
          <div className="flex items-center lg:col-span-3">
            <Link
              to="/"
              onClick={handleNavClick}
              className="flex items-center group focus:outline-none rounded-lg p-0.5 shrink-0"
            >
              <img
                src="/logo.png"
                alt="YojanaMitra Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </Link>
          </div>

          {/* Center Column: Symmetrically Centered Navigation (lg:col-span-6) */}
          <nav className="hidden lg:flex items-center justify-center gap-1.5 lg:col-span-6">
            <Link
              to="/schemes"
              className={`px-3 py-1.5 rounded-xl text-[13.5px] font-semibold transition-all ${
                isNavActive('/schemes')
                  ? 'text-brand-green bg-[#EAF6EE] font-bold shadow-2xs'
                  : 'text-brand-navy hover:text-brand-green hover:bg-[#EAF6EE]/50'
              }`}
            >
              {lang === 'hi' ? 'सभी योजनाएँ' : 'All Schemes'}
            </Link>

            <Link
              to="/schemes?level=State"
              className={`px-3 py-1.5 rounded-xl text-[13.5px] font-semibold transition-all ${
                isNavActive('/schemes', 'level=State')
                  ? 'text-brand-green bg-[#EAF6EE] font-bold shadow-2xs'
                  : 'text-brand-navy hover:text-brand-green hover:bg-[#EAF6EE]/50'
              }`}
            >
              {lang === 'hi' ? 'राज्य योजनाएँ' : 'State Schemes'}
            </Link>

            <Link
              to="/eligibility"
              className={`px-3 py-1.5 rounded-xl text-[13.5px] font-semibold transition-all ${
                isNavActive('/eligibility')
                  ? 'text-brand-green bg-[#EAF6EE] font-bold shadow-2xs'
                  : 'text-brand-navy hover:text-brand-green hover:bg-[#EAF6EE]/50'
              }`}
            >
              {lang === 'hi' ? 'पात्रता जांच' : 'Eligibility'}
            </Link>

            <Link
              to="/pdf-tools"
              className={`px-3 py-1.5 rounded-xl text-[13.5px] font-semibold transition-all flex items-center gap-1.5 ${
                isNavActive('/pdf-tools')
                  ? 'text-brand-green bg-[#EAF6EE] font-bold shadow-2xs'
                  : 'text-brand-navy hover:text-brand-green hover:bg-[#EAF6EE]/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#168447]" />
              <span>{lang === 'hi' ? 'PDF टूल्स' : 'PDF Tools'}</span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-xl text-[13.5px] font-semibold transition-all ${
                isNavActive('/about')
                  ? 'text-brand-green bg-[#EAF6EE] font-bold shadow-2xs'
                  : 'text-brand-navy hover:text-brand-green hover:bg-[#EAF6EE]/50'
              }`}
            >
              {lang === 'hi' ? 'हमारे बारे में' : 'About'}
            </Link>
          </nav>

          {/* Right Column: Unified Action Controls (lg:col-span-3, right-aligned) */}
          <div className="hidden sm:flex items-center justify-end gap-2 lg:col-span-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="h-9 flex items-center gap-1.5 px-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green hover:text-brand-green transition-all shadow-2xs cursor-pointer shrink-0"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-brand-green" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Saved Schemes Bookmark */}
            <Link
              to="/saved-schemes"
              className="relative h-9 w-9 flex items-center justify-center rounded-xl border border-brand-border bg-white text-brand-navy hover:border-brand-green hover:text-brand-green transition-all shadow-2xs shrink-0"
              title={lang === 'hi' ? 'सुरक्षित योजनाएँ' : 'Saved Schemes'}
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* User Profile / Login */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="h-9 flex items-center gap-1.5 px-2.5 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green transition-all cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center font-bold text-xs">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="max-w-[75px] truncate">{user.name}</span>
                  <ChevronDown className="w-3 h-3 text-brand-textMuted" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-elevated border border-brand-border py-1.5 z-50">
                    <div className="px-3 py-1.5 border-b border-brand-border/60">
                      <p className="text-[11px] font-semibold text-brand-navy truncate">{user.email}</p>
                    </div>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
                      >
                        <ShieldCheck className="w-4 h-4 text-brand-green" />
                        {t.nav.admin}
                      </Link>
                    )}
                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
                    >
                      <User className="w-4 h-4 text-brand-green" />
                      {t.nav.profile}
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      {t.nav.logout}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="h-9 inline-flex items-center px-3 rounded-xl border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green hover:text-brand-green transition-all shadow-2xs shrink-0"
              >
                {lang === 'hi' ? 'लॉगिन' : 'Login'}
              </Link>
            )}

            {/* Primary Action CTA */}
            <Link
              to="/eligibility"
              className="h-9 inline-flex items-center gap-1.5 px-3.5 rounded-xl bg-brand-green text-white text-xs font-bold shadow-xs hover:bg-brand-greenHover transition-all shrink-0 cursor-pointer"
            >
              <span>{lang === 'hi' ? 'पात्रता जांचें' : 'Check Eligibility'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-lg border border-brand-border bg-white text-xs font-bold text-brand-navy cursor-pointer"
            >
              {lang === 'hi' ? 'EN' : 'हि'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-brand-navy hover:bg-black/5 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/schemes"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {lang === 'hi' ? '📋 सभी सरकारी योजनाएँ' : '📋 All Schemes'}
            </Link>
            <Link
              to="/schemes?level=State"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {lang === 'hi' ? '🏛️ राज्य सरकार योजनाएँ' : '🏛️ State Schemes'}
            </Link>
            <Link
              to="/eligibility"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {lang === 'hi' ? '🎯 2-मिनट पात्रता कैलकुलेटर' : '🎯 Eligibility Checker'}
            </Link>
            <Link
              to="/pdf-tools"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green flex items-center gap-2"
            >
              <span>📄</span>
              <span>{lang === 'hi' ? 'दस्तावेज़ व PDF टूल्स' : 'PDF & Document Tools'}</span>
            </Link>
            <Link
              to="/saved-schemes"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green flex items-center justify-between"
            >
              <span>{lang === 'hi' ? '🔖 सुरक्षित योजनाएँ' : '🔖 Saved Schemes'}</span>
              {savedCount > 0 && (
                <span className="bg-brand-green text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {savedCount}
                </span>
              )}
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {lang === 'hi' ? 'ℹ️ हमारे बारे में' : 'ℹ️ About Us'}
            </Link>
          </nav>

          <div className="pt-2 border-t border-brand-border/80 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={handleNavClick}
                  className="w-full text-center px-4 py-2 rounded-xl border border-brand-border bg-white text-brand-navy text-sm font-medium"
                >
                  {lang === 'hi' ? 'मेरी प्रोफाइल' : 'My Profile'}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    handleNavClick();
                  }}
                  className="w-full text-center px-4 py-2 rounded-xl text-red-600 bg-red-50 text-sm font-medium cursor-pointer"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={handleNavClick}
                className="w-full text-center px-4 py-2 rounded-xl border border-brand-border bg-white text-brand-navy text-sm font-semibold"
              >
                {lang === 'hi' ? 'नागरिक लॉगिन' : 'Login'}
              </Link>
            )}

            <Link
              to="/eligibility"
              onClick={handleNavClick}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-brand-green text-white text-sm font-bold shadow-card"
            >
              {lang === 'hi' ? 'अपनी पात्रता जांचें →' : 'Check Your Eligibility →'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
