const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const user = sequelize.define('user', {
  username: {
    type: DataTypes.STRING(16),
    allowNull: false,
    comment: 'null',
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'null',
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: 'null',
  },
  create_time: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
});

module.exports = user;
