const express = require('express')
const exphbs = require('express-handlebars');

const sequelize = require("./connection/connection")
const app = express()
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}`))
})