const router = require('express').Router();
const {Post, Category, User, Comment} = require("../models/index")

router.get('/:postid', async (req, res)=>{
    try {
        const postId = req.params.postid
        const commentData = await Comment.findAll({include: {all:true, nested:true}, where: {post_id : postId}})
        const originalPost = await Post.findByPk(postId)

        const plainData = commentData.map((data)=>data.get({plain: true}))
        const plainPost = originalPost.get({plain:true})

        console.log(plainPost)

        res.render('comments', {plainData, plainPost})        
    }
    catch (err) {
        res.status(500).json({err})
    }
})

module.exports = router