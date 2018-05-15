module.exports = function(sequelize, DataTypes) {
    var student = sequelize.define("students", {
        text:{type: DataTypes.STRING,
        validate:{
            len:[3,25]
        },
    },
    flag: DataTypes.BOOLEAN
    })

    return student;
}