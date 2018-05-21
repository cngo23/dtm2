var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.render('index');
})

router.get('/login', function(req, res){
   // let css = '/css/styles.css';
  
    //let loginlinks = {css: css}
    //res.render('login', loginlinks);
    res.render("../views/pages/login")
});

router.get('/signup', function(req, res){
     res.render("../views/pages/signup")
 });

 router.get('/gameplay', function(req, res){
    let css = '/css/gameplay.css';
    let js = '/js/gameplay.js';
    let links = {css: css, js: js}
    res.render('gameplay', links);
});

router.get('/home', function(req, res){
    res.render('index');
})
<<<<<<< HEAD



=======
>>>>>>> c13b16ca79158b255fc24f46eb7110e966e3c9e9

module.exports = router;


