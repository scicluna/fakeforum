const express = require('express')
const exphbs = require('express-handlebars');
const path = require("path")
const routes = require("./routes/index")

const sequelize = require("./connection/connection")
const app = express()
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.redirect('/allposts')
})

app.use(routes)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}`))
})

//TODOs
/////////////////////////////////////////
//SET UP BASIC ROUTES
//CREATE MAIN HTML TEMPLATE
//CREATE FORUM SUBTEMPLATE
//CREATE POST PARTIAL
//STYLE EVERYTHING TO DISPLAY THE MESSAGES
//SORT THE MESSAGES
//BY USER AND BY CATEGORY
//BE ABLE TO "LOG IN" AKA CREATE A NEW USER FOR THEMESELVES
//BE ABLE TO MAKE POSTS
//COMMENT ON POSTS