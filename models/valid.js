const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const valid = sequelize.define('valid', {
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
  startDt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
  expiryDt: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: 'null',
  },
  locked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: '0',
    comment: 'null',
  },
});

module.exports = valid;
