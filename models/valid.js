const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const valid = sequelize.define('valid', {
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
  startDt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
  expiryDt: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: 'null',
  },
  locked: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: '0',
    comment: 'null',
  },
});

module.exports = valid;
