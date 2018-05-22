module.exports = function(sequelize, DataTypes){
    var multscore = sequelize.define("multscores", {
      mult_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      score: {
        type: DataTypes.INTEGER,
        notEmpty: true
      },
    })

    multscore.associate = function (models) {
      multscore.hasMany(models.students, {
          // foreignKey: {
          //     allowNull: false
          //   }
      })
  }
  
    return multscore;
  }