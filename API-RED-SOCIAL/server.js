const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const connectDB = require('./config/db');
const socialRoutes = require('./routes/socialRoute');
const passport = require('passport');
require('./config/passportConfig'); // Importa la configuración de passport
const cors = require('cors');

// Configuración de variables de entorno
dotenv.config();

// Conexión a la base de datos
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Configuración de express-session (debe ir antes de passport.session())
app.use(
  session({
    secret: 'mi_secreto_seguro', // Cambia esto por una clave segura
    resave: false,
    saveUninitialized: false,
  })
);


// Rutas de la API
app.use('/api', socialRoutes);

// Puerto del servidor
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));