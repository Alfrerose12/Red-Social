const express = require("express");
const passport = require("passport");
const router = express.Router();

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const likeController = require("../controllers/likeController");

// Rutas de Usuario (Autenticación y Perfil)
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", userController.getProfile);

// Rutas de Publicaciones
router.post("/posts", postController.createPost);
router.get("/posts", postController.getPosts);
router.delete("/posts/:id", postController.deletePost);

// Rutas de Comentarios
router.post("/comments", commentController.addComment);
router.get("/comments/:postId", commentController.getCommentsByPost);

// Rutas de Likes
router.post("/likes", likeController.likePost);
router.delete("/likes/:postId", likeController.unlikePost);

// Rutas de autenticación con Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:8100/tabs/inicio');
  }
);

module.exports = router;