const router = require('express').Router()
const allPosts = require('./allposts')
const newPost = require('./newpost')
const logIn = require('./login')
const signUp = require('./signup')

router.use('/allposts', allPosts)
router.use('/newpost', newPost)
router.use('/login', logIn)
router.use('/signup', signUp)

module.exports = router
