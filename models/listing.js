/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listing', {
    'listID': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'title': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'googleLocation': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'website': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'phoneNo': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'resturantOpen': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'allowService': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'addedBy': {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "null"
    },
    'createdAt': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'updatedAt': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'listing'
  });
};
