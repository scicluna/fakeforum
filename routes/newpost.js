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
        const {title, body, categoryid} = req.body
        if (!title || !body || !categoryid) return res.status(500).json({msg: "Oops, something went wrong."})

        const users = await User.findAll()
        const plainUsers = users.map((user)=>user.get({plain:true}))
        
        console.log(title, body, categoryid, req.session.userid, plainUsers[parseInt(req.session.userid)-1].user_name)

        const newPost = await Post.create({
            post_title: title,
            post_body: body,
            category_id: categoryid,
            user_id: req.session.userid,
            poster_name: plainUsers[parseInt(req.session.userid)-1].user_name
        })
        res.redirect('/allposts')
    }
    catch (err){
        console.log(err)
        res.status(500).json({err})
    }
})

module.exports = router