/* jshint indent: 2 */
const Sequelize = require('sequelize');

const sequelize = require('../config/db');
const roleMaster = sequelize.define('rolemaster', {
  roleid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: 'null',
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: 'null',
    unique: true,
  },
});

module.exports = roleMaster;
