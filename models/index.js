const Category = require("./Category")
const Post = require("./Post")
const User = require("./User")
const Comment = require("./Comment")

Post.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
})


Category.hasMany(Post, {
    foreignKey: 'category_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = {Category,Post,User,Comment};
