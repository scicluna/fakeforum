const router = require('express').Router();
const allPosts = require('./allposts')

router.use('/allposts', allPosts);

module.exports = router;
