const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/:user', async (req, res)=>{
    try {
        const user = req.params.user
        const userData = await User.findAll({include: { all: true, nested: true}, where: {user_name : user}})
        
        const plainData = userData.map(data=>data.get({plain: true}))
        const userPosts = plainData[0].posts

        res.render('userinfo', {user, userPosts})
    }
    catch (err) {
        res.status(500).json({err})
    }
})

module.exports = router