import express from 'express';
import {
  getAdminDashboard,
  getAdminSchemes,
  createAdminScheme,
  updateAdminScheme,
  deleteAdminScheme,
  updateSchemeStatus,
  verifyScheme
} from '../controllers/adminController.js';
import { getAnnouncements, triggerSync } from '../controllers/syncController.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Protect all admin endpoints with auth + admin checks
router.use(authMiddleware, adminMiddleware);

router.get('/dashboard', getAdminDashboard);
router.get('/schemes', getAdminSchemes);
router.post('/schemes', createAdminScheme);
router.put('/schemes/:id', updateAdminScheme);
router.delete('/schemes/:id', deleteAdminScheme);
router.patch('/schemes/:id/status', updateSchemeStatus);
router.patch('/schemes/:id/verify', verifyScheme);

// Auto-Sync: Live PIB / Government Announcements
router.get('/sync/announcements', getAnnouncements);
router.post('/sync/run', triggerSync);

export default router;
