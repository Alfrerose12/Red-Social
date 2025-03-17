const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Like', LikeSchema);