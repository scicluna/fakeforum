require('dotenv').config()
const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true
    }
})

module.exports = sequelize