import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const SavedSchemesContext = createContext();

export const SavedSchemesProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [savedSlugs, setSavedSlugs] = useState(() => {
    try {
      const local = localStorage.getItem('yojnamitra_saved_schemes');
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });

  const [documentStatus, setDocumentStatus] = useState(() => {
    try {
      const local = localStorage.getItem('yojnamitra_doc_status');
      return local ? JSON.parse(local) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('yojnamitra_saved_schemes', JSON.stringify(savedSlugs));
  }, [savedSlugs]);

  useEffect(() => {
    localStorage.setItem('yojnamitra_doc_status', JSON.stringify(documentStatus));
  }, [documentStatus]);

  const toggleSave = async (schemeSlug) => {
    const isCurrentlySaved = savedSlugs.includes(schemeSlug);
    let newSaved;
    if (isCurrentlySaved) {
      newSaved = savedSlugs.filter(s => s !== schemeSlug);
    } else {
      newSaved = [...savedSlugs, schemeSlug];
    }
    setSavedSlugs(newSaved);

    if (isAuthenticated) {
      try {
        await api.post(`/auth/saved-schemes/${schemeSlug}`);
      } catch (err) {
        console.warn('Sync with server failed, stored in local browser state.');
      }
    }
    return !isCurrentlySaved;
  };

  const isSaved = (schemeSlug) => savedSlugs.includes(schemeSlug);

  const toggleDocumentCheck = (schemeSlug, docName) => {
    const key = `${schemeSlug}_${docName}`;
    setDocumentStatus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDocReady = (schemeSlug, docName) => {
    const key = `${schemeSlug}_${docName}`;
    return !!documentStatus[key];
  };

  return (
    <SavedSchemesContext.Provider value={{
      savedSlugs,
      toggleSave,
      isSaved,
      toggleDocumentCheck,
      isDocReady,
      savedCount: savedSlugs.length
    }}>
      {children}
    </SavedSchemesContext.Provider>
  );
};

export const useSavedSchemes = () => useContext(SavedSchemesContext);
