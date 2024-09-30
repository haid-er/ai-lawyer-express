'use strict';
const {
    Model
} = require('sequelize');

const User = (sequelize, DataTypes) => {
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        nickName: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};

module.exports = User;