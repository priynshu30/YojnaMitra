import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['citizen', 'admin'],
    default: 'citizen',
  },
  language: {
    type: String,
    default: 'hi',
  },
  profile: {
    age: Number,
    gender: String,
    state: String,
    district: String,
    occupation: String,
    income: Number,
    category: String,
    maritalStatus: String,
    residenceType: String,
    disabilityStatus: Boolean,
  },
  savedSchemes: [{
    schemeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme' },
    schemeSlug: String,
    savedAt: { type: Date, default: Date.now },
    documentChecklist: [{
      docName: String,
      isReady: Boolean,
    }]
  }],
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
