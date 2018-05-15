const express = require("express");
const path =  require("path");
const bodyParser = require("body-parser");
const connection = require("./config/config.json");
const routes = require("./controllers/dtmcontroller.js");

var app = express();
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", routes)
app.use(express.static(path.join(__dirname, "public")));

// app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var PORT = 4242;

var db = require("./models");

db.sequelize.sync({force:true}).then(function() {
    app.listen(process.env.PORT || PORT, function () {
        console.log("Server listening on: http://localhost: " + PORT)
    });
})

