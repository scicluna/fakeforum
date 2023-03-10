const { Model, DataTypes} = require('sequelize')
const sequelize = require('../connection/connection')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        post_title: {
            type: DataTypes.STRING,
            allowNull: true
        },

        post_body: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
                unique: false
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },

        poster_name: {
            type: DataTypes.STRING,
            unique: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post