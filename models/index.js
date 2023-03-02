const Category = require("./Category")
const Post = require("./Post")
const User = require("./User")

Post.belongsTo(Category)

Post.belongsTo(User)

User.hasMany(Post)

Category.hasMany(Post)

module.exports = {Category,Post,User,};
  