const DataTypes = require("sequelize");
const db = require("../db/config");

const Category = db.define(
  "category",
  {
    categoryID: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    categoryDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP()"),
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP()"),
      field: "updated_at",
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    tableName: "category",
  }
);

module.exports = Category;
