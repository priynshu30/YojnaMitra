import { getLiveGovAnnouncements, runSchemeAutoSyncJob } from '../services/schemeAutoSyncService.js';

/**
 * GET /api/admin/sync/announcements
 * Returns live PIB & official government scheme announcements
 */
export const getAnnouncements = async (req, res) => {
  try {
    const result = await getLiveGovAnnouncements();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Auto-sync fetch failed.', error: error.message });
  }
};

/**
 * POST /api/admin/sync/run
 * Trigger scheme verification & sync job
 */
export const triggerSync = async (req, res) => {
  try {
    const result = await runSchemeAutoSyncJob();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Auto-sync job failed.', error: error.message });
  }
};
