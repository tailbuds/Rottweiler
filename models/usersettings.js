/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersettings', {
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
    'setting1': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting2': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting3': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting4': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting5': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting6': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'setting7': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'usersettings'
  });
};
