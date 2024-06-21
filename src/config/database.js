import mongoose from 'mongoose';

const database_url = 'mongodb://127.0.0.1:27017/db_lapakktpa';

export const database = mongoose.connect(database_url);
