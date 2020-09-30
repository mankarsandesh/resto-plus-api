const DataTypes = require('sequelize');
const db = require('../db/config');

const Listing = db.define('listing', {
    listingID: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
    emailID: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phoneNo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contactNo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue : null
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,        
    },
    listingTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    listingDescription: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    categoryID: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    city: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    address: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    website: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue : null
    },
    workingHours: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    currency: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    priceStatus: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    priceFrom: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    priceTo: {
        type: DataTypes.INTEGER(10),
        allowNull: false          
    },
    youTubeVideo: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue : null
    },
    facebook: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue : null
    },
    instagram: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue : null
    },
    listingKeywords: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue : null
    },
    listingStatus: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
        defaultValue : 0
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
    tableName: 'listing'
});

module.exports = Listing;