import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
  admin: {
    type: Boolean,
    default: false,
    require: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;
