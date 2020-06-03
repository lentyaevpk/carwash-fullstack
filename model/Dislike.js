const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dislikeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

module.exports = Dislike = mongoose.model('Dislike', dislikeSchema)