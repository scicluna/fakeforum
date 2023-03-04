const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        if (!req.session.loggedIn) res.render('signupform')
        else res.render('/allposts')
    }
    catch (err) {
        res.json(err)
    }
})

module.exports = router