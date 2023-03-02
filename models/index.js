const Category = require("./Category")
const Post = require("./Post")
const User = require("./User")

Post.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Category.hasMany(Post, {
    foreignKey: 'category_id'
})

module.exports = {Category,Post,User,};
