var bCrypt = require("bcrypt-nodejs");

module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require("passport-local").Strategy;

    //sign-up
    passport.use("local-signup", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                    };
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function (user) {
                    if (user) {
                        return done(null, false, {
                            message: "That email has been registered"
                        });
                    } else {
                        var userPassword = generateHash(password);

                        var data = {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };

                        User.create(data).then(function (newUser, created) {
                            if (!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        })
                    }
                })
            }
    ));


    //log in
    passport.use("local-login", new LocalStrategy (
        {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },


    function(req, email, password, done) {
        var User = user;
        var isValidPass = function(userpass, password){
            return bCrypt.compareSync(password, userpass);
        }

        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
            if(!user) {
                return done(null, false, {
                    message: "Email does not exist"
                });
            }
            if(!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: "Incorrect password"
                });
            }
            var userinfo = user.get();
            return done(null, userinfo);
        }).catch(function(err) {
            console.log("Error: ", err);
            return done(null, false, {
                message: "Something went wrong with your Log in"
            });
        })
    }
));

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.user_id);
    });

    // deserialize user 
    passport.deserializeUser(function (user_id, done) {
        User.findById(user_id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

}
