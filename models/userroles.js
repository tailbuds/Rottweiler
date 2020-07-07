const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const userRoles = sequelize.define('userroles', {
  ubid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'userbase',
      key: 'ubid',
    },
  },
  roleid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: '6',
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'rolemaster',
      key: 'roleid',
    },
  },
});

module.exports = userRoles;
