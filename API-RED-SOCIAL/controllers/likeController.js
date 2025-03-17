const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
    try {
      const { postId, user } = req.body; // Asegúrate de que el usuario se envíe en el cuerpo de la solicitud
  
      const existingLike = await Like.findOne({ post: postId, user });
      if (existingLike) return res.status(400).json({ message: "Ya diste like a esta publicación" });
  
      const newLike = new Like({ post: postId, user });
      await newLike.save();
      res.json(newLike);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.unlikePost = async (req, res) => {
    try {
      const { user } = req.body; // Asegúrate de que el usuario se envíe en el cuerpo de la solicitud
      const like = await Like.findOneAndDelete({ post: req.params.postId, user });
  
      if (!like) return res.status(404).json({ message: "Like no encontrado" });
  
      res.json({ message: "Like eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

