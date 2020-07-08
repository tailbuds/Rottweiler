const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const userRoles = sequelize.define('userroles', {
  ubid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,

    comment: 'null',
    autoIncrement: true,
    references: {
      model: 'userbases',
      key: 'ubid',
    },
  },
  roleid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: '6',
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'rolemasters',
      key: 'roleid',
    },
  },
});

module.exports = userRoles;
