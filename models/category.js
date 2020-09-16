/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    categoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()')
  },
  updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()')
  }
  }, {
    tableName: 'category'
  });
};
