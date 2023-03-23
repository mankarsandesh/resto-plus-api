const countryModel = require('../../models/country')
// All Country
const allCountry = async () => {
	try {
		const country = await countryModel.findAll({ raw: true })
		return country
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}
// Add Country
const storeCountry = async (data, res) => {
	try {
		const country = await countryModel.create(data, { raw: true })
		return country
	} catch (error) {
		console.log(error)
	}
}
// Edit Country
const editCountry = async (data, res) => {
	try {
		const countryCheck = await countryModel.findOne({
			where: { countryID: data.countryID },
		})
		if (!countryCheck) {
			return 'CountryId not found'
		}
		// If the Country is deleted
		const updated = await countryModel.update(data, {
			where: { countryID: data.countryID },
		})
		return 'Sucessfully Country Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
// Delete Country
const deleteCountry = async (countryID, res) => {
	try {
		const deleted = await countryModel.destroy({
			where: { countryID: countryID },
		})
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully Country Deleted'
		} else {
			return 'countryID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

module.exports = {
	allCountry,
	storeCountry,
	deleteCountry,
	editCountry,
}
