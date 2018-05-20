const express = require("express");
const router = express.Router();
const student = require("../models/user.js");

router.get("/", function (req,res) {
    res.redirect("/students")
});

router.get("/students", function (req, res) {
    student.all(function (data) {
        var hbsObject = {students: data };
        res.render("index", hbsObject);
    });
})

router.post("/students/add", function (req, res) {
    students.create(req.body.student_name, function () {
        res.redirect("/student")
    });
})

router.post("/student/delete/:id", function (req, res) {
    students.delete(req.params.id, function () {
        res.redirect("/students")
    })
})

module.exports = router;