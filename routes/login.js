const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        if (!req.session.loggedIn) res.render('loginform')
        else res.render('allposts', {loggedIn: req.body.loggedIn})
    }
    catch (err) {
        res.json(err)
    }
})

module.exports = router