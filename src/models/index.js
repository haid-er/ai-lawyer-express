'use strict';
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')["development"];
const db = {};
const envConf = process.env


let dialectOptions = {};

if (!env === "development") {
  dialectOptions = {
    native: true,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(envConf.DB_NAME, envConf.DB_USER, envConf.DB_PASSWORD, {
  host: envConf.DB_HOST,
  port: envConf.DB_PORT,
  dialect: envConf.DB_DIALECT,
  logging: console.log,
  benchmark: true,
  dialectOptions,
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
