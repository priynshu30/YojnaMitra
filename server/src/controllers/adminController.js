import {
  getAllSchemes,
  createScheme,
  updateScheme,
  deleteScheme,
  getRawAllSchemesForEvaluation
} from '../services/schemeDataStore.js';

export const getAdminDashboard = async (req, res) => {
  try {
    const all = await getRawAllSchemesForEvaluation();
    const result = await getAllSchemes({ includeUnpublished: true, limit: 100 });
    const schemes = result.schemes;

    const totalSchemes = schemes.length;
    const verifiedSchemes = schemes.filter(s => s.status === 'VERIFIED' || s.status === 'PUBLISHED').length;
    const publishedSchemes = schemes.filter(s => s.status === 'PUBLISHED').length;
    const draftSchemes = schemes.filter(s => s.status === 'DRAFT').length;
    const pendingReview = schemes.filter(s => s.status === 'PENDING_REVIEW').length;
    const expiredSchemes = schemes.filter(s => s.status === 'EXPIRED').length;

    // Schemes that need verification (older than 30 days or pending)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const needsVerification = schemes.filter(s => 
      !s.lastVerifiedAt || new Date(s.lastVerifiedAt) < thirtyDaysAgo || s.status === 'PENDING_REVIEW'
    );

    res.json({
      success: true,
      data: {
        metrics: {
          totalSchemes,
          verifiedSchemes,
          publishedSchemes,
          draftSchemes,
          pendingReview,
          expiredSchemes,
          needsVerificationCount: needsVerification.length
        },
        recentSchemes: schemes.slice(0, 8),
        needsVerificationList: needsVerification.slice(0, 5)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'डैशबोर्ड डेटा लोड करने में त्रुटि.', error: error.message });
  }
};

export const getAdminSchemes = async (req, res) => {
  try {
    const { status, category, search, page = 1, limit = 50 } = req.query;
    const result = await getAllSchemes({
      status,
      category,
      search,
      page,
      limit,
      includeUnpublished: true
    });

    res.json({
      success: true,
      data: result.schemes,
      pagination: result.pagination
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना सूची लोड करने में त्रुटि.', error: error.message });
  }
};

export const createAdminScheme = async (req, res) => {
  try {
    const schemeData = req.body;
    if (!schemeData.name || !schemeData.category || !schemeData.department || !schemeData.officialSourceUrl) {
      return res.status(400).json({
        success: false,
        message: 'आवश्यक फ़ील्ड (नाम, श्रेणी, विभाग, आधिकारिक स्रोत URL) अनिवार्य हैं।'
      });
    }

    const scheme = await createScheme(schemeData);
    res.status(201).json({
      success: true,
      message: 'योजना सफलतापूर्वक जोड़ी गई!',
      data: scheme
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना बनाने में त्रुटि.', error: error.message });
  }
};

export const updateAdminScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updated = await updateScheme(id, updateData);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'योजना नहीं मिली.' });
    }

    res.json({
      success: true,
      message: 'योजना सफलतापूर्वक अपडेट की गई!',
      data: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना अपडेट करने में त्रुटि.', error: error.message });
  }
};

export const deleteAdminScheme = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteScheme(id);
    res.json({
      success: true,
      message: 'योजना हटा दी गई.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'योजना हटाने में त्रुटि.' });
  }
};

export const updateSchemeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ['DRAFT', 'PENDING_REVIEW', 'VERIFIED', 'PUBLISHED', 'EXPIRED', 'ARCHIVED'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: 'अमान्य स्थिति (Invalid status).' });
    }

    const updated = await updateScheme(id, { status });
    res.json({
      success: true,
      message: `योजना स्थिति बदलकर ${status} कर दी गई.`,
      data: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'स्थिति अपडेट करने में त्रुटि.' });
  }
};

export const verifyScheme = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateScheme(id, {
      status: 'PUBLISHED',
      lastVerifiedAt: new Date(),
    });

    res.json({
      success: true,
      message: 'योजना को आधिकारिक रूप से सत्यापित एवं प्रकाशित किया गया!',
      data: updated
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'सत्यापन करने में त्रुटि.' });
  }
};
