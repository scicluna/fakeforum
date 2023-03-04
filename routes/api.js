const router = require('express').Router();
const {Post, Category, User} = require("../models/index")

router.post('/users', async (req, res)=>{
    try {
        const newUserData = await User.create({
            user_name: req.body.username,
            password: req.body.password
        })

        if (!newUserData) return res.status(400).json({msg: "User not created"})
        const plainData = newUserData.get({plain: true})

        req.session.save(()=>{
            req.session.loggedIn = true
            req.session.user = req.body.username
            req.session.userid = plainData.id
            res.status(200).json({ user: newUserData, message: 'You are now logged in!' })
        })
    }
    catch (err) {res.status(500).json(err)}
})

router.post('/users/login', async (req, res)=>{
    try{
        const userData = await User.findOne({where: {
            user_name : req.body.username
        }})
        

        if (!userData) return res.status(400).json({msg: "Not a valid login or password"})
        console.log(req.session)
        const validPassword = await userData.checkPassword(req.body.password)
        if (!validPassword) return res.status(400).json({msg: "Not a valid login or password"})

        const plainData = userData.get({plain: true})
 
        req.session.save((err)=>{
            req.session.loggedIn = true
            req.session.user = req.body.username
            req.session.userid = plainData.id
            console.log(req.session)
            res.status(200).json({ user: userData, message: 'You are now logged in!' })
        })
        
    }
    catch (err){res.status(500).json(err)}
})

router.post('/users/logout', (req, res)=>{
    if (req.session.loggedIn) {
        req.session.destroy(()=>{
            res.status(204).end()
        })
    } else res.status(404).end()
})

module.exports = router
