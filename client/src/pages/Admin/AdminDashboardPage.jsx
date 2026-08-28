import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Search,
  ExternalLink,
  RefreshCw,
  X,
  Save
} from 'lucide-react';
import {
  fetchAdminDashboard,
  fetchAdminSchemes,
  createSchemeApi,
  updateSchemeApi,
  deleteSchemeApi,
  updateSchemeStatusApi,
  verifySchemeApi
} from '../../services/adminService';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const AdminDashboardPage = () => {
  const { lang } = useLanguage();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingScheme, setEditingScheme] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    nameHindi: '',
    category: 'Education',
    level: 'Central',
    state: 'All India',
    department: '',
    benefitSummary: '',
    shortDescription: '',
    fullDescription: '',
    officialSourceUrl: '',
    officialApplicationUrl: '',
    status: 'PUBLISHED'
  });

  const [saving, setSaving] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  useEffect(() => {
    loadAllAdminData();
  }, [statusFilter]);

  const loadAllAdminData = async () => {
    try {
      setLoading(true);
      const [dashRes, listRes] = await Promise.all([
        fetchAdminDashboard(),
        fetchAdminSchemes({ status: statusFilter === 'ALL' ? '' : statusFilter, limit: 100 })
      ]);

      if (dashRes && dashRes.data) setDashboardData(dashRes.data);
      if (listRes && listRes.data) setSchemes(listRes.data);
    } catch (err) {
      console.error('Error loading admin portal:', err);
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (msg) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(''), 4000);
  };

  const handleOpenCreateModal = () => {
    setEditingScheme(null);
    setFormData({
      name: '',
      nameHindi: '',
      category: 'Education',
      level: 'Central',
      state: 'All India',
      department: '',
      benefitSummary: '',
      shortDescription: '',
      fullDescription: '',
      officialSourceUrl: 'https://',
      officialApplicationUrl: 'https://',
      status: 'PUBLISHED'
    });
    setModalOpen(true);
  };

  const handleOpenEditModal = (scheme) => {
    setEditingScheme(scheme);
    setFormData({
      name: scheme.name || '',
      nameHindi: scheme.nameHindi || '',
      category: scheme.category || 'Education',
      level: scheme.level || 'Central',
      state: scheme.state || 'All India',
      department: scheme.department || '',
      benefitSummary: scheme.benefitSummary || '',
      shortDescription: scheme.shortDescription || '',
      fullDescription: scheme.fullDescription || '',
      officialSourceUrl: scheme.officialSourceUrl || '',
      officialApplicationUrl: scheme.officialApplicationUrl || '',
      status: scheme.status || 'PUBLISHED'
    });
    setModalOpen(true);
  };

  const handleSaveScheme = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingScheme) {
        await updateSchemeApi(editingScheme._id || editingScheme.slug, formData);
        showNotification('योजना सफलतापूर्वक अपडेट की गई!');
      } else {
        await createSchemeApi(formData);
        showNotification('नई योजना सफलतापूर्वक जोड़ी गई!');
      }
      setModalOpen(false);
      loadAllAdminData();
    } catch (err) {
      alert('योजना सहेजने में त्रुटि: ' + (err.response?.data?.message || err.message));
    } finally {
      setSaving(false);
    }
  };

  const handleVerify = async (scheme) => {
    try {
      await verifySchemeApi(scheme._id || scheme.slug);
      showNotification(`"${scheme.name}" का सत्यापन सफल हुआ!`);
      loadAllAdminData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (scheme, newStatus) => {
    try {
      await updateSchemeStatusApi(scheme._id || scheme.slug, newStatus);
      showNotification(`स्थिति बदलकर ${newStatus} कर दी गई`);
      loadAllAdminData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (scheme) => {
    if (window.confirm(`क्या आप वाकई "${scheme.name}" को हटाना चाहते हैं?`)) {
      try {
        await deleteSchemeApi(scheme._id || scheme.slug);
        showNotification('योजना हटा दी गई');
        loadAllAdminData();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const filteredSchemes = schemes.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    (s.department && s.department.toLowerCase().includes(search.toLowerCase()))
  );

  const metrics = dashboardData?.metrics || {
    totalSchemes: schemes.length,
    verifiedSchemes: schemes.filter(s => s.status === 'PUBLISHED' || s.status === 'VERIFIED').length,
    draftSchemes: 0,
    pendingReview: 0,
    needsVerificationCount: 0
  };

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-3xl bg-red-50 text-red-600 flex items-center justify-center mx-auto shadow-sm border border-red-200">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-black text-[#142338]">
            {lang === 'hi' ? '🔒 केवल अधिकृत एडमिन के लिए' : '🔒 Admin Access Required'}
          </h2>
          <p className="text-xs text-[#5A6A6A] leading-relaxed">
            {lang === 'hi'
              ? 'यह पेज केवल YojnaMitra के आधिकारिक एडमिन के लिए आरक्षित है। कृपया सही एडमिन क्रेडेंशियल्स से लॉगिन करें।'
              : 'This management console is strictly restricted to verified administrators.'}
          </p>
        </div>
        <div className="pt-3 flex gap-2 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 rounded-xl bg-[#168447] text-white text-xs font-bold shadow-md hover:bg-[#126338]"
          >
            {lang === 'hi' ? 'एडमिन लॉगिन करें' : 'Admin Login'}
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2.5 rounded-xl border border-[#E5E8E5] text-xs font-semibold text-[#142338] hover:bg-slate-50"
          >
            {lang === 'hi' ? 'होमपेज जाएं' : 'Go Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span>{lang === 'hi' ? 'एडमिन सत्यापन कंसोल' : 'Admin Verification Console'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-navy">
            {lang === 'hi' ? 'योजना प्रबंधन व सत्यापन डैशबोर्ड' : 'Scheme Management & Verification Dashboard'}
          </h1>
          <p className="text-xs sm:text-sm text-brand-textMuted">
            {lang === 'hi'
              ? 'आधिकारिक स्रोतों से डेटा सत्यापन, नई योजनाएँ जोड़ना व स्थिति चक्र नियंत्रण।'
              : 'Audit authoritative data sources, maintain verification timestamps, and manage publishing lifecycle.'}
          </p>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-green text-white text-xs sm:text-sm font-bold shadow-card hover:bg-brand-greenHover transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{lang === 'hi' ? '+ नई योजना जोड़ें' : '+ Add New Scheme'}</span>
        </button>
      </div>

      {/* Action Notification Alert */}
      {actionMessage && (
        <div className="p-4 rounded-xl bg-brand-greenLight border border-brand-green/30 text-brand-green text-xs font-bold flex items-center gap-2 animate-fadeIn shadow-2xs">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>{actionMessage}</span>
        </div>
      )}

      {/* Metrics Counter Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-1">
          <span className="text-xs font-bold text-brand-textMuted uppercase">{lang === 'hi' ? 'कुल योजनाएँ' : 'Total Schemes'}</span>
          <div className="text-2xl sm:text-3xl font-black text-brand-navy">{metrics.totalSchemes}</div>
          <p className="text-[11px] text-brand-textMuted">सिस्टम में कुल दर्ज योजनाएं</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-1">
          <span className="text-xs font-bold text-brand-green uppercase">{lang === 'hi' ? 'सत्यापित / प्रकाशित' : 'Published & Verified'}</span>
          <div className="text-2xl sm:text-3xl font-black text-brand-green">{metrics.verifiedSchemes}</div>
          <p className="text-[11px] text-brand-textMuted">नागरिकों को सार्वजनिक रूप से दृश्य</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase">{lang === 'hi' ? 'सत्यापन आवश्यक' : 'Needs Verification'}</span>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">{metrics.needsVerificationCount}</div>
          <p className="text-[11px] text-brand-textMuted">30 दिन से अधिक पुराने अथवा लंबित</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase">{lang === 'hi' ? 'ड्राफ्ट / समीक्षाधीन' : 'Drafts / Pending'}</span>
          <div className="text-2xl sm:text-3xl font-black text-slate-700">{metrics.draftSchemes + metrics.pendingReview}</div>
          <p className="text-[11px] text-brand-textMuted">अप्रकाशित प्रविष्टियां</p>
        </div>
      </div>

      {/* Schemes Management Table & Filter Section */}
      <div className="bg-white rounded-3xl border border-brand-border shadow-card overflow-hidden">
        
        {/* Table Controls Header */}
        <div className="p-5 sm:p-6 border-b border-brand-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['ALL', 'PUBLISHED', 'PENDING_REVIEW', 'DRAFT', 'EXPIRED'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === st
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-warmBg text-brand-navy hover:bg-slate-200'
                }`}
              >
                {st === 'ALL' ? 'सभी (All)' : st}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-textMuted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="नाम या विभाग से खोजें..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-border text-xs focus:outline-none focus:border-brand-green"
            />
          </div>

        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-brand-navy">
            <thead className="bg-brand-warmBg text-brand-textMuted uppercase font-bold text-[10px] tracking-wider border-b border-brand-border">
              <tr>
                <th className="py-3 px-4">योजना का नाम (Scheme)</th>
                <th className="py-3 px-4">श्रेणी व स्तर</th>
                <th className="py-3 px-4">स्थिति (Status)</th>
                <th className="py-3 px-4">अंतिम सत्यापन</th>
                <th className="py-3 px-4 text-right">कार्रवाई (Actions)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/60">
              {filteredSchemes.map((scheme) => (
                <tr key={scheme.slug || scheme._id} className="hover:bg-brand-warmBg/40 transition-colors">
                  <td className="py-3.5 px-4 max-w-xs">
                    <div className="font-bold text-brand-navy truncate">
                      {scheme.name}
                    </div>
                    <div className="text-[11px] text-brand-textMuted truncate">
                      {scheme.department}
                    </div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-brand-greenLight text-brand-green font-bold text-[10px]">
                      {scheme.category}
                    </span>
                    <span className="ml-1 text-[11px] text-brand-textMuted">
                      • {scheme.level} ({scheme.state})
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <select
                      value={scheme.status}
                      onChange={(e) => handleStatusChange(scheme, e.target.value)}
                      className="px-2 py-1 rounded-lg border border-brand-border bg-white text-[11px] font-semibold text-brand-navy focus:outline-none focus:border-brand-green"
                    >
                      <option value="PUBLISHED">PUBLISHED (प्रकाशित)</option>
                      <option value="VERIFIED">VERIFIED (सत्यापित)</option>
                      <option value="PENDING_REVIEW">PENDING_REVIEW</option>
                      <option value="DRAFT">DRAFT</option>
                      <option value="EXPIRED">EXPIRED</option>
                    </select>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap text-[11px] text-brand-textMuted">
                    {scheme.lastVerifiedAt
                      ? new Date(scheme.lastVerifiedAt).toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                      : 'Not set'}
                  </td>

                  <td className="py-3.5 px-4 text-right space-x-1 whitespace-nowrap">
                    {/* Instant Verify Action Button */}
                    <button
                      type="button"
                      onClick={() => handleVerify(scheme)}
                      title="सत्यापित करें और आज की तारीख सेट करें"
                      className="p-1.5 rounded-lg border border-brand-green bg-brand-greenLight text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </button>

                    {/* Edit Action Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(scheme)}
                      title="संपादित करें"
                      className="p-1.5 rounded-lg border border-brand-border bg-white text-brand-navy hover:border-brand-green transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete Action Button */}
                    <button
                      type="button"
                      onClick={() => handleDelete(scheme)}
                      title="हटाएं"
                      className="p-1.5 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Modal for Scheme Create / Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 my-8 max-h-[90vh] overflow-y-auto shadow-elevated border border-brand-border">
            
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <h3 className="text-lg font-bold text-brand-navy">
                {editingScheme ? 'योजना संपादित करें (Edit Scheme)' : 'नई योजना जोड़ें (Add New Scheme)'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-100">
                <X className="w-5 h-5 text-brand-textMuted" />
              </button>
            </div>

            <form onSubmit={handleSaveScheme} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-brand-navy mb-1">योजना का नाम (English) *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">योजना का नाम (हिन्दी)</label>
                  <input
                    type="text"
                    value={formData.nameHindi}
                    onChange={(e) => setFormData({ ...formData, nameHindi: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">श्रेणी (Category) *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  >
                    <option value="Education">Education</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Employment">Employment</option>
                    <option value="Women & Child">Women & Child</option>
                    <option value="Housing">Housing</option>
                    <option value="Health">Health</option>
                    <option value="Business">Business</option>
                    <option value="Social Welfare">Social Welfare</option>
                    <option value="Skills">Skills</option>
                    <option value="Financial Assistance">Financial Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">स्तर (Level)</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  >
                    <option value="Central">Central</option>
                    <option value="State">State</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">राज्य (State / All India)</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">विभाग / मंत्रालय (Department) *</label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-brand-navy mb-1">प्रमुख लाभ संक्षेप (Benefit Summary) *</label>
                <input
                  type="text"
                  required
                  value={formData.benefitSummary}
                  onChange={(e) => setFormData({ ...formData, benefitSummary: e.target.value })}
                  placeholder="उदा. ₹6,000 प्रति वर्ष 3 किस्तों में"
                  className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                />
              </div>

              <div>
                <label className="block font-bold text-brand-navy mb-1">संक्षिप्त विवरण (Short Description) *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-brand-navy mb-1">आधिकारिक स्रोत URL *</label>
                  <input
                    type="url"
                    required
                    value={formData.officialSourceUrl}
                    onChange={(e) => setFormData({ ...formData, officialSourceUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-navy mb-1">आधिकारिक आवेदन URL *</label>
                  <input
                    type="url"
                    required
                    value={formData.officialApplicationUrl}
                    onChange={(e) => setFormData({ ...formData, officialApplicationUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full p-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-brand-border">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-brand-border text-brand-navy hover:bg-slate-100"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-greenHover"
                >
                  {saving ? 'सहेजा जा रहा है...' : 'योजना सहेजें (Save)'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboardPage;
