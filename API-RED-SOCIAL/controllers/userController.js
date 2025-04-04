const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Por favor ingrese un email válido' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 9 caracteres' });
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

// Iniciar sesión
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

    // Generar token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{ expiresIn: '1h' });
    res.json({ message: 'Inicio de sesión exitoso',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        } ,token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener perfil del usuario
exports.getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); 
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      const userProfile = {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
      };
  
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el perfil del usuario' });
    }
  };

  // Editar datos del usuario
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, profilePicture } = req.body;

    // Validar formato de email si se proporciona
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Por favor ingrese un email válido' });
      }
    }

    // Actualizar los datos del usuario
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, // ID del usuario autenticado
      { name, email, profilePicture }, // Campos a actualizar
      { new: true, runValidators: true } // Retornar el usuario actualizado y validar los datos
    ).select('-password'); // Excluir la contraseña del resultado

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({
      message: 'Perfil actualizado exitosamente',
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el perfil del usuario' });
  }
};