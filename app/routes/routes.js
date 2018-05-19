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
router.get('/dashboard', function(req, res){
    res.render("../views/pages/dashboard")
});

router.get('/index', function(req, res){
    res.render("../views/pages/index")
});


module.exports = router;


//app.get('public\css\gameplay.css', function(req, res){ res.send('public\css\gameplay.css'); res.end(); });
//app.get('public\js\gameplay.js', function(req, res){ res.send('public\js\gameplay.js'); res.end(); });

