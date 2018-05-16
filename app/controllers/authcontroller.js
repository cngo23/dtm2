var exports = module.exports = {}
exports.signup = function(req, res) {
    res.render("pages/signup");
}

exports.login = function(req, res) {
    res.render("pages/login");
}