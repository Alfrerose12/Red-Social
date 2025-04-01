const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Publicaciones',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar usuarios, publicaciones, comentarios y likes.',
    },
    servers: [{
      url: 'http://localhost:5000',
      description: 'Servidor de desarrollo'
    }],
  },
  apis: ['./routes/*.js'], // Rutas de tus controladores
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
