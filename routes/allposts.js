const router = require('express').Router();
const sequelize = require('../connection/connection');
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        const postData = await Post.findAll({ include:[{model: User}],  order: [["createdAt", "DESC"]]}) 
        const posts = postData.map((post) => post.get({ plain: true}))

        console.log(posts)

        res.render('posts', {posts, loggedIn:req.session.loggedIn, user: req.session.user})
    }
    catch (err) {
        res.render(err)
    }
})

router.get('/:id', async (req, res)=>{
    try {
        const postData = await Post.findAll({ include:[{model: User}], order: [["createdAt", "DESC"]], where: {category_id: req.params.id}}) 
        const posts = postData.map((post) => post.get({ plain: true}))

        res.render('posts', {posts, loggedIn:req.session.loggedIn})
    }
    catch (err) {
        res.render(err)
    }
})

module.exports =  router 