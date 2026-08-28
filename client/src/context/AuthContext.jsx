import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('yojnamitra_token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await api.get('/auth/me');
        if (res.data && res.data.user) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.warn('Session expired or invalid token');
        localStorage.removeItem('yojnamitra_token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    if (res.data && res.data.token) {
      localStorage.setItem('yojnamitra_token', res.data.token);
      setUser(res.data.user);
      return res.data.user;
    }
  };

  const register = async (name, email, password, profile) => {
    const res = await api.post('/auth/register', { name, email, password, profile });
    if (res.data && res.data.token) {
      localStorage.setItem('yojnamitra_token', res.data.token);
      setUser(res.data.user);
      return res.data.user;
    }
  };

  const logout = () => {
    localStorage.removeItem('yojnamitra_token');
    setUser(null);
  };

  const updateUserProfile = async (profileData) => {
    const res = await api.put('/auth/profile', profileData);
    if (res.data && res.data.user) {
      setUser(res.data.user);
    }
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUserProfile, isAuthenticated: !!user, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
