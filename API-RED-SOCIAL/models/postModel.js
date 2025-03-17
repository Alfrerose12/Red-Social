const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: { type: String},
    image: {type: String}, //URL de la imagen
    createdAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Post', PostSchema);