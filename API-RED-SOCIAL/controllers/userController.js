const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'El correo ya está registrado' });
      }
  
      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear el nuevo usuario
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Verificar si el usuario existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      // Enviar respuesta con los datos del usuario
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};