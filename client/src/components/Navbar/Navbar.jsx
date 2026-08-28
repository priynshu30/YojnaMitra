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
  ArrowRight
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-border py-2.5'
          : 'bg-brand-warmBg border-b border-brand-border/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-green/30 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" fill="#168447"/>
                <path d="M50 22C42 35 34 50 34 62C34 71 41 78 50 78C59 78 66 71 66 62C66 50 58 35 50 22Z" fill="#FFFFFF" fillOpacity="0.95"/>
                <path d="M50 34C46 44 40 56 40 64C40 70 45 74 50 74C55 74 60 70 60 64C60 56 54 44 50 34Z" fill="#168447"/>
                <circle cx="50" cy="50" r="6" fill="#FFFFFF"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-brand-navy leading-none">
                Yojna<span className="text-brand-green">Mitra</span>
              </span>
              <span className="text-[11px] font-medium text-brand-textMuted mt-0.5">
                {lang === 'hi' ? 'आपका साथी, आपकी योजनाएँ' : 'Your Schemes Companion'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/schemes"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/schemes' && !location.search.includes('level=State')
                  ? 'text-brand-green bg-brand-greenLight'
                  : 'text-brand-navy hover:text-brand-green hover:bg-black/5'
              }`}
            >
              {t.nav.schemes}
            </Link>

            <Link
              to="/schemes?level=State"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.search.includes('level=State')
                  ? 'text-brand-green bg-brand-greenLight'
                  : 'text-brand-navy hover:text-brand-green hover:bg-black/5'
              }`}
            >
              {t.nav.stateSchemes}
            </Link>

            <Link
              to="/#categories"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:text-brand-green hover:bg-black/5 transition-colors"
            >
              {t.nav.categories}
            </Link>

            <Link
              to="/#how-it-works"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-brand-navy hover:text-brand-green hover:bg-black/5 transition-colors"
            >
              {t.nav.howItWorks}
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/about'
                  ? 'text-brand-green bg-brand-greenLight'
                  : 'text-brand-navy hover:text-brand-green hover:bg-black/5'
              }`}
            >
              {t.nav.about}
            </Link>

            <Link
              to="/pdf-tools"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                location.pathname === '/pdf-tools'
                  ? 'text-brand-green bg-brand-greenLight'
                  : 'text-brand-navy hover:text-brand-green hover:bg-black/5'
              }`}
            >
              <span className="text-[#168447] font-bold">📄</span>
              <span>{lang === 'hi' ? 'PDF टूल्स' : 'PDF Tools'}</span>
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/faq'
                  ? 'text-brand-green bg-brand-greenLight'
                  : 'text-brand-navy hover:text-brand-green hover:bg-black/5'
              }`}
            >
              {t.nav.faq}
            </Link>
          </nav>

          {/* Right Controls: Language, Saved, Login/Profile, Primary CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green hover:text-brand-green transition-all shadow-2xs"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-green" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Saved Schemes Bookmark Link */}
            <Link
              to="/saved-schemes"
              className="relative p-2 rounded-lg border border-brand-border bg-white text-brand-navy hover:border-brand-green hover:text-brand-green transition-all shadow-2xs"
              title="सुरक्षित योजनाएँ"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-green text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* User Dropdown / Login */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center font-bold">
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </div>
                  <span className="max-w-[100px] truncate">{user.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-brand-textMuted" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-elevated border border-brand-border py-1.5 z-50">
                    <div className="px-3 py-2 border-b border-brand-border/60">
                      <p className="text-xs text-brand-textMuted">लॉग इन:</p>
                      <p className="text-xs font-semibold text-brand-navy truncate">{user.email}</p>
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
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 text-left"
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
                className="px-3.5 py-1.5 rounded-lg border border-brand-border bg-white text-xs font-semibold text-brand-navy hover:border-brand-green hover:text-brand-green transition-all"
              >
                {t.nav.login}
              </Link>
            )}

            {/* Primary CTA button */}
            <Link
              to="/eligibility"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-green text-white text-xs font-bold shadow-sm hover:bg-brand-greenHover hover:shadow-card transition-all active:scale-95"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-md border border-brand-border bg-white text-xs font-medium text-brand-navy"
            >
              {lang === 'hi' ? 'EN' : 'हि'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/schemes"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.schemes}
            </Link>
            <Link
              to="/schemes?level=State"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.stateSchemes}
            </Link>
            <Link
              to="/#categories"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.categories}
            </Link>
            <Link
              to="/#how-it-works"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.about}
            </Link>
            <Link
              to="/pdf-tools"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green flex items-center gap-2"
            >
              <span>📄</span>
              <span>{lang === 'hi' ? 'दस्तावेज़ व PDF टूल्स (iLovePDF)' : 'PDF & Document Tools'}</span>
            </Link>
            <Link
              to="/faq"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green"
            >
              {t.nav.faq}
            </Link>
            <Link
              to="/saved-schemes"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-greenLight hover:text-brand-green flex items-center justify-between"
            >
              <span>{t.nav.savedSchemes}</span>
              {savedCount > 0 && (
                <span className="bg-brand-green text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {savedCount}
                </span>
              )}
            </Link>
          </nav>

          <div className="pt-3 border-t border-brand-border/80 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    onClick={handleNavClick}
                    className="w-full text-center px-4 py-2.5 rounded-xl border border-brand-green bg-brand-greenLight text-brand-green text-sm font-semibold"
                  >
                    {t.nav.admin}
                  </Link>
                )}
                <Link
                  to="/profile"
                  onClick={handleNavClick}
                  className="w-full text-center px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-navy text-sm font-medium"
                >
                  {t.nav.profile}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    handleNavClick();
                  }}
                  className="w-full text-center px-4 py-2.5 rounded-xl text-red-600 bg-red-50 text-sm font-medium"
                >
                  {t.nav.logout}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={handleNavClick}
                className="w-full text-center px-4 py-2.5 rounded-xl border border-brand-border bg-white text-brand-navy text-sm font-semibold"
              >
                {t.nav.login}
              </Link>
            )}

            <Link
              to="/eligibility"
              onClick={handleNavClick}
              className="w-full text-center px-4 py-3 rounded-xl bg-brand-green text-white text-sm font-bold shadow-card"
            >
              {t.nav.cta} →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
