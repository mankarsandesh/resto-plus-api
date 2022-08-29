const {
	allCountry,
	storeCountry,
	deleteCountry,
	editCountry,
} = require('../components/models/country.interface')
const { successResponse, serverError } = require('../utils/utils')

// fetch all Country
const getAllCountry = async (req, res) => {
	try {
		const city = await allCountry()
		return res.send(successResponse(city))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Store City  Information
const countryStore = async (req, res) => {
	try {
		const userBody = req.body
		const country = await storeCountry(userBody)
		if (country.error) {
			return res.status(400).send(badRequestError(country.error))
		}
		return res.send(successResponse(country))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Edit Country
const countryEdit = async (req, res) => {
	try {
		const userBody = req.body
		const country = await editCountry(userBody)
		if (country.error) {
			return res.status(400).send(badRequestError(country.error))
		}
		return res.send(successResponse(country))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

// Delete Country
const countryDelete = async (req, res) => {
	try {
		const countryID = req.body.countryID
		const country = await deleteCountry(countryID)
		if (country.error) {
			return res.status(400).send(badRequestError(country.error))
		}
		return res.send(successResponse(country))
	} catch (error) {
		console.log(error)
		res.status(500).send(serverError())
	}
}

module.exports = {
	getAllCountry,
	countryStore,
	countryDelete,
	countryEdit,
}
