const DataTypes = require('sequelize')
const db = require('../db/config')

const review = db.define(
	'media',
	{
		reviewId: {
			type: DataTypes.BIGINT(20).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			unique: true,
		},
		userId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
		},
		comments: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
		},

		media: {
			type: DataTypes.BOOLEAN,
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
		tableName: 'review',
	}
)

module.exports = review
