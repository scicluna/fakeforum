const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/:user', async (req, res)=>{
    try {
        const username = req.params.user
        const userData = await User.findAll({ include:[{model: Post}], where: {user_name : username}})
        
        const plainData = userData.map(data=>data.get({plain: true}))
        const userPosts = plainData[0].posts

        res.render('userinfo', {userPosts, username, loggedIn: req.session.loggedIn})
    }
    catch (err) {
        res.status(500).json({err})
    }
})

module.exports = router