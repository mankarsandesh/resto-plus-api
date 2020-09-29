const DataTypes = require('sequelize');
const db = require('../db/config');

const Users = db.define('users', {
    userID: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    emailActive: {
        type: DataTypes.INTEGER(10),
        allowNull: false,  
        defaultValue : 0,      
    },
    status: {
        type: DataTypes.INTEGER(10),
        allowNull: false,    
        defaultValue : 1,          
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,        
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
    tableName: 'users'
});

module.exports = Users;