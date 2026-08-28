import React, { useState } from 'react';
import { User, ShieldCheck, CheckCircle2, Save, MapPin, IndianRupee } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const ProfilePage = () => {
  const { lang } = useLanguage();
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [profile, setProfile] = useState({
    age: user?.profile?.age || 32,
    gender: user?.profile?.gender || 'male',
    state: user?.profile?.state || 'Uttar Pradesh',
    occupation: user?.profile?.occupation || 'farmer',
    income: user?.profile?.income || 200000,
    category: user?.profile?.category || 'OBC',
    residenceType: user?.profile?.residenceType || 'rural',
    disabilityStatus: user?.profile?.disabilityStatus || false
  });

  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateUserProfile({ name, profile });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
          {lang === 'hi' ? 'नागरिक प्रोफ़ाइल विवरण' : 'Citizen Profile & Settings'}
        </h1>
        <p className="text-xs sm:text-sm text-brand-textMuted">
          {lang === 'hi'
            ? 'अपनी जानकारी को अद्यतन रखें ताकि पात्रता का मूल्यांकन सही हो सके।'
            : 'Keep your demographic data updated for accurate eligibility matching.'}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 shadow-card space-y-6">
        
        {saved && (
          <div className="p-3.5 rounded-xl bg-brand-greenLight border border-brand-green/30 text-brand-green text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{lang === 'hi' ? 'प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!' : 'Profile updated successfully!'}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'पूरा नाम' : 'Full Name'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
              </label>
              <input
                type="email"
                disabled
                value={user?.email || ''}
                className="w-full p-2.5 rounded-xl border border-brand-border bg-slate-50 text-xs sm:text-sm text-brand-textMuted"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'आयु (Age in Years)' : 'Age'}
              </label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'व्यवसाय / वर्ग' : 'Occupation'}
              </label>
              <select
                value={profile.occupation}
                onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              >
                <option value="farmer">किसान (Farmer)</option>
                <option value="student">विद्यार्थी (Student)</option>
                <option value="worker">श्रमिक / नौकरीपेशा (Worker)</option>
                <option value="business">व्यवसायी (Business / MSME)</option>
                <option value="homemaker">गृहिणी (Homemaker)</option>
                <option value="unemployed">बेरोजगार (Unemployed)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'राज्य (State)' : 'State'}
              </label>
              <input
                type="text"
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy mb-1.5">
                {lang === 'hi' ? 'वार्षिक आय (Annual Income ₹)' : 'Annual Income ₹'}
              </label>
              <input
                type="number"
                value={profile.income}
                onChange={(e) => setProfile({ ...profile, income: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-brand-border text-xs sm:text-sm focus:outline-none focus:border-brand-green"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold hover:bg-brand-greenHover transition-all shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? (lang === 'hi' ? 'सुरक्षित हो रहा है...' : 'Saving...') : (lang === 'hi' ? 'प्रोफ़ाइल सुरक्षित करें' : 'Save Changes')}</span>
            </button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default ProfilePage;
