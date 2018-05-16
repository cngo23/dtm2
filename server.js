var express = require("express");
var Sequelize = require("sequelize");

var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session")
// var connection = require("./config/config.json");
// var routes = require("./controllers/dtmcontroller.js");

var app = express();
var PORT = process.env.PORT || 4242;

var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("views", "./app/views");
app.engine("handlebars", exphbs({extname:".handlebars"}));
app.set("view engine", ".handlebars")

app.use(session({secret:"dtmcat", resave: true, saveUninitialized:true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

var env = require("dotenv").load();

var models = require("./app/models");

//routes
var authRoute = require("./app/routes/auth.js")(app, passport);

require("./app/config/passport/passport.js")

models.sequelize.sync().then(function() {
    console.log("Database is all gravy");
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update...")
});

