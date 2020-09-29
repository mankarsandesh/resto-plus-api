const DataTypes = require("sequelize");
const db = require("../db/config");

const UserLikes = db.define(
  "userLikes",
  {
    likeID: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    listingId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
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
    tableName: "userLikes",
  }
);

module.exports = UserLikes;
