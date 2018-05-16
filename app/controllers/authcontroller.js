var exports = module.exports = {}

exports.signup = function (req, res) {
    res.render("pages/signup");
}

exports.login = function (req, res) {
    res.render("pages/login");
}

exports.dashboard = function (req, res) {
    res.render("dashboard");
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });

}