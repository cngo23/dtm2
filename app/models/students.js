module.exports = function (sequelize, DataTypes) {
    var student = sequelize.define("students", {
        student_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        age: {
            type: DataTypes.INTEGER,
            notEmpty: true
        }

    })

    student.associate = function (models) {
        student.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
              }
        })
    }

    student.associate = function (models) {
        student.belongsTo(models.addscores, {
            foreignKey: {
                allowNull: false
              }
        })
    }

    student.associate = function (models) {
        student.belongsTo(models.subscores, {
            foreignKey: {
                allowNull: false
              }
        })
    }

    student.associate = function (models) {
        student.belongsTo(models.multscores, {
            foreignKey: {
                allowNull: false
              }
        })
    }

    return student;
}