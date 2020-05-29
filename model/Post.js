const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = Post = mongoose.model('posts', PostSchema)