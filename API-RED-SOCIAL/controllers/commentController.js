const Comment = require("../models/commentModel");

exports.addComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    const newComment = new Comment({ text, post: postId, user: req.user.id });
    await newComment.save();
    res.json(newComment);
  } catch (error) {
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