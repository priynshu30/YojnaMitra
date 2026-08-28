import mongoose from 'mongoose';

let isConnected = false;
let isFallbackMode = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yojnamitra';
  
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2500,
    });
    isConnected = true;
    isFallbackMode = false;
    console.log(`[YojnaMitra DB] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[YojnaMitra DB] MongoDB not reachable at ${mongoUri}. Operating in High-Speed In-Memory Hybrid Mode.`);
    isConnected = false;
    isFallbackMode = true;
  }
};

export const getDBStatus = () => ({
  isConnected,
  isFallbackMode,
});
