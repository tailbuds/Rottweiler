/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolemaster', {
    'roleid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'role': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null",
      unique: true
    }
  }, {
    tableName: 'rolemaster'
  });
};
