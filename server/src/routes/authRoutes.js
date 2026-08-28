import express from 'express';
import { register, login, getMe, updateProfile, toggleSaveScheme } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);
router.put('/profile', authMiddleware, updateProfile);
router.post('/saved-schemes/:schemeSlug', authMiddleware, toggleSaveScheme);

export default router;
