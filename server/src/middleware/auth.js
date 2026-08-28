import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'yojnamitra_secret_jwt_key_2026_secure';

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'प्रमाणीकरण आवश्यक है (Authentication required).' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'अमान्य या समाप्त टोकन (Invalid or expired token).' });
  }
};

export const adminMiddleware = async (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'एडमिन अधिकार आवश्यक हैं (Admin access required).' });
  }
  next();
};

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id || user.id,
      email: user.email,
      name: user.name,
      role: user.role || 'citizen',
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};
