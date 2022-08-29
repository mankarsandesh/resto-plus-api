const listingModel = require('../../models/listing')

const allListing = async () => {
	try {
		const listing = await listingModel.findAll({ raw: true })
		return listing
	} catch (error) {
		console.log(error)
		throw new Error()
	}
}

const storeListing = async (data, res) => {
	try {
		const listing = await listingModel.create(data, { raw: true })
		return listing
	} catch (error) {
		console.log(error)
	}
}
const editListing = async (data, res) => {
	try {
		const listingCheck = await listingModel.findOne({
			where: { listingID: data.listingID },
		})
		if (!listingCheck) {
			return 'listingID not found'
		}
		// If the Listing is deleted
		const updated = await listingModel.update(data, {
			where: { listingID: data.listingID },
		})
		return 'Sucessfully Listing Updated'
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}
const deleteListing = async (listingID, res) => {
	try {
		const deleted = await listingModel.destroy({
			where: { listingID: listingID },
		})
		if (deleted == 1) {
			// If the category is deleted
			return 'Sucessfully Listing Deleted'
		} else {
			return 'listingID not found'
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

module.exports = {
	allListing,
	storeListing,
	deleteListing,
	editListing,
}
