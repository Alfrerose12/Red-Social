const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { 
    type: String, 
    required: function() { return this.provider === 'local'; } 
  },
  provider: { type: String, enum: ['local', 'google'], default: 'local' },
  googleId: { type: String, unique: true, sparse: true }, 
  profilePicture: { type: String, default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);  