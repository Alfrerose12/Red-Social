const Comment = require("../models/commentModel");

exports.addComment = async (req, res) => {
  try {
    const { text, postId } = req.body;

    if (!text || !postId) {
      return res.status(400).json({ message: 'El texto del comentario y el ID de la publicación son obligatorios.' });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Usuario no autenticado.' });
    }

    const newComment = new Comment({
      text,
      post: postId,
      user: req.user.id, // Asigna el usuario autenticado
    });

    await newComment.save();

    // Poblamos el campo `user` para devolver los datos del usuario junto con el comentario
    const populatedComment = await newComment.populate('user', 'name profilePicture');
    res.status(201).json(populatedComment);
  } catch (error) {
    console.error('Error al agregar el comentario:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate("user", "name");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};