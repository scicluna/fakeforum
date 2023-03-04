const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.get('/', async (req, res)=>{
    try {
        console.log(req.session)
        if (req.session.loggedIn) res.render('newpost')
        else res.redirect('/login')
    }
    catch (err) {
       res.json(err)
    }
})

module.exports = router