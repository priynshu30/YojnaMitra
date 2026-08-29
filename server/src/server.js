import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB, getDBStatus } from './config/db.js';
import schemeRoutes from './routes/schemeRoutes.js';
import eligibilityRoutes from './routes/eligibilityRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { startSchemeSyncCron } from './services/schemeAutoSyncService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Connect Database (with automatic fallback to Memory store)
connectDB();

// 🔄 Start Automatic Scheme Sync Cron Job (runs every 6 hours)
// Fetches latest PIB & official government scheme announcements
startSchemeSyncCron();

// API Health / Status
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'healthy',
    service: 'YojnaMitra Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    database: dbStatus.isConnected ? 'MongoDB Connected' : 'In-Memory Resilient Mode',
    disclaimer: 'YojnaMitra is an independent platform and not affiliated with the government.'
  });
});

// Mount Routes
app.use('/api/schemes', schemeRoutes);
app.use('/api/eligibility', eligibilityRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production' || process.env.RENDER || process.env.PORT) {
  app.listen(PORT, () => {
    console.log(`[YojnaMitra Server] Running on http://localhost:${PORT}`);
  });
}

export default app;
