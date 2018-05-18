module.exports = function(sequelize, DataTypes) {
 
    var User = sequelize.define('user', {

        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        age: {
            type: DataTypes.INTEGER,
            notEmpty: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            notEmpty: true
        },
        password: {
            type: DataTypes.STRING,

            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
            notEmpty: true
        },
        createdAt: {
            type: DataTypes.DATE(),
            defaultValue: sequelize.literal('NOW()'),
        },
 
 
    });
 
    return User;
 
}