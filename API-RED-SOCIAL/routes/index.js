const express = require("express");
const passport = require("passport");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const likeController = require("../controllers/likeController");

// Rutas de Usuario (Autenticación y Perfil)
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos inválidos o usuario ya registrado
 */
router.post("/register", userController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión de usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales incorrectas
 */
router.post("/login", userController.login);

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Obtiene el perfil del usuario autenticado
 *     tags: [Usuarios]
 *     security:
 *       - Bearer: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *       401:
 *         description: Token no válido o no proporcionado
 */
router.get('/profile', authMiddleware, userController.getProfile);

/**
 * @swagger
 * /profile:
 *   put:
 *     summary: Actualiza el perfil del usuario autenticado
 *     tags: [Usuarios]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               profilePicture:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: Token no válido o no proporcionado
 */
router.put('/profile', authMiddleware, userController.updateProfile);

// Rutas de Publicaciones
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crea una nueva publicación
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Publicación creada
 *       400:
 *         description: Datos inválidos
 */
router.post("/posts", postController.createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtiene todas las publicaciones
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Listado de publicaciones
 */
router.get("/posts", postController.getPosts);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Elimina una publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la publicación a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Publicación eliminada exitosamente
 *       404:
 *         description: Publicación no encontrada
 */
router.delete("/posts/:id", postController.deletePost);

// Rutas de Comentarios
/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Agrega un comentario a una publicación
 *     tags: [Comentarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               postId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentario agregado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/comments", commentController.addComment);

/**
 * @swagger
 * /comments/{postId}:
 *   get:
 *     summary: Obtiene todos los comentarios de una publicación
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: ID de la publicación para obtener los comentarios
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Listado de comentarios
 */
router.get("/comments/:postId", commentController.getCommentsByPost);

// Rutas de Likes
/**
 * @swagger
 * /likes:
 *   post:
 *     summary: Da un like a una publicación
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Like dado exitosamente
 *       400:
 *         description: El like ya existe
 */
router.post("/likes", likeController.likePost);

/**
 * @swagger
 * /likes/{postId}:
 *   delete:
 *     summary: Elimina un like de una publicación
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: ID de la publicación para eliminar el like
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Like eliminado
 *       404:
 *         description: Like no encontrado
 */
router.delete("/likes/:postId", likeController.unlikePost);

// Rutas de autenticación con Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://localhost:8100/tabs/inicio');
  }
);

module.exports = router;
