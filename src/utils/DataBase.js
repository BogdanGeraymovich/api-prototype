const Sequelize = require('sequelize');

const {
  dbType, dbHost, dbPort, dbUser, dbPassword, dbName,
} = require('../../config/config');
const logger = require('../../config/winston');

module.exports.default = class DataBase {
  constructor() {
    this.db = DataBase.createConnection();
  }

  static createConnection() {
    return new Sequelize(`${dbType}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);
  }
};
