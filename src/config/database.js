import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const database_url = 'mongodb://127.0.0.1:27017/db_lapakktpa';

export const database = mongoose.connect(
  process.env.MONGODB_CONNECT_URL
);
