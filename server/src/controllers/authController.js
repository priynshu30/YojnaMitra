import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../middleware/auth.js';
import { getDBStatus } from '../config/db.js';

// In-memory user store for memory mode
const memoryUsers = [
  {
    id: 'user_admin_1',
    _id: 'user_admin_1',
    name: 'YojnaMitra Admin',
    email: 'admin@yojnamitra.in',
    passwordHash: '$2a$10$tZ2R86k8xHaui8sXfI8x2.3m/bWkP9/j07G706nOQcSmPjF7aQhXG', // Admin@123
    role: 'admin',
    language: 'hi',
    savedSchemes: []
  },
  {
    id: 'user_citizen_1',
    _id: 'user_citizen_1',
    name: 'Ramesh Sharma',
    email: 'citizen@yojnamitra.in',
    passwordHash: '$2a$10$2l1ZJg/8P4gSgUcb5z2PFeG/BvhO3O9WbM35Lg7wD6lI2jZ5Z2kfa', // User@123
    role: 'citizen',
    language: 'hi',
    profile: {
      age: 38,
      gender: 'male',
      state: 'Uttar Pradesh',
      occupation: 'farmer',
      income: 180000,
      category: 'OBC',
      residenceType: 'rural',
      maritalStatus: 'married',
      disabilityStatus: false
    },
    savedSchemes: []
  }
];

export const register = async (req, res) => {
  try {
    const { name, email, password, profile } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'कृपया नाम, ईमेल एवं पासवर्ड दर्ज करें.' });
    }

    const { isFallbackMode } = getDBStatus();

    // Check if user already exists
    if (!isFallbackMode) {
      const existing = await User.findOne({ email: email.toLowerCase() });
      if (existing) {
        return res.status(400).json({ success: false, message: 'यह ईमेल पहले से पंजीकृत है (Email already registered).' });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email: email.toLowerCase(),
        passwordHash,
        role: 'citizen',
        profile: profile || {},
        savedSchemes: []
      });

      const token = generateToken(user);

      return res.status(201).json({
        success: true,
        message: 'पंजीकरण सफल रहा!',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profile: user.profile,
          savedSchemes: user.savedSchemes
        }
      });
    }

    // Memory Mode
    const memExist = memoryUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (memExist) {
      return res.status(400).json({ success: false, message: 'यह ईमेल पहले से पंजीकृत है.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      id: `mem_user_${Date.now()}`,
      _id: `mem_user_${Date.now()}`,
      name,
      email: email.toLowerCase(),
      passwordHash,
      role: 'citizen',
      language: 'hi',
      profile: profile || {},
      savedSchemes: []
    };

    memoryUsers.push(newUser);
    const token = generateToken(newUser);

    res.status(201).json({
      success: true,
      message: 'पंजीकरण सफल रहा!',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        profile: newUser.profile,
        savedSchemes: newUser.savedSchemes
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'पंजीकरण में समस्या हुई.', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'कृपया ईमेल और पासवर्ड दोनों दर्ज करें.' });
    }

    const { isFallbackMode } = getDBStatus();

    // Default fast-track login for seeded credentials in memory mode
    if (email.toLowerCase() === 'admin@yojnamitra.in' && password === 'Admin@123') {
      const adminUser = memoryUsers[0];
      const token = generateToken(adminUser);
      return res.json({
        success: true,
        message: 'एडमिन लॉगिन सफल!',
        token,
        user: {
          id: adminUser.id || adminUser._id,
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role,
          profile: adminUser.profile || {},
          savedSchemes: adminUser.savedSchemes || []
        }
      });
    }

    if (email.toLowerCase() === 'citizen@yojnamitra.in' && password === 'User@123') {
      const demoUser = memoryUsers[1];
      const token = generateToken(demoUser);
      return res.json({
        success: true,
        message: 'नागरिक लॉगिन सफल!',
        token,
        user: {
          id: demoUser.id || demoUser._id,
          name: demoUser.name,
          email: demoUser.email,
          role: demoUser.role,
          profile: demoUser.profile || {},
          savedSchemes: demoUser.savedSchemes || []
        }
      });
    }

    let user = null;
    if (!isFallbackMode) {
      user = await User.findOne({ email: email.toLowerCase() });
    } else {
      user = memoryUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    }

    if (!user) {
      return res.status(401).json({ success: false, message: 'गलत ईमेल अथवा पासवर्ड (Invalid credentials).' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'गलत ईमेल अथवा पासवर्ड.' });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      message: 'लॉगिन सफल!',
      token,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile,
        savedSchemes: user.savedSchemes
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'लॉगिन में समस्या हुई.', error: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const { isFallbackMode } = getDBStatus();

    let user = null;
    if (!isFallbackMode) {
      user = await User.findById(userId).select('-passwordHash');
    } else {
      user = memoryUsers.find(u => u.id === userId || u._id === userId);
    }

    if (!user) {
      return res.status(404).json({ success: false, message: 'उपयोगकर्ता उपलब्ध नहीं है.' });
    }

    res.json({
      success: true,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile || {},
        savedSchemes: user.savedSchemes || []
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'प्रोफ़ाइल लोड करने में त्रुटि.' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { profile, language, name } = req.body;
    const { isFallbackMode } = getDBStatus();

    if (!isFallbackMode) {
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: { profile, language, name } },
        { new: true }
      ).select('-passwordHash');

      return res.json({ success: true, message: 'प्रोफ़ाइल सफलतापूर्वक अपडेट हुई.', user });
    }

    const user = memoryUsers.find(u => u.id === userId || u._id === userId);
    if (user) {
      if (profile) user.profile = { ...user.profile, ...profile };
      if (language) user.language = language;
      if (name) user.name = name;
    }

    res.json({ success: true, message: 'प्रोफ़ाइल सफलतापूर्वक अपडेट हुई.', user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'प्रोफ़ाइल अपडेट करने में त्रुटि.' });
  }
};

export const toggleSaveScheme = async (req, res) => {
  try {
    const userId = req.user.id;
    const { schemeId, schemeSlug } = req.params;
    const slugToSave = schemeSlug || schemeId;

    const user = memoryUsers.find(u => u.id === userId || u._id === userId);
    if (!user.savedSchemes) user.savedSchemes = [];

    const existsIndex = user.savedSchemes.findIndex(s => s.schemeSlug === slugToSave || s.schemeId === slugToSave);

    if (existsIndex > -1) {
      user.savedSchemes.splice(existsIndex, 1);
      return res.json({ success: true, isSaved: false, message: 'योजना बुकमार्क से हटा दी गई.', savedSchemes: user.savedSchemes });
    } else {
      user.savedSchemes.push({
        schemeSlug: slugToSave,
        schemeId: slugToSave,
        savedAt: new Date(),
        documentChecklist: []
      });
      return res.json({ success: true, isSaved: true, message: 'योजना सफलतापूर्वक सुरक्षित की गई!', savedSchemes: user.savedSchemes });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना सुरक्षित करने में त्रुटि.' });
  }
};
