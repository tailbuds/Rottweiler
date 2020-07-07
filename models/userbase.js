/* jshint indent: 2 */
const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const userBase = sequelize.define('userbase', {
  ubid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: 'null',
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING(45),
    allowNull: false,
    comment: 'null',
  },
  lastName: {
    type: DataTypes.STRING(45),
    allowNull: false,
    comment: 'null',
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: 'null',
    unique: true,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
    comment: 'null',
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'null',
  },
  createdOn: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
  updatedOn: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
});

module.exports = userBase;
