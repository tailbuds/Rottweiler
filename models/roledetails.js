/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roledetails', {
    'roleid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'rolemaster',
        key: 'roleid'
      }
    },
    'actionid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'actionmaster',
        key: 'actionid'
      }
    }
  }, {
    tableName: 'roledetails'
  });
};
