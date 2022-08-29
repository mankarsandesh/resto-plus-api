const cityModel = require('../../models/city')
const { QueryTypes } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../../db/config')

const allCity = async () => {
	try {
		const city = await cityModel.findAll({ raw: true })
		return city
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

const storeCity = async (data, res) => {
	try {
		const city = await cityModel.create(data, { raw: true })
		return city
	} catch (error) {
		console.log(error)
	}
}

const deleteCity = async (cityID, res) => {
	try {
		const deleted = await cityModel.destroy({ where: { cityID: cityID } })
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully City Deleted'
		} else {
			return 'cityID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

const editCity = async (data, res) => {
	try {
		const cityCheck = await cityModel.findOne({
			where: { cityID: data.cityID },
		})
		if (!cityCheck) {
			return 'cityID not found'
		}
		// If the City is deleted
		const updated = await cityModel.update(data, {
			where: { cityID: data.cityID },
		})
		return 'Sucessfully City Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

module.exports = {
	allCity,
	storeCity,
	deleteCity,
	editCity,
}
