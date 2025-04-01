const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { content, image } = req.body;

    // Verifica que el usuario esté autenticado
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Usuario no autenticado.' });
    }

    // Crea la nueva publicación
    const newPost = new Post({
      user: req.user.id, // Asigna el usuario autenticado
      content,
      image
    });

    await newPost.save();

    // Poblamos el campo `user` para devolver los datos del usuario junto con la publicación
    const populatedPost = await newPost.populate('user', 'name profilePicture');
    res.status(201).json(populatedPost);
  } catch (error) {
    console.error('Error al crear la publicación:', error);
    res.status(500).json({ error: error.message });
  }
};
  
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }

    // Verifica que el usuario autenticado sea el creador de la publicación
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "No tienes permiso para eliminar esta publicación" });
    }

    await post.deleteOne();
    res.json({ message: "Publicación eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'name profilePicture' },
      })
      .exec();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    res.status(500).json({ error: 'Error al obtener publicaciones' });
  }
};