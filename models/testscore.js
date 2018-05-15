module.exports = function(sequelize, DataTypes){
    var testscore = sequelize.define("testscore", {
      student: DataTypes.STRING,
      test: DataTypes.STRING,
      scores: DataTypes.INTEGER
    })
  
    return testscore;
  }
