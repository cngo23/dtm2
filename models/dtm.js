module.exports = function(sequelize, DataTypes) {
    var student = sequelize.define("students", {
       student_id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true
       },
       name: {
           type: DataTypes.STRING,
           notEmpty: true
       }
       
    })

    return student;
}
