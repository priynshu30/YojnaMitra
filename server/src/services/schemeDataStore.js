import Scheme from '../models/Scheme.js';
import { demoSchemes } from '../seeds/seedData.js';
import { getDBStatus } from '../config/db.js';

// In-memory collection initialized from demo schemes
let memorySchemes = demoSchemes.map((s, idx) => ({
  ...s,
  _id: `mem_scheme_${idx + 1}`,
  id: `mem_scheme_${idx + 1}`,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

export const getAllSchemes = async ({
  search = '',
  category = '',
  level = '',
  state = '',
  status = 'PUBLISHED',
  beneficiary = '',
  sort = 'relevance',
  page = 1,
  limit = 12,
  includeUnpublished = false
}) => {
  const { isFallbackMode } = getDBStatus();

  if (!isFallbackMode) {
    try {
      const query = {};
      if (!includeUnpublished) {
        query.status = 'PUBLISHED';
      } else if (status) {
        query.status = status;
      }

      if (category && category !== 'All') {
        query.category = category;
      }

      if (level && level !== 'All') {
        query.level = level;
      }

      if (state && state !== 'All India' && state !== 'All') {
        query.$or = [{ state: state }, { state: 'All India' }, { level: 'Central' }];
      }

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { nameHindi: { $regex: search, $options: 'i' } },
          { shortDescription: { $regex: search, $options: 'i' } },
          { shortDescriptionHindi: { $regex: search, $options: 'i' } },
          { department: { $regex: search, $options: 'i' } },
          { tags: { $in: [new RegExp(search, 'i')] } }
        ];
      }

      let sortOption = { lastVerifiedAt: -1 };
      if (sort === 'newest') sortOption = { createdAt: -1 };
      if (sort === 'name') sortOption = { name: 1 };

      const skip = (Number(page) - 1) * Number(limit);
      const total = await Scheme.countDocuments(query);
      const schemes = await Scheme.find(query)
        .sort(sortOption)
        .skip(skip)
        .limit(Number(limit))
        .lean();

      return {
        schemes,
        pagination: {
          total,
          page: Number(page),
          pages: Math.ceil(total / Number(limit)),
          limit: Number(limit)
        }
      };
    } catch (e) {
      console.warn('Fallback to memory store due to Mongo error:', e.message);
    }
  }

  // Memory mode evaluation
  let filtered = [...memorySchemes];

  if (!includeUnpublished) {
    filtered = filtered.filter(s => s.status === 'PUBLISHED' || s.status === 'VERIFIED');
  } else if (status && status !== 'ALL') {
    filtered = filtered.filter(s => s.status === status);
  }

  if (category && category !== 'All') {
    filtered = filtered.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (level && level !== 'All') {
    filtered = filtered.filter(s => s.level.toLowerCase() === level.toLowerCase());
  }

  if (state && state !== 'All India' && state !== 'All') {
    filtered = filtered.filter(s => s.state === state || s.state === 'All India' || s.level === 'Central');
  }

  if (beneficiary && beneficiary !== 'all') {
    filtered = filtered.filter(s => {
      const occ = (s.eligibilityRules?.occupations || []).map(o => o.toLowerCase());
      return occ.length === 0 || occ.includes(beneficiary.toLowerCase()) || occ.includes('all') || occ.includes('any');
    });
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(s =>
      (s.name && s.name.toLowerCase().includes(q)) ||
      (s.nameHindi && s.nameHindi.toLowerCase().includes(q)) ||
      (s.shortDescription && s.shortDescription.toLowerCase().includes(q)) ||
      (s.department && s.department.toLowerCase().includes(q)) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  if (sort === 'newest') {
    filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  } else if (sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => new Date(b.lastVerifiedAt || 0) - new Date(a.lastVerifiedAt || 0));
  }

  const total = filtered.length;
  const skip = (Number(page) - 1) * Number(limit);
  const pagedSchemes = filtered.slice(skip, skip + Number(limit));

  return {
    schemes: pagedSchemes,
    pagination: {
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)) || 1,
      limit: Number(limit)
    }
  };
};

export const getSchemeBySlug = async (slug) => {
  const { isFallbackMode } = getDBStatus();
  if (!isFallbackMode) {
    try {
      const scheme = await Scheme.findOne({ slug: slug.toLowerCase() }).lean();
      if (scheme) return scheme;
    } catch (e) {
      console.warn('Mongo findOne error:', e.message);
    }
  }

  return memorySchemes.find(s => s.slug === slug.toLowerCase() || s._id === slug || s.id === slug) || null;
};

export const createScheme = async (schemeData) => {
  const slug = schemeData.slug || schemeData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const newScheme = {
    ...schemeData,
    slug,
    _id: `mem_scheme_${Date.now()}`,
    id: `mem_scheme_${Date.now()}`,
    lastVerifiedAt: schemeData.lastVerifiedAt || new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  memorySchemes.unshift(newScheme);

  const { isFallbackMode } = getDBStatus();
  if (!isFallbackMode) {
    try {
      return await Scheme.create(newScheme);
    } catch (e) {
      console.warn('Mongo create error:', e.message);
    }
  }

  return newScheme;
};

export const updateScheme = async (id, updateData) => {
  const index = memorySchemes.findIndex(s => s._id === id || s.id === id || s.slug === id);
  if (index !== -1) {
    memorySchemes[index] = {
      ...memorySchemes[index],
      ...updateData,
      updatedAt: new Date()
    };
  }

  const { isFallbackMode } = getDBStatus();
  if (!isFallbackMode) {
    try {
      return await Scheme.findOneAndUpdate({ $or: [{ _id: id }, { slug: id }] }, updateData, { new: true });
    } catch (e) {
      console.warn('Mongo update error:', e.message);
    }
  }

  return memorySchemes[index] || null;
};

export const deleteScheme = async (id) => {
  memorySchemes = memorySchemes.filter(s => s._id !== id && s.id !== id && s.slug !== id);

  const { isFallbackMode } = getDBStatus();
  if (!isFallbackMode) {
    try {
      await Scheme.findOneAndDelete({ $or: [{ _id: id }, { slug: id }] });
    } catch (e) {
      console.warn('Mongo delete error:', e.message);
    }
  }

  return true;
};

export const getRawAllSchemesForEvaluation = async () => {
  const { isFallbackMode } = getDBStatus();
  if (!isFallbackMode) {
    try {
      const schemes = await Scheme.find({ status: { $in: ['PUBLISHED', 'VERIFIED'] } }).lean();
      if (schemes && schemes.length > 0) return schemes;
    } catch (e) {
      console.warn('Mongo fetch for evaluation error:', e.message);
    }
  }
  return memorySchemes.filter(s => s.status === 'PUBLISHED' || s.status === 'VERIFIED');
};
