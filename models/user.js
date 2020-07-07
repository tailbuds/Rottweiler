/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    'username': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'password': {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "null"
    },
    'create_time': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'user'
  });
};
