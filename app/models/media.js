const DataTypes = require('sequelize')
const db = require('../db/config')

const media = db.define(
	'media',
	{
		mediaId: {
			type: DataTypes.BIGINT(20).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			unique: true,
		},
		listingId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
		},
		fileName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
		},
		fileurl: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		filesize: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true,
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		status: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
			field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.literal('CURRENT_TIMESTAMP()'),
			field: 'updated_at',
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{
		freezeTableName: true,
		tableName: 'media',
	}
)

module.exports = media
