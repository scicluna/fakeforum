const express = require('express')
const exphbs = require('express-handlebars');
const path = require("path")
const routes = require("./routes/index")
const session = require('express-session');

const sequelize = require("./connection/connection")
const app = express()
const PORT = process.env.PORT || 3001
// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
  };  
app.use(session(sess));

const hbs = exphbs.create({});

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
//COMMENT ON POSTS