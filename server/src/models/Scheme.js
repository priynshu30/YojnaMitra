import mongoose from 'mongoose';

const EligibilityRuleSchema = new mongoose.Schema({
  age: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 120 }
  },
  gender: {
    type: [String],
    default: ['male', 'female', 'other', 'all']
  },
  states: {
    type: [String],
    default: ['All India']
  },
  occupations: {
    type: [String],
    default: []
  },
  categories: {
    type: [String],
    default: ['SC', 'ST', 'OBC', 'GENERAL', 'ALL']
  },
  income: {
    max: { type: Number, default: null },
    min: { type: Number, default: 0 }
  },
  maritalStatus: {
    type: [String],
    default: []
  },
  residenceType: {
    type: [String],
    default: ['rural', 'urban', 'all']
  },
  disabilityOnly: {
    type: Boolean,
    default: false
  },
  extraConditions: [{
    key: String,
    label: String,
    required: Boolean
  }]
}, { _id: false });

const SchemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nameHindi: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  shortDescriptionHindi: {
    type: String,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  fullDescriptionHindi: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Education',
      'Agriculture',
      'Employment',
      'Women & Child',
      'Housing',
      'Health',
      'Business',
      'Social Welfare',
      'Skills',
      'Financial Assistance'
    ],
  },
  subCategory: {
    type: String,
    default: 'General'
  },
  level: {
    type: String,
    required: true,
    enum: ['Central', 'State'],
    default: 'Central',
  },
  state: {
    type: String,
    default: 'All India',
  },
  department: {
    type: String,
    required: true,
  },
  benefits: {
    type: [String],
    default: [],
  },
  benefitSummary: {
    type: String,
    required: true,
  },
  eligibilityRules: {
    type: EligibilityRuleSchema,
    default: () => ({}),
  },
  eligibilitySummary: {
    type: [String],
    default: []
  },
  documents: [{
    name: { type: String, required: true },
    description: String,
    isMandatory: { type: Boolean, default: true }
  }],
  applicationProcess: [{
    step: Number,
    title: String,
    description: String
  }],
  importantDates: {
    startDate: String,
    endDate: String,
    applicationStatus: {
      type: String,
      enum: ['Always Open', 'Application Active', 'Closed for Current Cycle', 'Upcoming'],
      default: 'Always Open'
    }
  },
  officialSourceUrl: {
    type: String,
    required: true,
  },
  officialApplicationUrl: {
    type: String,
    required: true,
  },
  sourceName: {
    type: String,
    required: true,
    default: 'Official Government Portal'
  },
  lastVerifiedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PENDING_REVIEW', 'VERIFIED', 'PUBLISHED', 'EXPIRED', 'ARCHIVED'],
    default: 'PUBLISHED',
  },
  tags: {
    type: [String],
    default: [],
  },
  faq: [{
    question: String,
    answer: String
  }],
  language: {
    type: String,
    default: 'hi-IN'
  },
  isDemo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
});

SchemeSchema.index({ name: 'text', shortDescription: 'text', tags: 'text', department: 'text' });

export default mongoose.models.Scheme || mongoose.model('Scheme', SchemeSchema);
