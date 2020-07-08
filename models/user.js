const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const user = sequelize.define('user', {
  username: {
    type: Sequelize.STRING(16),
    allowNull: false,
    comment: 'null',
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    comment: 'null',
  },
  password: {
    type: Sequelize.STRING(32),
    allowNull: false,
    comment: 'null',
  },
  googleid: {
    type: Sequelize.STRING(),
    allowNull: true,
    unique: true,
  },
  facebookid: {
    type: Sequelize.STRING(),
    allowNull: true,
    unique: true,
  },
  create_time: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    comment: 'null',
  },
});

module.exports = user;
