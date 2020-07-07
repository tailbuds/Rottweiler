/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userroles', {
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
    'roleid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: '6',
      primaryKey: true,
      comment: "null",
      references: {
        model: 'rolemaster',
        key: 'roleid'
      }
    }
  }, {
    tableName: 'userroles'
  });
};
