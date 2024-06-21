import mongoose from 'mongoose';

const { Schema } = mongoose;

const adminSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlengh: 25,
    required: true,
  },
  email: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  password: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  gender: {
    type: String,
    maxlengh: 25,
  },
  age: {
    type: String,
    maxlengh: 25,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  },
  token: {
    type: String,
  },
});
const reportSchema = new mongoose.Schema({
  no: {
    type: Number,
  },
  name: {
    type: String,
    maxlengh: 255,
  },
  age: {
    type: Number,
    maxlengh: 2,
  },
  address: {
    type: String,
    maxlengh: 155,
  },
  date: {
    type: Date,
  },
  userId: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  report: {
    type: String,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
  },
});
const postSchema = new mongoose.Schema({
  writer: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  date: {
    type: Date,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
});
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  date: {
    type: Date,
  },
  location: {
    type: String,
  },
  time: {
    type: String,
  },
});

export const Admin =
  mongoose.models?.Admin || mongoose.model('Admin', adminSchema);
export const User =
  mongoose.models?.User || mongoose.model('User', userSchema);
export const Report =
  mongoose.models?.Report || mongoose.model('Report', reportSchema);
export const Post =
  mongoose.models?.Post || mongoose.model('Post', postSchema);
export const Event =
  mongoose.models?.Event || mongoose.model('Event', eventSchema);
