const currencyModel = require('../../models/currency')
const { QueryTypes } = require('sequelize')
const sequelize = require('sequelize')
const db = require('../../db/config')
// All Currency List
const allCurrency = async () => {
	try {
		const currency = await currencyModel.findAll({ raw: true })
		return currency
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}
// Create Currency
const storeCurrency = async (data, res) => {
	try {
		const currency = await currencyModel.create(data, { raw: true })
		return currency
	} catch (error) {
		console.log(error)
	}
}
// Delete Currency
const deleteCurrency = async (currencyID, res) => {
	try {
		const deleted = await currencyModel.destroy({
			where: { currencyID: currencyID },
		})
		if (deleted == 1) {
			// If the Currency is deleted
			return 'Sucessfully Currency Deleted'
		} else {
			return 'currencyID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// Edit Currency
const editCurrency = async (data, res) => {
	try {
		const currencyCheck = await currencyModel.findOne({
			where: { currencyID: data.currencyID },
		})

		if (currencyCheck) {
			// If the Currency is deleted
			const updated = await currencyModel.update(res, {
				where: { currencyID: data.currencyID },
			})
			return 'Sucessfully Currency Updated'
		} else {
			return 'currencyID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

// Find  Currency Name
const findCurrency = async (data, res) => {
	try {
		const currencyCheck = await currencyModel.findOne({
			where: { currencyID: data.currencyID },
		})
		return currencyCheck
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

module.exports = {
	allCurrency,
	storeCurrency,
	deleteCurrency,
	editCurrency,
	findCurrency,
}
