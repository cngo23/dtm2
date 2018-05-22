module.exports = function (sequelize, DataTypes) {
  var addscore = sequelize.define("addscores", {

    add_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    score: {
      type: DataTypes.INTEGER,
      notEmpty: true
    },


  })

  addscore.associate = function (models) {
    addscore.hasMany(models.students, {
        // foreignKey: {
        //     allowNull: false
        //   }
    })
}

  return addscore;
}