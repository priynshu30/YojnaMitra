import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import SchemesPage from './pages/Schemes/SchemesPage';
import SchemeDetailPage from './pages/SchemeDetails/SchemeDetailPage';
import EligibilityWizardPage from './pages/Eligibility/EligibilityWizardPage';
import ResultsPage from './pages/Results/ResultsPage';
import AboutPage from './pages/About/AboutPage';
import FAQPage from './pages/FAQ/FAQPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import SavedSchemesPage from './pages/SavedSchemes/SavedSchemesPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import PdfToolsPage from './pages/PdfTools/PdfToolsPage';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { SavedSchemesProvider } from './context/SavedSchemesContext';

// Scroll to top upon route navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <SavedSchemesProvider>
            <div className="flex flex-col min-h-screen bg-brand-warmBg text-brand-textMain font-sans antialiased selection:bg-brand-green selection:text-white">
              <ScrollToTop />
              <Navbar />
              
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/schemes" element={<SchemesPage />} />
                  <Route path="/schemes/:slug" element={<SchemeDetailPage />} />
                  <Route path="/eligibility" element={<EligibilityWizardPage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/pdf-tools" element={<PdfToolsPage />} />
                  <Route path="/document-tools" element={<PdfToolsPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/saved-schemes" element={<SavedSchemesPage />} />
                  <Route path="/admin" element={<AdminDashboardPage />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </SavedSchemesProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
