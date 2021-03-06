const express = require("express");
const app = express();
const router = express.Router();

var db = require("../models");

app.get("/", function (req,res) {
    res.redirect("/dashboard")
});

app.get("/dashboard", function (req, res) {
    db.student.findAll({}).then(function (data) {
        var hbsObject = {students: data };
        res.render("dashboard", hbsObject);
    });
})

app.post("/dashboard/addstud", function (req, res) {
console.log(req.body);
    db.student.create({
        name: req.body.name,
        age: req.body.age

    }).then(function (data) {
        res.redirect("/dashboard")
    }).catch(function(err) {
        console.log("saving student unsuccessful");
            console.log(err)
    });
});

// router.post("/student/delete/:id", function (req, res) {
//     students.delete(req.params.id, function () {
//         res.redirect("/dashboard")
//     })
// })



module.exports = router;