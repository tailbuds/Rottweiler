/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valid', {
    'ubid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'userbase',
        key: 'ubid'
      }
    },
    'startDt': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    },
    'expiryDt': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'locked': {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'valid'
  });
};
