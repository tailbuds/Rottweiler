const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const roleDetails = sequelize.define('roledetails', {
  roleid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'rolemasters',
      key: 'roleid',
    },
  },
  actionid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'actionmasters',
      key: 'actionid',
    },
  },
});

module.exports = roleDetails;
