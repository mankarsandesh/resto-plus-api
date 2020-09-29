const DataTypes = require('sequelize');
const db = require('../db/config');

const Currency = db.define('currency', {
    currencyID: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currencyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
        field: 'updated_at'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
}, {
    freezeTableName: true,
    tableName: 'currency'
});

module.exports = Currency;