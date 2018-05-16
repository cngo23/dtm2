var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {

    app.get("/dashboard", isLoggedIn, authController.dashboard);

    app.get("/signup", authController.signup);
    
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",

        failureRedirect: "/signup"
    }))

    app.get("/login", authController.login);

    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/dashboard",
        failureRedirect: "/login"
    }))

    app.get("/logout", authController.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) 
            return next();
        res.redirect('/login');
     
    }
}

