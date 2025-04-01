const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const connectDB = require('./config/db');
const socialRoutes = require('./routes/index'); // Asegúrate de importar las rutas correctas
const passport = require('passport');
require('./config/passportConfig'); // Importa la configuración de passport
const cors = require('cors');

// Swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

// Swagger Setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Publicaciones',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar usuarios, publicaciones, comentarios y likes.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.APP_PORT || 3000}`,
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./routes/*.js'], // Asegúrate de que esta ruta apunte a tu archivo de rutas
};

// Generar especificaciones Swagger
const swaggerSpec = swaggerJsdoc(options);

// Usar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/api', socialRoutes);

// Puerto del servidor
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
