const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  provider: { type: String, default: 'local' }, // Indica si es local o de un proveedor como Google/Facebook
  profilePicture: { type: String, default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' }, // Foto de perfil predeterminada
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);