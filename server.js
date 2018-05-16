const Sequelize = require('sequelize');
const express = require("express");
//Templating
const exphbs = require("express-handlebars")
// Middleware
const session = require('express-session');
const passport = require('passport');
const bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 4242;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setting pssport authentication steps
// app.use(session({secret:"dtmcat", resave: true, saveUninitialized:true})); //session secret
// app.use(passport.initialize());
// app.use(passport.session()); 

// var env = require("dotenv").load();

var models = require("./app/models");

//var controllers = require("./app/controllers");

// Static directory
app.use(express.static(__dirname + '/public'));

//set up for handlebars templating
app.engine("handlebars", exphbs({extname:".handlebars"}));
app.set("views", "./app/views/")
app.set("view engine", "handlebars");

//main routing file
let routes = require('./app/routes/gameroute');
app.use(routes);

// require("./app/routes/auth")(app, passport);

// require("./app/config/passport/passport")(passport, models.user);

// models.sequelize.sync({force:true}).then(function() {
//     console.log("Database is all gravy");
// }).catch(function(err) {
//     console.log(err, "Something went wrong with the Database Update...")
// });

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });

