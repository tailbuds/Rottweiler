/* jshint indent: 2 */
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const userBase = sequelize.define('userbase', {
  ubid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: 'null',
    autoIncrement: true,
  },
  firstName: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'null',
  },
  lastName: {
    type: Sequelize.STRING(45),
    allowNull: false,
    comment: 'null',
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
    comment: 'null',
    unique: true,
  },
  password: {
    type: Sequelize.STRING(128),
    allowNull: false,
    comment: 'null',
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    comment: 'null',
  },
  createdOn: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
  updatedOn: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
});

module.exports = userBase;
