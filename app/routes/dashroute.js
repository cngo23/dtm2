const orm = require("../config/orm.js");

var students = {
    all: function (tableOutput) {
        orm.showAll("students", function (res) {
            tableOutput(res);
        })
    },

    create: function(newStudentI, newStudentO) {
        orm.newStudent(newStudentI, function (data) {
            newStudentO(data);
        })
    },

    delete: function(deleteStudentI, deleteStudentO) {
        orm.eat(deleteStudentI, function (data) {
            deleteStudentO(data);
        })
    }
}

module.exports = students;
