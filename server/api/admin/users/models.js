import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  createAt: String,
  avatar: String
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
