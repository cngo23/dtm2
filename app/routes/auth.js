var authController = require("../contollers/authcontroller.js");

module.exports = function(app) {
    app.get("/signup", authController.signup);
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",

        failureRedirect: "/signup"
    }))

    app.get("/login", authController.login);
}

