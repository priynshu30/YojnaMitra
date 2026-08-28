import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Scheme from '../models/Scheme.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { demoSchemes } from './seedData.js';

dotenv.config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yojnamitra';

export const runSeed = async () => {
  try {
    console.log('[Seed] Connecting to MongoDB...');
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 3000 });
    console.log('[Seed] Connected successfully.');

    // Clear existing schemes and seed demo schemes
    await Scheme.deleteMany({});
    console.log('[Seed] Cleaned existing schemes.');

    const createdSchemes = await Scheme.insertMany(demoSchemes);
    console.log(`[Seed] Successfully inserted ${createdSchemes.length} authentic DEMO schemes.`);

    // Seed default admin and demo user
    await User.deleteMany({});
    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash('Admin@123', salt);
    const userPassword = await bcrypt.hash('User@123', salt);

    await User.create([
      {
        name: 'YojnaMitra Admin',
        email: 'admin@yojnamitra.in',
        passwordHash: adminPassword,
        role: 'admin',
        language: 'hi'
      },
      {
        name: 'Ramesh Sharma',
        email: 'citizen@yojnamitra.in',
        passwordHash: userPassword,
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
        }
      }
    ]);
    console.log('[Seed] Created default admin (admin@yojnamitra.in / Admin@123) and demo citizen.');

    console.log('[Seed] Database initialization complete!');
    if (process.argv[1].endsWith('seed.js')) {
      process.exit(0);
    }
  } catch (error) {
    console.warn('[Seed] Note: MongoDB connection skipped or failed:', error.message);
    console.log('[Seed] Memory mode is active with in-memory demo schemes.');
    if (process.argv[1].endsWith('seed.js')) {
      process.exit(0);
    }
  }
};

if (process.argv[1] && process.argv[1].includes('seed.js')) {
  runSeed();
}
