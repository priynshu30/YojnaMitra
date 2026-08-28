import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, User, Lock, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const LoginPage = () => {
  const { lang } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const loggedUser = await login(email, password);
      if (loggedUser?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'लॉगिन विफल रहा। कृपया सही ईमेल और पासवर्ड दर्ज करें।');
    } finally {
      setLoading(false);
    }
  };

  const fillCitizenDemo = () => {
    setEmail('citizen@yojnamitra.in');
    setPassword('User@123');
  };

  const fillAdminDemo = () => {
    setEmail('admin@yojnamitra.in');
    setPassword('Admin@123');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center mx-auto shadow-xs">
          <User className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
          {lang === 'hi' ? 'YojnaMitra लॉगिन' : 'Log In to YojnaMitra'}
        </h1>
        <p className="text-xs text-brand-textMuted">
          {lang === 'hi'
            ? 'अपनी सुरक्षित योजनाओं और दस्तावेज़ चेकलिस्ट तक पहुँचने के लिए लॉगिन करें'
            : 'Access your saved schemes and document readiness checklists'}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card space-y-5">
        
        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-navy mb-1.5">
              {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:outline-none focus:border-brand-green"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-navy mb-1.5">
              {lang === 'hi' ? 'पासवर्ड' : 'Password'}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:outline-none focus:border-brand-green"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold shadow-card hover:bg-brand-greenHover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? (lang === 'hi' ? 'लॉगिन हो रहा है...' : 'Logging in...') : (lang === 'hi' ? 'लॉगिन करें →' : 'Log In →')}</span>
          </button>
        </form>

        {/* 1-Click Quick Demo Login Shortcuts */}
        <div className="pt-4 border-t border-brand-border/60 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-textMuted block text-center">
            {lang === 'hi' ? 'त्वरित परीक्षण (Demo Login):' : 'Instant Demo Credentials:'}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={fillCitizenDemo}
              className="p-2 rounded-xl border border-brand-border bg-brand-warmBg text-xs font-semibold text-brand-navy hover:border-brand-green transition-colors text-center"
            >
              🧑 {lang === 'hi' ? 'नागरिक खाता' : 'Citizen Demo'}
            </button>
            <button
              type="button"
              onClick={fillAdminDemo}
              className="p-2 rounded-xl border border-brand-border bg-brand-warmBg text-xs font-semibold text-brand-navy hover:border-brand-green transition-colors text-center"
            >
              🔒 {lang === 'hi' ? 'एडमिन खाता' : 'Admin Demo'}
            </button>
          </div>
        </div>

        <div className="text-center pt-2 text-xs text-brand-textMuted">
          <span>{lang === 'hi' ? 'खाता नहीं है?' : "Don't have an account?"}{' '}</span>
          <Link to="/register" className="font-bold text-brand-green hover:underline">
            {lang === 'hi' ? 'नया पंजीकरण करें' : 'Sign Up Free'}
          </Link>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;
