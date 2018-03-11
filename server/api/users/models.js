import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: Number,
  username: {
    type: String,
    unique: true,
    require: true,
    minlength: 3
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  createAt: String
});

const User = mongoose.model('User', userSchema);

export default User;
