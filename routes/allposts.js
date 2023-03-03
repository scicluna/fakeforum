const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        const postData = await Post.findAll({ include: { all: true, nested: true}}) 
        const posts = postData.map((post) => post.get({ plain: true}))
        console.log(posts)

        res.render('posts', {posts})
    }
    catch (err) {
        res.render(err)
    }

})

module.exports =  router 