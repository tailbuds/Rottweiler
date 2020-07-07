/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actionmaster', {
    'actionid': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'action': {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "null",
      unique: true
    }
  }, {
    tableName: 'actionmaster'
  });
};
