const Sequelize = require('sequelize');

const sequelize = require('../config/db');
const userSettings = sequelize.define('usersettings', {
  ubid: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    comment: 'null',
    references: {
      model: 'userbases',
      key: 'ubid',
    },
  },
  setting1: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting2: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting3: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting4: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting5: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting6: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
  setting7: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: '0',
    comment: 'null',
  },
});

module.exports = userSettings;
