const router = require('express').Router()
const allPosts = require('./allposts')
const newPost = require('./newpost')
const logIn = require('./login')
const signUp = require('./signup')
const api = require('./api')
const users = require("./users")
const comments = require("./comments")

router.use('/allposts', allPosts)
router.use('/newpost', newPost)
router.use('/login', logIn)
router.use('/signup', signUp)
router.use('/api', api)
router.use('/users', users)
router.use('/comments', comments)

module.exports = router
