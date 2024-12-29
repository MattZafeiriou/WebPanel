const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  role: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;