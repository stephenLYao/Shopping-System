const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    minlength: 3
  },
  email: {
    type: String,
    unique: true,
    require: true
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

module.exports = User;
