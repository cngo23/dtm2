const express = require("express");
const router = express.Router();

var db = require("../models")

router.get("/", function (req,res) {
    res.redirect("/students")

    //add get/post routes here

});

module.exports = router;