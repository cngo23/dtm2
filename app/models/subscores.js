module.exports = function(sequelize, DataTypes){
    var subscore = sequelize.define("subscores", {
      sub_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      score: {
        type: DataTypes.INTEGER,
        notEmpty: true
      },
    })

    subscore.associate = function (models) {
      subscore.hasMany(models.students, {
          // foreignKey: {
          //     allowNull: false
          //   }
      })
  }
  
    return subscore;
  }