const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const roleDetails = sequelize.define('roledetails', {
  roleid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'rolemaster',
      key: 'roleid',
    },
  },
  actionid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'actionmaster',
      key: 'actionid',
    },
  },
});

module.exports = roleDetails;
