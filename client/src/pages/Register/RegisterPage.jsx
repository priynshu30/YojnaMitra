import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const RegisterPage = () => {
  const { lang } = useLanguage();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(name, email, password, {});
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'पंजीकरण में समस्या आई। कृपया पुनः प्रयास करें।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 space-y-6">
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-brand-greenLight text-brand-green flex items-center justify-center mx-auto shadow-xs">
          <UserPlus className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
          {lang === 'hi' ? 'निःशुल्क नागरिक पंजीकरण' : 'Create Free Citizen Account'}
        </h1>
        <p className="text-xs text-brand-textMuted">
          {lang === 'hi'
            ? 'अपनी पात्रता सुरक्षित करें और आवेदन दस्तावेजों की प्रगति ट्रैक करें'
            : 'Save personalized scheme matches and manage your document readiness'}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card space-y-5">
        
        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-navy mb-1.5">
              {lang === 'hi' ? 'पूरा नाम' : 'Full Name'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="उदा. रमेश कुमार"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:outline-none focus:border-brand-green"
            />
          </div>

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
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="न्यूनतम 6 अक्षर"
              className="w-full px-3.5 py-2.5 rounded-xl border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:outline-none focus:border-brand-green"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold shadow-card hover:bg-brand-greenHover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? (lang === 'hi' ? 'खाता बनाया जा रहा है...' : 'Creating...') : (lang === 'hi' ? 'खाता बनाएं →' : 'Create Account →')}</span>
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-brand-textMuted">
          <span>{lang === 'hi' ? 'पहले से खाता है?' : 'Already have an account?'}{' '}</span>
          <Link to="/login" className="font-bold text-brand-green hover:underline">
            {lang === 'hi' ? 'लॉगिन करें' : 'Log In'}
          </Link>
        </div>

      </div>

    </div>
  );
};

export default RegisterPage;
