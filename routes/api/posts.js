const express = require('express')
const Post = require('../../model/Post')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
    return res.json(await Post.find({}))
})

//Add Posts
router.post('/', (req, res) => {
    let { name, text, createdAt } = req.body

    let newPost = new Post({
        name,
        text,
        createdAt
    })

    newPost.save().then(post => {
        return res.json({
            success: true,
            msg: 'Post added'
        }).catch(err => {})
    })
})

module.exports = router