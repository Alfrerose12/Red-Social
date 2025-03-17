const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
      const { user, content, image } = req.body;
  
      // Validar campos obligatorios
      if (!user || !content) {
        return res.status(400).json({ message: "El usuario y el contenido son obligatorios" });
      }
  
      const newPost = new Post({ user, content, image });
      await newPost.save();
      res.status(201).json(newPost); // Cambiar a 201 para indicar que se creó un recurso
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Publicación no encontrada" });
      }
  
      await post.deleteOne();
      res.json({ message: "Publicación eliminada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name").sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};