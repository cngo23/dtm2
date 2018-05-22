var express = require('express');

var router = express.Router();

var db = require("../models")

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/login', function (req, res) {
    // let css = '/css/styles.css';

    //let loginlinks = {css: css}
    //res.render('login', loginlinks);
    res.render("../views/pages/login")
});

router.get('/signup', function (req, res) {
    res.render("../views/pages/signup")
});

router.get('/gameplay', function (req, res) {
    let css = '/css/gameplay.css';
    let js = '/js/gameplay.js';
    let links = {
        css: css,
        js: js
    }
    res.render('gameplay', links);
});

router.get('/home', function (req, res) {
    res.render('index');
})

router.post("/dashboard/addstud", function (req, res) {
    console.log(req.body) 
    db.students.create({
        name: req.body.name,
        age: req.body.age
    }).then(function (data) {
        res.json(data) 
        console.log(data)
    });
});

router.get("/student", function (req, res) {
    db.students.findAll({

    }).then(function(data) {
        res.json(data)
        console.log("*******************")
        console.log(data)
        console.log("*******************")
        res.render("dashboard", {student: data.student.dataValues})
        
    })
})




module.exports = router;