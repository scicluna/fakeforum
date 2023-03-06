const router = require('express').Router();
const {Post, Category, User, Comment} = require("../models/index")

router.get('/:postid', async (req, res)=>{
    try {

        if (!req.session.loggedIn) return res.redirect('/login')

        const postId = req.params.postid
        const commentData = await Comment.findAll({include: {all:true, nested:true}, where: {post_id : postId}})
        const originalPost = await Post.findByPk(postId)

        const plainComments = commentData.map((data)=>data.get({plain: true}))
        const plainPost = originalPost.get({plain:true})

        res.render('comments', {plainComments, plainPost, loggedIn: req.session.loggedIn})        
    }
    catch (err) {
        res.status(500).json({err})
    }
})

router.post('/', async (req, res) => {
    try{
        const {body, postId} = req.body

        const newComment = await Comment.create({
            comment_body:body,
            post_id: postId,
            comment_poster: req.session.user,
            user_id: req.session.userid
        })
        res.json("POSTED")
    }
    catch(err){
        res.status(500).json({err})
    }
})

module.exports = router