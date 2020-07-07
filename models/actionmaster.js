/* jshint indent: 2 */

const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const actionMaster = sequelize.define('actionmaster', {
  actionid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: 'null',
    autoIncrement: true,
  },
  action: {
    type: Sequelize.STRING(16),
    allowNull: false,
    comment: 'null',
    unique: true,
  },
});

module.exports = actionMaster;
