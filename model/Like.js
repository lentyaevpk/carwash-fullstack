const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

module.exports = Like = mongoose.model('Like', likeSchema)