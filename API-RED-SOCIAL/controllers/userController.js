const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


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
    if (password.length < 9) {
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
      const { userId } = req.body; // Recibe el userId desde el cuerpo de la solicitud
      if (!userId) {
        return res.status(400).json({ message: 'Se requiere el ID del usuario' });
      }
  
      // Busca al usuario en la base de datos
      const user = await User.findById(userId).select('-password'); // Excluye la contraseña
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Mapea _id a id antes de enviar la respuesta
      const userProfile = {
        id: user._id, // Mapea _id a id
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