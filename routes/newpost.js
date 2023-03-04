const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        if (req.session.loggedIn) res.render('newpost', {loggedIn: req.session.loggedIn})
        else res.redirect('/login')
    }
    catch (err) {
       res.json(err)
    }
})

router.post('/', async (req, res)=>{
    try{
        const {title, body, categoryid, user} = req.body
        if (!title || !body || !categoryid || !user) return res.status(500).json({msg: "Oops, something went wrong."})

        const newPost = await Post.create({
            post_title: title,
            post_body: body,
            category_id: categoryid,
            user_id: user
        })
        res.json(newPost).redirect('/posts')
    }
    catch (err){

    }
})

module.exports = router